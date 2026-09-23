import { getSpacing, writeConstantValue } from "./helpers";

function writeMultConstantValueProperty(
  property,
  formatedProperty,
  spacingAmount
) {
  formatedProperty.push(
    `${getSpacing(spacingAmount)}${property.name}: ${
      property.members[0].binGroupType
    } {\r\n`
  );

  const constValueWritten = writeConstantValue(property, spacingAmount + 1);

  constValueWritten.result.forEach(entry => {
    formatedProperty.push(entry);
  });

  formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);
}

export { writeMultConstantValueProperty }; // eslint-disable-line