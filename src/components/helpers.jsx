function getSpacing(number) {
  return "    ".repeat(number);
}

function getValue(member) {
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

function writeConstantValue(
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

function writeDynamics(
  constValue,
  property,
  probTableX,
  probTableY,
  probTableZ,
  probTableA,
  spacingAmount,
  timesTable,
  writeEmptyEntries = true
) {
  const result = [];

  if (
    probTableX.length ||
    probTableY.length ||
    probTableZ.length ||
    probTableA.length
  ) {
    result.push(
      `${getSpacing(spacingAmount)}dynamics: ${probTableX[0]?.binGroupType ||
        probTableY[0]?.binGroupType ||
        probTableZ[0]?.binGroupType ||
        probTableA[0]?.binGroupType} {\r\n`,
      `${getSpacing(spacingAmount + 1)}probabilityTables: list[pointer] = {\r\n`
    );

    const canHaveA =
      property.members[0].binGroup.members.findIndex(emit =>
        emit.includes("probTableA")
      ) !== -1;
    const canHaveY =
      property.members[0].binGroup.members.findIndex(emit =>
        emit.includes("probTableY")
      ) !== -1;
    const canHaveZ =
      property.members[0].binGroup.members.findIndex(emit =>
        emit.includes("probTableZ")
      ) !== -1;

    if (probTableX.length) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
        `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
      );

      probTableX.forEach(probTable => {
        result.push(
          `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
        );
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 3)}keyValues: list[${
          probTableX[0].binPropertyType
        }] = {\r\n`
      );

      probTableX.forEach(probTable => {
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
    } else if (writeEmptyEntries) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
      );
    }

    if (probTableY.length) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
        `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
      );

      probTableY.forEach(probTable => {
        result.push(
          `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
        );
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 3)}keyValues: list[${
          probTableY[0].binPropertyType
        }] = {\r\n`
      );

      probTableY.forEach(probTable => {
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
    } else if (canHaveY && writeEmptyEntries) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
      );
    }

    if (probTableZ.length) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
        `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
      );

      probTableZ.forEach(probTable => {
        result.push(
          `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
        );
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 3)}keyValues: list[${
          probTableZ[0].binPropertyType
        }] = {\r\n`
      );

      probTableZ.forEach(probTable => {
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
    } else if (canHaveZ && writeEmptyEntries) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
      );
    }

    if (probTableA.length) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
        `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
      );

      probTableA.forEach(probTable => {
        result.push(
          `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
        );
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 3)}keyValues: list[${
          probTableA[0].binPropertyType
        }] = {\r\n`
      );

      probTableA.forEach(probTable => {
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
    } else if (canHaveA && writeEmptyEntries) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
      );
    }

    result.push(`${getSpacing(spacingAmount + 1)}}\r\n`);
  } else {
    console.log(property);
    result.push(
      `${getSpacing(spacingAmount)}dynamics: ${
        timesTable[0] !== undefined
          ? timesTable[0].binGroupType
          : "pointer = VfxAnimatedVector3fVariableData"
      } {\r\n`
    );
  }

  result.push(`${getSpacing(spacingAmount + 1)}times: list[f32] = {\r\n`);

  if (timesTable.length) {
    timesTable.forEach(table => {
      result.push(`${getSpacing(spacingAmount + 2)}${table.value[0]}\r\n`);
    });

    result.push(
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount + 1)}values: list[${
        timesTable[0].binPropertyType
      }] = {\r\n`
    );

    timesTable.forEach(table => {
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
    result.push(
      `${getSpacing(spacingAmount + 2)}0\r\n`,
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount + 1)}values: list[${
        property.members[0].binPropertyType
      }] = {\r\n`,
      `${getSpacing(spacingAmount + 2)}${constValue}\r\n`,
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount)}}\r\n`
    );
  }

  return result;
}
/*
Converts text into array with each entry representing a line of text
Also removes backspaces
*/
export function FormatInput(originalTroybin) {
  const troybinArray = originalTroybin.split("\r\n");
  const convertedTroybin = [];

  for (let i = 0; i < troybinArray.length; i += 1) {
    const row = troybinArray[i];

    if (row !== "") {
      convertedTroybin.push(row);
    }
  }

  return convertedTroybin;
}

/*
Converts string value into array with floats
*/
export function FormatNumber(values) {
  const formatedValue = [];

  values.split(" ").forEach(value => {
    formatedValue.push(parseFloat(value));
  });

  return formatedValue;
}

/*
Converts string value to their correct type
*/
export function FormatValue(values, type, defaultAssetsPath) {
  let formatedValue;

  switch (type) {
    case "ONE_DOUBLE":
      formatedValue = parseFloat(values);
      break;
    case "TWO_DOUBLE":
      formatedValue = FormatNumber(values, 2);
      break;
    case "THREE_DOUBLE":
      formatedValue = FormatNumber(values, 3);
      break;
    case "FOUR_DOUBLE":
      formatedValue = FormatNumber(values, 4);
      break;
    case "FIVE_DOUBLE":
      formatedValue = FormatNumber(values, 5);
      break;
    case "DOUBLE_TO_PRIMITIVE":
      if (values === "0") {
        formatedValue = -1;
      } else if (values === "1") {
        formatedValue = "VfxPrimitiveArbitraryQuad {}";
      } else if (values === "2") {
        formatedValue = -1;
      } else if (values === "3") {
        formatedValue = -1;
      } else if (values === "4") {
        formatedValue = -1;
      } else {
        formatedValue = -1;
      }
      break;
    case "BOOLEAN/INT":
      if (values === "4") {
        formatedValue = 4;
      } else if (values === "3") {
        formatedValue = 3;
      } else if (values === "\"High\"" || values === "2") { // eslint-disable-line
        formatedValue = 2;
      } else if (values === "true" || values === "1") {
        formatedValue = 1;
      } else {
        formatedValue = 0;
      }
      break;
    case "INT/BOOLEAN":
      if (values === "1" || values === "true") {
        formatedValue = true;
      } else {
        formatedValue = false;
      }
      break;
    case "STRING_PATH":
      formatedValue = `\"${defaultAssetsPath}/${values.replace("\"", "")}`; // eslint-disable-line
      break;
    case "STRING_NO_EXT":
      formatedValue = values.replace(".troy", "");
      break;
    case "STRING_NO_PATH":
      formatedValue = values;
      break;
    case "TWO_DOUBLE_TO_ONE":
      if (values.split(" ")[0] === "1.0" || values.split(" ")[1] === "1.0") {
        formatedValue = 1;
      } else {
        formatedValue = 0;
      }
      break;
    case "TWO_DOUBLE_TO_XYZ":
      if (values.split(" ")[0] === "0") {
        formatedValue = ["X", parseFloat(values.split(" ")[1])];
      } else if (values.split(" ")[0] === "1") {
        formatedValue = ["Y", parseFloat(values.split(" ")[1])];
      } else {
        formatedValue = ["Z", parseFloat(values.split(" ")[1])];
      }
      break;
    default:
      break;
  }

  return formatedValue;
}

/*
Returns array with property in bin format
*/
export function WriteProperty(property, spacingAmount) {
  let constValueWritten;
  const forceDynamics = property.name === "worldAcceleration";
  const formatedProperty = [];

  const constantValues = [];
  const probTableX = [];
  const probTableY = [];
  const probTableZ = [];
  const probTableA = [];
  const timesTable = [];

  property.members.forEach(member => {
    const type = member.binPropertyName;

    if (type === "constantValue") {
      constantValues.push(member);
    }

    if (type.includes("probTable")) {
      if (type.includes("X")) {
        probTableX.push(member);
      } else if (type.includes("Y")) {
        probTableY.push(member);
      } else if (type.includes("Z")) {
        probTableZ.push(member);
      } else {
        probTableA.push(member);
      }
    }

    if (type.includes("timesTable")) {
      timesTable.push(member);
    }
  });

  switch (property.members[0].binGroup.structure) {
    case "ChildParticleProperty":
      constValueWritten = getValue(property.members[0]);

      formatedProperty.push(
        `${getSpacing(spacingAmount)}${property.members[0].binGroup.name}: ${
          property.members[0].binGroupType
        } {\r\n`,
        `${getSpacing(
          spacingAmount + 1
        )}childrenIdentifiers: list[embed] = {\r\n`,
        `${getSpacing(spacingAmount + 2)}VfxChildIdentifier {\r\n`,
        `${getSpacing(spacingAmount + 3)}${
          property.members[0].binPropertyName
        }: ${property.members[0].binPropertyType} = ${constValueWritten}\r\n`,
        `${getSpacing(spacingAmount + 2)}}\r\n`,
        `${getSpacing(spacingAmount + 1)}}\r\n`,
        `${getSpacing(spacingAmount)}}\r\n`
      );

      break;
    case "ColorTypeProperty":
      formatedProperty.push(
        `${getSpacing(spacingAmount)}${
          property.members[0].binPropertyName !== ""
            ? property.members[0].binPropertyName
            : property.name
        }${property.members[0].value[0]}: ${
          property.members[0].binGroupType
        } = ${property.members[0].value[1]}\r\n`
      );

      break;
    case "MultConstantValueProperty":
      formatedProperty.push(
        `${getSpacing(spacingAmount)}${property.name}: ${
          property.members[0].binGroupType
        } {\r\n`
      );

      constValueWritten = writeConstantValue(property, spacingAmount + 1);

      constValueWritten.result.forEach(entry => {
        formatedProperty.push(entry);
      });

      formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);

      break;
    case "SimpleProperty":
      constValueWritten = getValue(property.members[0]);

      if (constValueWritten !== property.members[0].defaultValue) {
        formatedProperty.push(
          `${getSpacing(spacingAmount)}${
            property.members[0].binPropertyName !== ""
              ? property.members[0].binPropertyName
              : property.name
          }: ${property.members[0].binGroupType} = ${constValueWritten}\r\n`
        );
      }

      break;
    case "SimpleObjectProperty":
      constValueWritten = writeConstantValue(
        property,
        spacingAmount + 1,
        true,
        true
      );

      if (property.members[0].value !== property.members[0].defaultValue) {
        formatedProperty.push(
          `${getSpacing(spacingAmount)}${property.name}: ${
            property.members[0].binGroupType
          } = {\r\n`
        );

        constValueWritten.result.forEach(entry => {
          formatedProperty.push(entry);
        });

        formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);
      }

      break;
    case "SimpleObjectVariableProperty":
      constValueWritten = writeConstantValue(
        constantValues,
        spacingAmount + 1,
        false
      );

      if (
        constValueWritten.result.length !== 0 ||
        probTableX.length ||
        probTableY.length ||
        probTableZ.length ||
        probTableA.length ||
        timesTable.length ||
        forceDynamics
      ) {
        formatedProperty.push(
          `${getSpacing(spacingAmount)}${property.name}: ${
            property.members[0].binGroupType
          } {\r\n`
        );

        constValueWritten.result.forEach(entry => {
          formatedProperty.push(entry);
        });

        if (
          probTableX.length ||
          probTableY.length ||
          probTableZ.length ||
          probTableA.length ||
          timesTable.length ||
          forceDynamics
        ) {
          writeDynamics(
            constValueWritten.constValue,
            property,
            probTableX,
            probTableY,
            probTableZ,
            probTableA,
            spacingAmount + 1,
            timesTable
          ).forEach(entry => {
            formatedProperty.push(entry);
          });
        }

        formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);
      }

      break;
    case "ShapeRotationAnglesProperty":
      formatedProperty.push(
        `${getSpacing(spacingAmount)}${property.name}: ${
          property.members[0].binGroupType
        } {\r\n`
      );

      if (probTableX.length) {
        formatedProperty.push(
          `${getSpacing(spacingAmount + 1)}ValueFloat {\r\n`
        );

        constValueWritten = writeConstantValue(
          [constantValues[0]],
          spacingAmount + 2,
          false
        );

        constValueWritten.result.forEach(entry => {
          formatedProperty.push(entry);
        });

        writeDynamics(
          constValueWritten.constValue,
          property,
          probTableX,
          [],
          probTableZ,
          probTableA,
          spacingAmount + 2,
          timesTable,
          false
        ).forEach(entry => {
          formatedProperty.push(entry);
        });

        formatedProperty.push(`${getSpacing(spacingAmount + 1)}}\r\n`);
      } else {
        formatedProperty.push(
          `${getSpacing(spacingAmount + 1)}ValueFloat {}\r\n`
        );
      }

      if (probTableY.length) {
        formatedProperty.push(
          `${getSpacing(spacingAmount + 1)}ValueFloat {\r\n`
        );

        constValueWritten = writeConstantValue(
          [constantValues[1]],
          spacingAmount + 2,
          false
        );

        constValueWritten.result.forEach(entry => {
          formatedProperty.push(entry);
        });

        writeDynamics(
          constValueWritten.constValue,
          property,
          [],
          probTableY,
          probTableZ,
          probTableA,
          spacingAmount + 2,
          timesTable,
          false
        ).forEach(entry => {
          formatedProperty.push(entry);
        });

        formatedProperty.push(`${getSpacing(spacingAmount + 1)}}\r\n`);
      } else {
        formatedProperty.push(
          `${getSpacing(spacingAmount + 1)}ValueFloat {}\r\n`
        );
      }

      formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);

      break;
    default:
      break;
  }

  return formatedProperty;
}

export function GetStructureData(troybinArray) {
  const entryStartIndices = [];
  let entryAmount = 0;
  let systemIndex = 0;
  let unknownIndex = -1;

  for (let i = 0; i < troybinArray.length; i += 1) {
    const row = troybinArray[i];

    // Checks if row starts with "[" to see if it's an entry starting point
    if (row[0] === "[") {
      entryStartIndices.push(i);
      entryAmount += 1;

      // Note down which one is the System entry
      if (row === "[System]") {
        systemIndex = i;
      }
    }
    // Note down which one is the UNKNOWN_HASHES entry if it exists
    if (row === "[UNKNOWN_HASHES]" || row.includes("UNKNOWN_HASH")) {
      if (unknownIndex === -1) {
        entryStartIndices.push(i);
        entryAmount += 1;
        unknownIndex = i;
      }
    }
  }

  const structureData = {
    entryAmount,
    entryStartIndices,
    systemIndex,
    unknownIndex
  };

  return structureData;
}
