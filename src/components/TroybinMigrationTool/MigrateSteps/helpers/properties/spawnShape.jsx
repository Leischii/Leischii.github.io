import { getValue, getSpacing, isValue } from "../structures/helpers";

function writeSpawnShapeProperty(
  property,
  spacing,
  propertiesWritten,
  WriteProperty,
  unknowns
) {
  if (
    property.members.length === 1 &&
    property.members[0].name === "emitOffset" &&
    property.members[0].members.length === 1 &&
    property.members[0].members[0].troybinName === "p-offset"
  ) {
    const value = getValue(property.members[0].members[0]);

    propertiesWritten.push(
      `${getSpacing(spacing)}SpawnShape: pointer = 0xee39916f {\r\n`,
      `${getSpacing(spacing + 1)}emitOffset: vec3 = ${value}\r\n`,
      `${getSpacing(spacing)}}\r\n`
    );
  } else {
    const emitOffsetProperty = property.members.find(
      member => member.name === "emitOffset"
    );

    if (emitOffsetProperty) {
      const isFlags1 =
        emitOffsetProperty.members.length > 1 &&
        emitOffsetProperty.members.every(
          member =>
            member.troybinName === "p-offset" ||
            (member.troybinType === "TWO_DOUBLE" &&
              ((isValue(member.value[0], 0) && isValue(member.value[1], 0)) ||
                (isValue(member.value[0], 0) && isValue(member.value[1], -1)) ||
                (isValue(member.value[0], 1) && isValue(member.value[1], 1))))
        );

      if (isFlags1) {
        const emitOffsetTroybinProperty = emitOffsetProperty.members.find(
          member => member.troybinName === "p-offset"
        );

        let isCylinder = false;
        const emitRotationAnglesProperty = property.members.find(
          member => member.name === "emitRotationAngles"
        );

        if (emitRotationAnglesProperty) {
          const rotation1P1 = emitRotationAnglesProperty.members.find(
            member => member.troybinName === "e-rotation1P1"
          );
          const rotation1P2 = emitRotationAnglesProperty.members.find(
            member => member.troybinName === "e-rotation1P2"
          );
          isCylinder =
            rotation1P1 &&
            rotation1P2 &&
            isValue(rotation1P1.value[0], 0) &&
            isValue(rotation1P1.value[1], 0) &&
            isValue(rotation1P2.value[0], 1) &&
            isValue(rotation1P2.value[1], 360);
        }

        if (isCylinder) {
          // Write cylinder if tables are 0 to 360 for rotationAngles
          propertiesWritten.push(
            `${getSpacing(
              spacing
            )}SpawnShape: pointer = VfxShapeCylinder {\r\n`,
            `${getSpacing(spacing + 1)}flags: u8 = 1\r\n`,
            `${getSpacing(spacing + 1)}radius: f32 = ${
              emitOffsetTroybinProperty.value[0]
            }\r\n`,
            emitOffsetTroybinProperty.value[1] !== 0
              ? `${getSpacing(spacing + 1)}height: f32 = ${
                  emitOffsetTroybinProperty.value[1]
                }\r\n`
              : "",
            `${getSpacing(spacing)}}\r\n`
          );
        } else {
          // Write shapebox when p-offset is presnt and all dynamics are either [0, -1] or [1, 1]
          propertiesWritten.push(
            `${getSpacing(spacing)}SpawnShape: pointer = VfxShapeBox {\r\n`,
            `${getSpacing(spacing + 1)}flags: u8 = 1\r\n`,
            emitOffsetTroybinProperty
              ? `${getSpacing(spacing + 1)}Size: vec3 = ${getValue(
                  emitOffsetTroybinProperty
                )}\r\n`
              : "",
            `${getSpacing(spacing)}}\r\n`
          );
        }
      } else {
        // Write legacy shape structure
        const writenLines = [];

        property.members.forEach(member => {
          const entry = WriteProperty(member, spacing + 1);

          entry.forEach(e => {
            writenLines.push(e);
          });
        });

        if (writenLines.length) {
          propertiesWritten.push(
            `${getSpacing(spacing)}SpawnShape: pointer = VfxShapeLegacy {\r\n`
          );

          writenLines.forEach(line => {
            propertiesWritten.push(line);
          });

          propertiesWritten.push(`${getSpacing(spacing)}}\r\n`);
        }
      }
    } else {
      unknowns.push(
        "Error: Shape could not be created due to missing emitOffset constValue"
      );
    }
  }
}

export { writeSpawnShapeProperty }; // eslint-disable-line