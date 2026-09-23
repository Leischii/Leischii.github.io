import { getSpacing } from "../structures/helpers";

function writePrimitiveProperty(
  property,
  spacing,
  propertiesWritten,
  WriteProperty
) {
  if (property.name !== "primitiveNone" && property.name !== "primitive") {
    let hasContent = false;
    const meshEntries = [];
    const beamEntries = [];

    switch (property.name) {
      // 1
      case "primitiveArbitraryQuad":
        propertiesWritten.push(
          `${getSpacing(
            spacing + 3
          )}primitive: pointer = VfxPrimitiveArbitraryQuad {}\r\n`
        );
        break;
      // 2
      case "primitiveRay":
        propertiesWritten.push(
          `${getSpacing(
            spacing + 3
          )}primitive: pointer = VfxPrimitiveRay {}\r\n`
        );
        break;
      // 3
      case "primitiveMesh":
        hasContent = true;

        propertiesWritten.push(
          `${getSpacing(
            spacing + 3
          )}primitive: pointer = VfxPrimitiveMesh {\r\n`,
          `${getSpacing(spacing + 4)}mMesh: embed = VfxMeshDefinitionData {\r\n`
        );
        break;
      // 4
      case "primitiveTrail":
        hasContent = true;

        propertiesWritten.push(
          `${getSpacing(
            spacing + 3
          )}primitive: pointer = VfxPrimitiveCameraTrail {\r\n`,
          `${getSpacing(
            spacing + 4
          )}mTrail: embed = VfxTrailDefinitionData {\r\n`
        );
        break;
      // 5
      case "primitiveArbitraryTrail":
        hasContent = true;

        propertiesWritten.push(
          `${getSpacing(
            spacing + 3
          )}primitive: pointer = VfxPrimitiveArbitraryTrail {\r\n`,
          `${getSpacing(
            spacing + 4
          )}mTrail: embed = VfxTrailDefinitionData {\r\n`
        );
        break;
      // 6
      case "primitiveBeam":
        hasContent = true;

        propertiesWritten.push(
          `${getSpacing(
            spacing + 3
          )}primitive: pointer = VfxPrimitiveBeam {\r\n`
        );

        for (let i = 0; i < property.members.length; i += 1) {
          const primitiveMember = property.members[i];

          if (primitiveMember.name === "mMesh") {
            meshEntries.push(primitiveMember);
          } else {
            beamEntries.push(primitiveMember);
          }
        }

        if (meshEntries.length) {
          propertiesWritten.push(
            `${getSpacing(
              spacing + 4
            )}mMesh: embed = VfxMeshDefinitionData {\r\n`
          );

          meshEntries.forEach(member => {
            const meshEntry = WriteProperty(member, spacing + 5);

            meshEntry.forEach(e => {
              propertiesWritten.push(e);
            });
          });

          propertiesWritten.push(`${getSpacing(spacing + 4)}}\r\n`);
        }

        if (beamEntries.length) {
          propertiesWritten.push(
            `${getSpacing(
              spacing + 4
            )}mBeam: embed = VfxBeamDefinitionData {\r\n`
          );

          beamEntries.forEach(member => {
            const beamEntry = WriteProperty(member, spacing + 5);

            beamEntry.forEach(e => {
              propertiesWritten.push(e);
            });
          });

          propertiesWritten.push(`${getSpacing(spacing + 4)}}\r\n`);
        }

        propertiesWritten.push(`${getSpacing(spacing + 3)}}\r\n`);

        break;
      // 7
      case "primitivePlanarProjection":
        hasContent = true;

        propertiesWritten.push(
          `${getSpacing(
            spacing + 3
          )}primitive: pointer = VfxPrimitivePlanarProjection {\r\n`,
          `${getSpacing(
            spacing + 4
          )}mProjection: embed = VfxProjectionDefinitionData {\r\n`
        );
        break;
      // 8
      case "primitiveAttachedMesh":
        hasContent = true;

        propertiesWritten.push(
          `${getSpacing(
            spacing + 3
          )}primitive: pointer = VfxPrimitiveAttachedMesh {\r\n`,
          `${getSpacing(spacing + 4)}mMesh: embed = VfxMeshDefinitionData {\r\n`
        );
        break;
      // 11
      case "primitiveAttachedMeshEmpty":
        hasContent = !!property.members.length;

        propertiesWritten.push(
          `${getSpacing(
            spacing + 3
          )}primitive: pointer = VfxPrimitiveAttachedMesh {${
            property.members.length ? "" : "}"
          }\r\n`,
          property.members.length
            ? `${getSpacing(
                spacing + 4
              )}mMesh: embed = VfxMeshDefinitionData {\r\n`
            : ""
        );
        break;
      default:
        break;
    }

    if (
      hasContent &&
      property.members.length &&
      property.name !== "primitiveBeam"
    ) {
      property.members.forEach(member => {
        const entry = WriteProperty(member, spacing + 5);

        entry.forEach(e => {
          propertiesWritten.push(e);
        });
      });

      propertiesWritten.push(
        `${getSpacing(spacing + 4)}}\r\n`,
        `${getSpacing(spacing + 3)}}\r\n`
      );
    }
  }
}

export { writePrimitiveProperty }; // eslint-disable-line