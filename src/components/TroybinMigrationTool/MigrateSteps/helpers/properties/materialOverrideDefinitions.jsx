import { getSpacing } from "../structures/helpers";

function writeMaterialOverrideDefinitionsProperty(
  property,
  spacing,
  propertiesWritten,
  WriteProperty
) {
  const writenLines = [];

  property.members[0].members.forEach(member => {
    writenLines.push(
      `${getSpacing(spacing + 1)}${property.members[0].name} {\r\n`
    );

    member.forEach(memb => {
      const entry = WriteProperty(memb, spacing + 2);

      entry.forEach(e => {
        writenLines.push(e);
      });
    });

    writenLines.push(`${getSpacing(spacing + 1)}}\r\n`);
  });

  if (writenLines.length) {
    propertiesWritten.push(
      `${getSpacing(spacing)}materialOverrideDefinitions: list[embed] = {\r\n`
    );

    writenLines.forEach(line => {
      propertiesWritten.push(line);
    });

    propertiesWritten.push(`${getSpacing(spacing)}}\r\n`);
  }
}

export { writeMaterialOverrideDefinitionsProperty }; // eslint-disable-line