import { getValue, getSpacing } from "./helpers";

function writeChildParticleProperty(property, formatedProperty, spacingAmount) {
  const constValueWritten = getValue(property.members[0]);

  formatedProperty.push(
    `${getSpacing(spacingAmount)}${property.members[0].binGroup.name}: ${
      property.members[0].binGroupType
    } {\r\n`,
    `${getSpacing(spacingAmount + 1)}childrenIdentifiers: list[embed] = {\r\n`,
    `${getSpacing(spacingAmount + 2)}VfxChildIdentifier {\r\n`,
    `${getSpacing(spacingAmount + 3)}${property.members[0].binPropertyName}: ${
      property.members[0].binPropertyType
    } = ${constValueWritten}\r\n`,
    `${getSpacing(spacingAmount + 2)}}\r\n`,
    `${getSpacing(spacingAmount + 1)}}\r\n`,
    `${getSpacing(spacingAmount)}}\r\n`
  );
}

export { writeChildParticleProperty }; // eslint-disable-line