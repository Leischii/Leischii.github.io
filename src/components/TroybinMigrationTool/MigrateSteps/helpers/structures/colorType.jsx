import { getSpacing } from "./helpers";

function writeColorTypeProperty(property, formatedProperty, spacingAmount) {
  if (property.members[0].value[1] !== property.members[0].defaultValue) {
    formatedProperty.push(
      `${getSpacing(spacingAmount)}${
        property.members[0].binPropertyName !== ""
          ? property.members[0].binPropertyName
          : property.name
      }${property.members[0].value[0]}: ${property.members[0].binGroupType} = ${
        property.members[0].value[1]
      }\r\n`
    );
  }
}

export { writeColorTypeProperty }; // eslint-disable-line