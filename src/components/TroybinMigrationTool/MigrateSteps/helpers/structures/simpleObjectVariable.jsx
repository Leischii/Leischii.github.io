import { getSpacing, writeConstantValue, writeDynamics } from "./helpers";

function writeSimpleObjectVariableProperty(
  property,
  formatedProperty,
  spacingAmount,
  constantValues,
  probTableX,
  probTableY,
  probTableZ,
  probTableA,
  timesTable,
  timesSimpleTable
) {
  const forceDynamics = property.name === "worldAcceleration";
  const constValueWritten = writeConstantValue(
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
    timesSimpleTable.length ||
    forceDynamics
  ) {
    formatedProperty.push(
      `${getSpacing(spacingAmount)}${property.name}: embed = ${
        property.members[0].binGroup.propertyType
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
      timesSimpleTable.length ||
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
        timesTable,
        timesSimpleTable
      ).forEach(entry => {
        formatedProperty.push(entry);
      });
    }

    formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);
  }
}

export { writeSimpleObjectVariableProperty }; // eslint-disable-line