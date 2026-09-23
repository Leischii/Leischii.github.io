export function getSpacing(number) {
  return "    ".repeat(number);
}

export function isValue(valueToTest, valueToMatch) {
  return (
    valueToTest.toString() === valueToMatch.toString() ||
    `${valueToTest.toString()}.0` === valueToMatch.toString() ||
    valueToTest.toString() === `${valueToMatch.toString()}.0`
  );
}

export function getValue(member) {
  let constValue = "";

  const isArray = Array.isArray(member.value);

  if (isArray) {
    const value1 = member.value[0].toString();
    const value2 = member.value[1].toString();

    constValue = `{ ${value1}, ${value2} }`;

    if (member.value.length === 3) {
      const value3 = member.value[2].toString();

      constValue = `{ ${value1}, ${value2}, ${value3} }`;
    }

    if (member.value.length === 4) {
      const value3 = member.value[2].toString();
      const value4 = member.value[3].toString();

      constValue = `{ ${value1}, ${value2}, ${value3}, ${value4} }`;
    }
  } else {
    constValue = member.value;
  }

  return constValue;
}

export function writeConstantValue(
  property,
  spacingAmount,
  isMult = true,
  valueOnly = false
) {
  const members = isMult ? property.members : property;
  const result = [];
  let returnConst;

  members.forEach(member => {
    const constValue = getValue(member);

    if (member === members[0]) {
      returnConst = constValue;
    }

    if (constValue !== member.defaultValue) {
      if (valueOnly) {
        result.push(`${getSpacing(spacingAmount)}${constValue}\r\n`);
      } else {
        result.push(
          `${getSpacing(spacingAmount)}${member.binPropertyName}: ${
            member.binPropertyType
          } = ${constValue}\r\n`
        );
      }
    }
  });

  return { constValue: returnConst, result };
}

export function writeDynamics(
  constValue,
  property,
  probTableX,
  probTableY,
  probTableZ,
  probTableA,
  spacingAmount,
  timesTable,
  timesSimpleTable,
  writeEmptyEntries = true
) {
  const result = [];

  if (
    probTableX.length ||
    probTableY.length ||
    probTableZ.length ||
    probTableA.length
  ) {
    const probabilityTables = {
      x: { data: probTableX, canHave: true },
      y: { data: probTableY, canHave: false },
      z: { data: probTableZ, canHave: false },
      a: { data: probTableA, canHave: false }
    };

    property.members[0].binGroup.members.forEach(emit => {
      if (emit.includes("probTableY")) probabilityTables.y.canHave = true;
      if (emit.includes("probTableZ")) probabilityTables.z.canHave = true;
      if (emit.includes("probTableA")) probabilityTables.a.canHave = true;
    });

    result.push(
      `${getSpacing(spacingAmount)}dynamics: ${probTableX[0]?.binGroupType ||
        probTableY[0]?.binGroupType ||
        probTableZ[0]?.binGroupType ||
        probTableA[0]?.binGroupType} {\r\n`,
      `${getSpacing(spacingAmount + 1)}probabilityTables: list[pointer] = {\r\n`
    );

    Object.keys(probabilityTables).forEach(key => {
      const currentProbTable = probabilityTables[key].data;

      if (currentProbTable.length) {
        result.push(
          `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
          `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
        );

        currentProbTable.forEach(probTable => {
          result.push(
            `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
          );
        });

        result.push(
          `${getSpacing(spacingAmount + 3)}}\r\n`,
          `${getSpacing(spacingAmount + 3)}keyValues: list[${
            currentProbTable[0].binPropertyType
          }] = {\r\n`
        );

        currentProbTable.forEach(probTable => {
          let value = probTable.value[1];

          if (probTable.value.length === 3) {
            value = `{${value[1]}, ${value[2]}}`;
          }

          if (probTable.value.length === 4) {
            value = `{${value[1]}, ${value[2]}, ${value[3]}}`;
          }

          result.push(`${getSpacing(spacingAmount + 4)}${value}\r\n`);
        });

        result.push(
          `${getSpacing(spacingAmount + 3)}}\r\n`,
          `${getSpacing(spacingAmount + 2)}}\r\n`
        );
      } else if (probabilityTables[key].canHave && writeEmptyEntries) {
        result.push(
          `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
        );
      }
    });

    result.push(`${getSpacing(spacingAmount + 1)}}\r\n`);
  } else {
    const binGroupType =
      timesSimpleTable[0] !== undefined
        ? timesSimpleTable[0].binGroupType
        : "pointer = VfxAnimatedVector3fVariableData";

    result.push(
      `${getSpacing(spacingAmount)}dynamics: ${
        timesTable[0] !== undefined ? timesTable[0].binGroupType : binGroupType
      } {\r\n`
    );
  }

  result.push(`${getSpacing(spacingAmount + 1)}times: list[f32] = {\r\n`);

  if (timesTable.length || timesSimpleTable.length) {
    const timesTableEntries = timesTable.length ? timesTable : timesSimpleTable;

    timesTableEntries.forEach(table => {
      result.push(`${getSpacing(spacingAmount + 2)}${table.value[0]}\r\n`);
    });

    result.push(
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount + 1)}values: list[${
        timesTableEntries[0].binPropertyType
      }] = {\r\n`
    );

    timesTableEntries.forEach(table => {
      let value = table.value[1];

      if (table.value.length === 3) {
        value = `{ ${table.value[1]}, ${table.value[2]} }`;
      }

      if (table.value.length === 4) {
        value = `{ ${table.value[1]}, ${table.value[2]}, ${table.value[3]} }`;
      }

      if (table.value.length === 5) {
        value = `{ ${table.value[1]}, ${table.value[2]}, ${table.value[3]}, ${table.value[4]} }`;
      }

      result.push(`${getSpacing(spacingAmount + 2)}${value}\r\n`);
    });

    result.push(
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount + 0)}}\r\n`
    );
  } else {
    const constValueEntry = property.members.find(
      memb => memb.binPropertyName === "constantValue"
    );

    result.push(
      `${getSpacing(spacingAmount + 2)}0\r\n`,
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount + 1)}values: list[${
        constValueEntry
          ? constValueEntry.binPropertyType
          : property.members[0].binPropertyType
      }] = {\r\n`,
      `${getSpacing(spacingAmount + 2)}${constValue}\r\n`,
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount)}}\r\n`
    );
  }

  return result;
}
