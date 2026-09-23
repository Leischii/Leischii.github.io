import { getSpacing, writeConstantValue, writeDynamics } from "./helpers";

function writeShapeRotationAnglesProperty(
  property,
  formatedProperty,
  spacingAmount,
  constantValues,
  probTableX,
  probTableY,
  probTableZ,
  probTableA,
  timesTable,
  timesSimpleTable,
  timesTableEntriesX,
  timesTableEntriesY
) {
  formatedProperty.push(
    `${getSpacing(spacingAmount)}${property.name}: ${
      property.members[0].binGroupType
    } {\r\n`
  );

  if (timesTable.length) {
    for (let i = 0; i < timesTable.length; i += 1) {
      const tableEntry = timesTable[i];

      if (tableEntry.troybinName.includes("e-rotation1")) {
        timesTableEntriesX.push(tableEntry);
      } else if (tableEntry.troybinName.includes("e-rotation2")) {
        timesTableEntriesY.push(tableEntry);
      }
    }
  }

  const angleData = {
    xData: {
      constValue: undefined,
      hasProbTable: probTableX.length > 0 || timesTableEntriesX.length > 0
    },
    yData: {
      constValue: undefined,
      hasProbTable: probTableY.length > 0 || timesTableEntriesY.length > 0
    }
  };

  constantValues.forEach(constant => {
    if (constant.troybinName === "e-rotation1") {
      angleData.xData.constValue = constant;
    } else if (constant.troybinName === "e-rotation2") {
      angleData.yData.constValue = constant;
    }
  });

  Object.keys(angleData).forEach(angleKey => {
    const angleEntry = angleData[angleKey];
    const probTables = angleKey === "xData" ? probTableX : probTableY;
    const timesTables =
      angleKey === "xData" ? timesTableEntriesX : timesTableEntriesY;

    if (angleEntry.hasProbTable || angleEntry.constValue) {
      if (!angleEntry.constValue) {
        // TODO: Add case handling for when constValue is missing, example: vi_q_mis_Child.troy
      }

      formatedProperty.push(`${getSpacing(spacingAmount + 1)}ValueFloat {\r\n`);

      const constValueWritten = writeConstantValue(
        [angleEntry.constValue],
        spacingAmount + 2,
        false
      );

      constValueWritten.result.forEach(entry => {
        formatedProperty.push(entry);
      });

      if (angleEntry.hasProbTable) {
        writeDynamics(
          constValueWritten.constValue,
          property,
          probTables,
          [],
          probTableZ,
          probTableA,
          spacingAmount + 2,
          timesTables,
          timesSimpleTable,
          false
        ).forEach(entry => {
          formatedProperty.push(entry);
        });
      }

      formatedProperty.push(`${getSpacing(spacingAmount + 1)}}\r\n`);
    } else if (angleKey === "xData") {
      formatedProperty.push(
        `${getSpacing(spacingAmount + 1)}ValueFloat {}\r\n`
      );
    }
  });

  formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);
}

export { writeShapeRotationAnglesProperty }; // eslint-disable-line