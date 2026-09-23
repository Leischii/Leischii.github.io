import { getSpacing, writeConstantValue } from "./helpers";

function writeSimpleObjectProperty(property, formatedProperty, spacingAmount) {
  if (property.members[0].value !== property.members[0].defaultValue) {
    formatedProperty.push(
      `${getSpacing(spacingAmount)}${property.name}: ${
        property.members[0].binGroupType
      } = {\r\n`
    );

    const isStringArray = property.members[0].troybinType === "STRINGS_NO_PATH";

    if (isStringArray) {
      property.members[0].value.forEach(valuePart => {
        formatedProperty.push(
          `${getSpacing(spacingAmount + 1)}"${valuePart}"\r\n`
        );
      });
    } else if (property.members[0].binGroup.name === "emitRotationAxes") {
      property.members.forEach(memberPart => {
        const value = `{ ${memberPart.value[0]}, ${memberPart.value[1]}, ${memberPart.value[2]} }`;

        formatedProperty.push(`${getSpacing(spacingAmount + 1)}${value}\r\n`);
      });
    } else {
      const constValueWritten = writeConstantValue(
        property,
        spacingAmount + 1,
        true,
        true
      );

      constValueWritten.result.forEach(entry => {
        formatedProperty.push(entry);
      });
    }

    formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);
  }
}

export { writeSimpleObjectProperty }; // eslint-disable-line