import { getSpacing } from "./helpers";

function writeParentObjectProperty(
  property,
  formatedProperty,
  spacingAmount,
  WriteProperty
) {
  formatedProperty.push(
    `${getSpacing(spacingAmount)}${property.propertyType} {\r\n`
  );

  property.members.forEach(member => {
    const entry = WriteProperty(member, spacingAmount + 1);

    entry.forEach(e => {
      formatedProperty.push(e);
    });
  });

  formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);
}

export { writeParentObjectProperty }; // eslint-disable-line