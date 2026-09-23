import { getSpacing } from "../structures/helpers";

function writeFieldCollectionDefinitionProperty(
  property,
  spacing,
  propertiesWritten,
  WriteProperty
) {
  const writenLines = [];

  property.members.forEach(member => {
    const options = ["Acceleration", "Attraction", "Drag", "Noise", "Orbital"];
    const fieldType = options.find(option => {
      const optionParts = member.name.split(option);

      return (
        optionParts.length === 2 &&
        optionParts[0] !== "" &&
        optionParts[1] !== ""
      );
    });

    writenLines.push(
      `${getSpacing(
        spacing + 1
      )}field${fieldType}Definitions: list[embed] = {\r\n`
    );

    member.members.forEach(definitionGroup => {
      writenLines.push(
        `${getSpacing(spacing + 2)}VfxField${fieldType}DefinitionData {\r\n`
      );

      definitionGroup.forEach(memb => {
        const entry = WriteProperty(memb, spacing + 3);

        entry.forEach(e => {
          writenLines.push(e);
        });
      });

      writenLines.push(`${getSpacing(spacing + 2)}}\r\n`);
    });

    writenLines.push(`${getSpacing(spacing + 1)}}\r\n`);
  });

  if (writenLines.length) {
    propertiesWritten.push(
      `${getSpacing(
        spacing
      )}fieldCollectionDefinition: pointer = VfxFieldCollectionDefinitionData {\r\n`
    );

    writenLines.forEach(line => {
      propertiesWritten.push(line);
    });

    propertiesWritten.push(`${getSpacing(spacing)}}\r\n`);
  }
}

export { writeFieldCollectionDefinitionProperty }; // eslint-disable-line