import {
  writeChildParticleProperty,
  writeColorTypeProperty,
  writeMultConstantValueProperty,
  writeParentObjectProperty,
  writeShapeRotationAnglesProperty,
  writeSimpleProperty,
  writeSimpleObjectProperty,
  writeSimpleObjectVariableProperty
} from "./helpers/structures";
import {
  writeFieldCollectionDefinitionProperty,
  writeMaterialOverrideDefinitionsProperty,
  writePrimitiveProperty,
  writeSpawnShapeProperty
} from "./helpers/properties";

import { getSpacing } from "./helpers/structures/helpers";

/*
Returns array with property in bin format
*/
function WriteProperty(property, spacingAmount) {
  const formatedProperty = [];
  const propertyStructure =
    property.structure || property.members[0].binGroup.structure;

  switch (propertyStructure) {
    case "ChildParticleProperty":
      writeChildParticleProperty(property, formatedProperty, spacingAmount);

      break;
    case "ColorTypeProperty":
      writeColorTypeProperty(property, formatedProperty, spacingAmount);

      break;
    case "MultConstantValueProperty":
      writeMultConstantValueProperty(property, formatedProperty, spacingAmount);

      break;
    case "ParentObjectProperty":
      writeParentObjectProperty(
        property,
        formatedProperty,
        spacingAmount,
        WriteProperty
      );

      break;
    case "SimpleProperty":
      writeSimpleProperty(property, formatedProperty, spacingAmount);

      break;
    case "SimpleObjectProperty":
      writeSimpleObjectProperty(property, formatedProperty, spacingAmount);

      break;
    case "SimpleObjectVariableProperty":
    case "ShapeRotationAnglesProperty": {
      const constantValues = [];
      const probTableX = [];
      const probTableY = [];
      const probTableZ = [];
      const probTableA = [];
      const timesTable = [];
      const timesSimpleTable = [];

      // Only needed for the ShapeRotationAnglesProperty structure
      const timesTableEntriesX = [];
      const timesTableEntriesY = [];

      property.members.forEach(member => {
        const type = member.binPropertyName;

        if (type === "constantValue") {
          constantValues.push(member);
        }

        if (type.includes("probTable")) {
          if (type.includes("X")) {
            probTableX.push(member);
          } else if (type.includes("Y")) {
            probTableY.push(member);
          } else if (type.includes("Z")) {
            probTableZ.push(member);
          } else {
            probTableA.push(member);
          }
        }

        if (type.includes("timesTable")) {
          timesTable.push(member);
        }

        if (type.includes("timesSimpleTable")) {
          timesSimpleTable.push(member);
        }
      });

      if (propertyStructure === "SimpleObjectVariableProperty") {
        writeSimpleObjectVariableProperty(
          property,
          formatedProperty,
          spacingAmount,
          constantValues,
          probTableX,
          probTableY,
          probTableZ,
          probTableA,
          timesTable,
          timesSimpleTable
        );
      } else {
        writeShapeRotationAnglesProperty(
          property,
          formatedProperty,
          spacingAmount,
          constantValues,
          probTableX,
          probTableY,
          probTableZ,
          probTableA,
          timesTable,
          timesSimpleTable,
          timesTableEntriesX,
          timesTableEntriesY
        );
      }

      break;
    }
    default:
      break;
  }

  return formatedProperty;
}

const WriteBin = (bins, defaultFilePath, unknowns) => {
  function writeEmitters(emitters, typeString, spacing) {
    const result = [];

    result.push(
      `${getSpacing(spacing + 1)}${typeString}: list[pointer] = {\r\n`
    );

    emitters.forEach(emitter => {
      const propertiesWritten = [];

      emitter.forEach(property => {
        const propertyName = property.name;

        if (propertyName.includes("primitive")) {
          writePrimitiveProperty(
            property,
            spacing,
            propertiesWritten,
            WriteProperty
          );
        } else {
          switch (propertyName) {
            case "SpawnShape":
              writeSpawnShapeProperty(
                property,
                spacing + 3,
                propertiesWritten,
                WriteProperty,
                unknowns
              );

              break;
            case "fieldCollectionDefinition":
              writeFieldCollectionDefinitionProperty(
                property,
                spacing + 3,
                propertiesWritten,
                WriteProperty
              );

              break;
            case "materialOverrideDefinitions": {
              writeMaterialOverrideDefinitionsProperty(
                property,
                spacing + 3,
                propertiesWritten,
                WriteProperty
              );

              break;
            }
            default: {
              const entry = WriteProperty(property, spacing + 3);

              entry.forEach(e => {
                propertiesWritten.push(e);
              });
              break;
            }
          }
        }
      });

      if (propertiesWritten.length) {
        result.push(`${getSpacing(spacing + 2)}VfxEmitterDefinitionData {\r\n`);

        propertiesWritten.forEach(emitterLine => {
          result.push(emitterLine);
        });

        result.push(`${getSpacing(spacing + 2)}}\r\n`);
      }
    });

    result.push(`${getSpacing(spacing + 1)}}\r\n`);

    return result;
  }

  const spacing = 1;

  const finalBin = [
    "#PROP_text\r\n",
    'type: string = "PROP"\r\n',
    "version: u32 = 3\r\n",
    "linked: list[string] = {}\r\n",
    "entries: map[hash,embed] = {\r\n"
  ];

  bins.forEach(bin => {
    finalBin.push(
      `${getSpacing(spacing)}\"${defaultFilePath}/${ // eslint-disable-line
        bin.name
      }\" = VfxSystemDefinitionData {\r\n` // eslint-disable-line
    );

    if (bin.emitters.complex.length) {
      const emitters = writeEmitters(
        bin.emitters.complex,
        "complexEmitterDefinitionData",
        spacing
      );

      emitters.forEach(emitterLine => {
        finalBin.push(emitterLine);
      });
    }

    if (bin.emitters.simple.length) {
      const emitters = writeEmitters(
        bin.emitters.simple,
        "simpleEmitterDefinitionData",
        spacing
      );

      emitters.forEach(emitterLine => {
        finalBin.push(emitterLine);
      });
    }

    bin.system.forEach(systemProperty => {
      const systemEntry = WriteProperty(systemProperty, spacing + 1);

      systemEntry.forEach(s => {
        finalBin.push(s);
      });
    });

    finalBin.push(`${getSpacing(spacing)}}\r\n`);
  });

  finalBin.push("}\r\n");

  if (unknowns.length) {
    const unknownProperties = [];

    for (let i = 0; i < unknowns.length; i += 1) {
      const unkn = unknowns[i];
      const namePart = unkn.split(": ")[1];

      if (namePart[0] !== "'") {
        unknownProperties.push(unkn);
      }
    }

    if (unknownProperties.length) {
      finalBin.push(
        `\r\n`,
        `\r\n`,
        `Troygrade was unable to translate the following properties: \r\n`
      );

      unknownProperties.forEach(unknownProp => {
        finalBin.push(`${unknownProp}\r\n`);
      });
    }
  }

  return finalBin.join("");
};

export default WriteBin;
