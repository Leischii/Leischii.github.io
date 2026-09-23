import { getValue, getSpacing } from "./helpers";

function writeSimpleProperty(property, formatedProperty, spacingAmount) {
  const constValueWritten = getValue(property.members[0]);

  if (constValueWritten !== property.members[0].defaultValue) {
    formatedProperty.push(
      `${getSpacing(spacingAmount)}${
        property.members[0].binPropertyName !== ""
          ? property.members[0].binPropertyName
          : property.name
      }: ${property.members[0].binGroupType} = ${constValueWritten}\r\n`
    );
  }
}

export { writeSimpleProperty }; // eslint-disable-line