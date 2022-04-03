import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Values from "./table";
import {
  FormatInput,
  FormatValue,
  GetStructureData,
  UpdateEmitters,
  WriteProperty
} from "./helpers";
import readTroybinBinary from "./troybin";

import aatroxNew from "../splasharts/Aatrox_New.png";
import aatroxOld from "../splasharts/Aatrox_Old.png";
import akaliNew from "../splasharts/Akali_New.png";
import akaliOld from "../splasharts/Akali_Old.png";
import asheNew from "../splasharts/Ashe_New.png";
import asheOld from "../splasharts/Ashe_Old.png";
import blitzcrankNew from "../splasharts/Blitzcrank_New.png";
import blitzcrankOld from "../splasharts/Blitzcrank_Old.png";
import cassiopeiaNew from "../splasharts/Cassiopeia_New.png";
import cassiopeiaOld from "../splasharts/Cassiopeia_Old.png";
import ezrealNew from "../splasharts/Ezreal_New.png";
import ezrealOld from "../splasharts/Ezreal_Old.png";
import fioraNew from "../splasharts/Fiora_New.png";
import fioraOld from "../splasharts/Fiora_Old.png";
import gangplankNew from "../splasharts/Gangplank_New.png";
import gangplankOld from "../splasharts/Gangplank_Old.png";
import HeimerdingerNew from "../splasharts/Heimerdinger_New.png";
import HeimerdingerOld from "../splasharts/Heimerdinger_Old.png";
import katarinaNew from "../splasharts/Katarina_New.png";
import katarinaOld from "../splasharts/Katarina_Old.png";
import missFortuneNew from "../splasharts/MissFortune_New.png";
import missFortuneOld from "../splasharts/MissFortune_Old.png";
import nasusNew from "../splasharts/Nasus_New.png";
import nasusOld from "../splasharts/Nasus_Old.png";
import poppyNew from "../splasharts/Poppy_New.png";
import poppyOld from "../splasharts/Poppy_Old.png";
import sonaNew from "../splasharts/Sona_New.png";
import sonaOld from "../splasharts/Sona_Old.png";
import sionNew from "../splasharts/Sion_New.png";
import sionOld from "../splasharts/Sion_Old.png";
import seraphineNew from "../splasharts/Seraphine_New.png";
import trundleNew from "../splasharts/Trundle_New.png";
import trundleOld from "../splasharts/Trundle_Old.png";
import varusNew from "../splasharts/Varus_New.png";
import varusOld from "../splasharts/Varus_Old.png";
import veigarNew from "../splasharts/Veigar_New.png";
import veigarOld from "../splasharts/Veigar_Old.png";
import viktorNew from "../splasharts/Viktor_New.png";
import viktorOld from "../splasharts/Viktor_Old.png";
import warwickNew from "../splasharts/Warwick_New.png";
import warwickOld from "../splasharts/Warwick_Old.png";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      convertedLink: "",
      defaultAssetsPath: "",
      defaultFilePath: "",
      inputType: "",
      namesOnly: false,
      originalTroybin: "",
      outputFileName: "",
      progressStep: "",
      randomIndex: Math.floor(Math.random() * 21),
      updateFileTypes: true
    };

    this.handleChangeAssetsPath = this.handleChangeAssetsPath.bind(this);
    this.handleChangeFilePath = this.handleChangeFilePath.bind(this);
    this.handleChangeNamesOnly = this.handleChangeNamesOnly.bind(this);
    this.handleChangeUpdateFileType = this.handleChangeUpdateFileType.bind(
      this
    );
  }

  handleChangeAssetsPath(event) {
    this.setState({ defaultAssetsPath: event.target.value });
  }

  handleChangeFilePath(event) {
    this.setState({ defaultFilePath: event.target.value });
  }

  handleChangeNamesOnly(e) {
    this.setState({ namesOnly: e.target.checked });
  }

  handleChangeUpdateFileType(e) {
    this.setState({
      updateFileTypes: e.target.checked
    });
  }

  clearState = () => {
    this.setState({
      clicked: false,
      convertedLink: "",
      inputType: "",
      originalTroybin: "",
      outputFileName: "",
      progressStep: ""
    });
  };

  getInputs = () => {
    const { defaultAssetsPath, defaultFilePath } = this.state;

    if (!defaultAssetsPath.length) {
      this.setState({
        defaultAssetsPath: "ASSETS/Shared/Particles"
      });
    }

    if (!defaultFilePath.length) {
      this.setState({
        defaultFilePath: "Shared/Particles"
      });
    }
  };

  readTroybin = () => {
    const {
      defaultAssetsPath,
      inputType,
      namesOnly,
      originalTroybin,
      outputFileName,
      updateFileTypes
    } = this.state;
    let system = [];
    let unknown = [];
    const troybinEntries = [];

    let fileContent;

    if (inputType !== "text/plain") {
      this.setState({ progressStep: "Converting Troybin..." });
      fileContent = readTroybinBinary(originalTroybin);
    } else {
      fileContent = originalTroybin;
    }

    this.setState({ progressStep: "Reading Troybin..." });

    // Creates an array with each row being an entry
    // Also removes unwanted characters
    const troybinArray = FormatInput(fileContent);

    // Collect info about troybin structure
    const structureData = GetStructureData(troybinArray);

    for (let i = 0; i < structureData.entryAmount; i += 1) {
      const isUnknown =
        structureData.unknownIndex !== -1 &&
        structureData.unknownIndex === structureData.entryStartIndices[i];

      // eslint-disable-next-line
      const entryName = isUnknown ? "UNKNOWN_HASHES" : troybinArray[0].replace(/[\[\]']+/g, "");
      let entryProperties;
      if (i === structureData.entryAmount - 1) {
        entryProperties = troybinArray.splice(0, troybinArray.length);
      } else {
        entryProperties = troybinArray.splice(
          0,
          structureData.entryStartIndices[i + 1] -
            structureData.entryStartIndices[i]
        );
      }

      const entry = {
        name: entryName,
        properties: entryProperties.splice(
          isUnknown ? 0 : 1,
          entryProperties.length
        )
      };

      entry.properties = entry.properties.sort((a, b) => {
        const formatedA = a.split("=")[0].replace("'", "");
        const formatedB = b.split("=")[0].replace("'", "");

        return formatedA.localeCompare(formatedB);
      });

      if (entry.name === "System") {
        system = entry;
      } else if (entry.name === "UNKNOWN_HASHES") {
        unknown = entry;
      } else {
        troybinEntries.push(entry);
      }
    }

    troybinEntries.push(unknown.length ? (system, unknown) : system);

    const troybinData = {
      fileName: outputFileName.replace(".txt", ""),
      emitters: [],
      system: [],
      unknown: []
    };

    troybinEntries.forEach(entry => {
      const emitter = {
        name: entry.name,
        properties: []
      };
      const isSystem = entry.name === "System";
      const isUnknown = entry.name === "UNKNOWN_HASHES";

      let needsChanges = false;

      entry.properties.forEach(prop => {
        let assignedProperty = {
          value: undefined
        };
        let emitterNameEntry = -1;
        let entryFound = false;

        const stringParts = prop.split("=");
        const propertyName = stringParts[0].replace("'", "");
        const propertyValuePart = stringParts[1];

        if (!isUnknown) {
          if (isSystem) {
            Values.systemValues.forEach(sValue => {
              if (sValue.troybinName === "GroupPart") {
                if (
                  propertyName.includes("GroupPart") &&
                  !propertyName.includes("Importance") &&
                  !propertyName.includes("Type")
                ) {
                  const emitterOrderValue = parseInt(
                    propertyName.replace("GroupPart", ""),
                    10
                  );

                  assignedProperty = sValue;
                  assignedProperty.order = emitterOrderValue;
                  entryFound = true;

                  emitterNameEntry = troybinData.emitters.findIndex(
                    emit =>
                      emit.name ===
                      // eslint-disable-next-line
                      propertyValuePart.replace("\"", "").replace("\"", "")
                  );

                  if (emitterNameEntry !== -1) {
                    troybinData.emitters[
                      emitterNameEntry
                    ].order = emitterOrderValue;
                  }
                }
              } else if (sValue.troybinName === "GroupPartImportance") {
                if (
                  propertyName.includes("GroupPart") &&
                  propertyName.includes("Importance")
                ) {
                  const emitterValue = parseInt(
                    propertyName
                      .replace("GroupPart", "")
                      .replace("Importance", ""),
                    10
                  );
                  assignedProperty = sValue;
                  entryFound = true;

                  emitterNameEntry = troybinData.emitters.findIndex(
                    emit => emit.order === emitterValue
                  );
                }
              } else if (sValue.troybinName === "GroupPartType") {
                if (
                  propertyName.includes("GroupPart") &&
                  propertyName.includes("Type")
                ) {
                  if (propertyValuePart === "\"Simple\"") { // eslint-disable-line
                    entryFound = true;
                    needsChanges = true;

                    const emitterValue = parseInt(
                      propertyName.replace("GroupPart", "").replace("Type", ""),
                      10
                    );

                    emitterNameEntry = troybinData.emitters.findIndex(
                      emit => emit.order === emitterValue
                    );
                  }
                }
              } else if (sValue.troybinName === propertyName) {
                assignedProperty = sValue;
                entryFound = true;
              }
            });
          } else if (propertyName[0] === "e") {
            Values.eValues.forEach(eValue => {
              if (eValue.troybinName === propertyName) {
                assignedProperty = eValue;
                entryFound = true;

                if (propertyName === "e-life" && propertyValuePart === "-1") {
                  needsChanges = true;
                }
              }
            });
          } else if (propertyName[0] === "f") {
            Values.fValues.forEach(fValue => {
              if (fValue.troybinName === propertyName) {
                assignedProperty = fValue;
                entryFound = true;

                if (
                  propertyName.includes("field-accel-") ||
                  propertyName.includes("field-attract-") ||
                  propertyName.includes("field-drag-") ||
                  propertyName.includes("field-noise-") ||
                  propertyName.includes("field-orbit-")
                ) {
                  needsChanges = true;
                }
              }
            });
          } else if (propertyName[0] === "p") {
            Values.pValues.forEach(pValue => {
              if (pValue.troybinName === propertyName) {
                assignedProperty = pValue;
                entryFound = true;
              }
            });
          } else {
            Values.others.forEach(other => {
              if (other.troybinName === propertyName) {
                assignedProperty = other;
                entryFound = true;
              }
            });
          }
        }

        if (assignedProperty.binGroup === undefined && !needsChanges) {
          const text = namesOnly
            ? `${propertyName}`
            : `${entry.name}: ${propertyName} = ${propertyValuePart}`;

          if (troybinData.unknown.findIndex(emit => emit === text) === -1) {
            troybinData.unknown.push(text);
          }
        }

        if (!entryFound) {
          const text = namesOnly
            ? `${propertyName}`
            : `${entry.name}: ${propertyName} = ${propertyValuePart}`;

          if (troybinData.unknown.findIndex(emit => emit === text) === -1) {
            troybinData.unknown.push(text);
          }
        }

        let formatedValue;

        if (assignedProperty.troybinName || needsChanges) {
          if (assignedProperty.troybinName) {
            formatedValue = JSON.parse(
              JSON.stringify(
                FormatValue(
                  propertyValuePart,
                  assignedProperty.troybinType,
                  defaultAssetsPath,
                  updateFileTypes
                )
              )
            );

            if (
              formatedValue === "INVALID_VALUE" &&
              assignedProperty.simpleValue !== undefined
            ) {
              formatedValue = JSON.parse(
                JSON.stringify(
                  FormatValue(
                    propertyValuePart,
                    assignedProperty.simpleValue[0],
                    defaultAssetsPath,
                    updateFileTypes
                  )
                )
              );
            }
          }

          const property = JSON.parse(
            JSON.stringify({
              troybinName: assignedProperty.troybinName,
              troybinType: assignedProperty.troybinType,
              binGroup: assignedProperty.binGroup,
              binGroupType: assignedProperty.binGroupType,
              binPropertyName: assignedProperty.binPropertyName,
              binPropertyType: assignedProperty.binPropertyType,
              defaultValue: assignedProperty.defaultValue,
              simpleValue: assignedProperty.simpleValue || undefined,
              value: formatedValue
            })
          );

          if (property.value !== "INVALID_VALUE") {
            if (isSystem) {
              if (emitterNameEntry !== -1) {
                if (needsChanges) {
                  troybinData.emitters[emitterNameEntry].needsChanges = true;
                  troybinData.emitters[emitterNameEntry].isSimple = true;
                  needsChanges = false;
                } else {
                  troybinData.emitters[emitterNameEntry].properties.push(
                    JSON.parse(JSON.stringify(property))
                  );
                }
              } else {
                troybinData.system.push(property);
              }
            } else {
              if (needsChanges) {
                emitter.needsChanges = true;
                needsChanges = false;
              }
              emitter.properties.push(property);
            }
          } else {
            const text = namesOnly
              ? `${propertyName} (unexpected amount of values)`
              : `${entry.name}: ${propertyName} = ${propertyValuePart}`;

            if (troybinData.unknown.findIndex(emit => emit === text) === -1) {
              troybinData.unknown.push(text);
            }
          }
        }
      });

      if (!isSystem) {
        troybinData.emitters.push(emitter);
      }
    });

    return troybinData;
  };

  createBin = troybin => {
    const { defaultFilePath } = this.state;
    const binName = troybin.fileName;

    this.setState({ progressStep: "Generating Bin..." });

    const bin = {
      name: binName,
      emitters: [],
      system: [],
      unknowns: troybin.unknown
    };

    troybin.emitters.forEach(emitter => {
      const alreadyAdded = [];
      const binEmitters = [];

      emitter.properties.forEach(property => {
        if (
          alreadyAdded.filter(entry => entry === property.binGroup.name)
            .length === 0
        ) {
          const propertyGroup = property.binGroup.name;
          let propertyParts = [];

          if (property.binGroup.members.length > 0) {
            propertyParts = emitter.properties.filter(
              props => props.binGroup.name === propertyGroup
            );
          } else {
            propertyParts.push(property);
          }

          let finalProperty = {};

          if (property.binGroup.parent !== undefined) {
            const parentParent = property.binGroup.parent.parent;

            if (
              parentParent !== undefined &&
              parentParent.name.includes("field")
            ) {
              const parentParentPropertyParts = [];

              parentParent.members.forEach(parentMember => {
                const parentMembers = emitter.properties.filter(
                  props =>
                    props.binGroup.parent !== undefined &&
                    props.binGroup.parent.name === parentMember &&
                    props.binGroup.parent.parent.name === parentParent.name
                );

                if (parentMembers.length) {
                  const troybinProperties = [];

                  parentMembers.forEach(member => {
                    alreadyAdded.push(member.binGroup.name);

                    const binProperty = {
                      name: member.binGroup.name,
                      members: [member],
                      order: member.binGroup.order
                    };

                    troybinProperties.push(binProperty);
                  });

                  const parentPropertyPart = {
                    name: parentMembers[0].binGroup.parent.name,
                    members: troybinProperties,
                    order: parentMembers[0].binGroup.parent.order
                  };

                  parentParentPropertyParts.push(parentPropertyPart);
                }
              });

              parentParentPropertyParts.sort(function compareNumbers(a, b) {
                return a.order - b.order;
              });

              finalProperty = {
                name: parentParent.name,
                members: parentParentPropertyParts,
                order: parentParent.order
              };
            } else {
              let parent;

              // Is Part of multiple primitives
              if (Array.isArray(property.binGroup.parent)) {
                if (property.binGroup.parent[0].name.includes("primitive")) {
                  const primitive = emitter.properties.filter(
                    props => props.troybinName === "p-type"
                  );

                  const correctPrimitive = property.binGroup.parent.filter(
                    props => props.name === primitive[0].value
                  )[0];

                  parent = correctPrimitive;
                }
              } else {
                parent = property.binGroup.parent;
              }

              if (parent.members.length > 0) {
                const parentPropertyParts = [];

                parent.members.forEach(parentMember => {
                  const members = emitter.properties.filter(
                    props => props.binGroup.name === parentMember
                  );

                  if (members.length) {
                    members.forEach(member => {
                      alreadyAdded.push(member.binGroup.name);
                    });

                    const parentPropertyPart = {
                      name: members[0].binGroup.name,
                      members,
                      order: members[0].binGroup.order
                    };

                    parentPropertyParts.push(parentPropertyPart);
                  }
                });

                parentPropertyParts.sort(function compareNumbers(a, b) {
                  return a.order - b.order;
                });

                finalProperty = {
                  name: parent.name,
                  members: parentPropertyParts,
                  order: parent.order
                };
              } else {
                finalProperty = {
                  name: parent.name,
                  members: propertyParts,
                  order: parent.order
                };
              }
            }

            binEmitters.push(finalProperty);
          } else {
            finalProperty = {
              name: propertyGroup,
              members: propertyParts,
              order: property.binGroup.order
            };

            binEmitters.push(finalProperty);

            alreadyAdded.push(propertyGroup);
          }
        }
      });

      binEmitters.sort(function compareNumbers(a, b) {
        return a.order - b.order;
      });

      bin.emitters.push(binEmitters);
    });

    const binSystemProperties = [
      {
        name: "particleName",
        members: [
          {
            troybinName: "",
            troybinType: "STRING_NO_PATH",
            binGroup: {
              name: "particleName",
              members: [],
              structure: "SimpleProperty",
              order: 302
            },
            binGroupType: "string",
            binPropertyName: "",
            binPropertyType: "",
            value: `\"${binName}\"` // eslint-disable-line
          }
        ]
      },
      {
        name: "particlePath",
        members: [
          {
            troybinName: "",
            troybinType: "STRING_PATH",
            binGroup: {
              name: "particlePath",
              members: [],
              structure: "SimpleProperty",
              order: 303
            },
            binGroupType: "string",
            binPropertyName: "",
            binPropertyType: "",
            value: `\"${defaultFilePath}/${binName}\"` // eslint-disable-line
          }
        ]
      }
    ];

    troybin.system.forEach(property => {
      if (property.binGroup) {
        const finalProperty = {
          name: property.binGroup.name,
          members: [property]
        };

        binSystemProperties.push(finalProperty);
      }
    });

    bin.system = binSystemProperties;

    return bin;
  };

  writeBin = bin => {
    const { defaultFilePath } = this.state;
    const spacing = 0;

    function getSpacing(number) {
      return "    ".repeat(number);
    }

    this.setState({ progressStep: "Writing Bin..." });

    const finalBin = [
      `${getSpacing(spacing)}\"${defaultFilePath}/${ // eslint-disable-line
        bin.name
      }\" = VfxSystemDefinitionData {\r\n`, // eslint-disable-line
      `${getSpacing(
        spacing + 1
      )}complexEmitterDefinitionData: list[pointer] = {\r\n`
    ];

    bin.emitters.forEach(emitter => {
      const propertiesWritten = [];

      emitter.forEach(property => {
        let entry;

        if (property.name === "shape") {
          const writenLines = [];

          property.members.forEach(member => {
            entry = WriteProperty(member, spacing + 4);

            entry.forEach(e => {
              writenLines.push(e);
            });
          });

          if (writenLines.length) {
            propertiesWritten.push(
              `${getSpacing(spacing + 3)}shape: embed = VfxShape {\r\n`
            );

            writenLines.forEach(line => {
              propertiesWritten.push(line);
            });

            propertiesWritten.push(`${getSpacing(spacing + 3)}}\r\n`);
          }
        } else if (property.name.includes("primitive")) {
          if (
            property.name !== "primitiveNone" &&
            property.name !== "primitive"
          ) {
            let hasContent = false;

            switch (property.name) {
              // 1
              case "primitiveArbitraryQuad":
                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveArbitraryQuad = {}\r\n`
                );
                break;
              // 2 ?
              case "primitiveArbitraryTrail":
                hasContent = true;

                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveArbitraryTrail = {\r\n`,
                  `${getSpacing(
                    spacing + 4
                  )}mTrail: embed = VfxTrailDefinitionData {\r\n`
                );
                break;
              // 3
              case "primitiveMesh":
                hasContent = true;

                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveMesh {\r\n`,
                  `${getSpacing(
                    spacing + 4
                  )}mMesh: embed = VfxMeshDefinitionData {\r\n`
                );
                break;
              // 4 ?
              case "primitiveAttachedMesh":
                hasContent = true;

                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveAttachedMesh {\r\n`,
                  `${getSpacing(
                    spacing + 4
                  )}mMesh: embed = VfxMeshDefinitionData {\r\n`
                );
                break;
              // 5
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
              // 6
              case "primitiveBeam":
                hasContent = true;

                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveBeam {\r\n`,
                  `${getSpacing(
                    spacing + 4
                  )}mBeam: embed = VfxBeamDefinitionData {\r\n`
                );
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
              // 8 ?
              case "primitiveRay":
                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveRay {}\r\n`
                );
                break;
              default:
                break;
            }

            if (hasContent && property.members.length) {
              property.members.forEach(member => {
                entry = WriteProperty(member, spacing + 5);

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
        } else if (property.name === "distortionDefinition") {
          propertiesWritten.push(
            `${getSpacing(
              spacing + 3
            )}distortionDefinition: pointer = VfxDistortionDefinitionData {\r\n`
          );

          property.members.forEach(member => {
            entry = WriteProperty(member, spacing + 4);

            entry.forEach(e => {
              propertiesWritten.push(e);
            });
          });

          propertiesWritten.push(`${getSpacing(spacing + 3)}}\r\n`);
        } else if (property.name === "fieldCollectionDefinition") {
          const writenLines = [];

          property.members.forEach(member => {
            let fieldType;

            switch (member.name) {
              case "fieldAccelerationDefinitions":
                fieldType = "Acceleration";
                break;
              case "fieldAttractionDefinitions":
                fieldType = "Attraction";
                break;
              case "fieldDragDefinitions":
                fieldType = "Drag";
                break;
              case "fieldNoiseDefinitions":
                fieldType = "Noise";
                break;
              case "fieldOrbitalDefinitions":
                fieldType = "Orbital";
                break;
              default:
                break;
            }

            writenLines.push(
              `${getSpacing(
                spacing + 4
              )}field${fieldType}Definitions: list[embed] = {\r\n`,
              `${getSpacing(
                spacing + 5
              )}VfxField${fieldType}DefinitionData {\r\n`
            );

            member.members.forEach(memb => {
              entry = WriteProperty(memb, spacing + 6);

              entry.forEach(e => {
                writenLines.push(e);
              });
            });

            writenLines.push(
              `${getSpacing(spacing + 5)}}\r\n`,
              `${getSpacing(spacing + 4)}}\r\n`
            );
          });

          if (writenLines.length) {
            propertiesWritten.push(
              `${getSpacing(
                spacing + 3
              )}fieldCollectionDefinition: pointer = VfxFieldCollectionDefinitionData {\r\n`
            );

            writenLines.forEach(line => {
              propertiesWritten.push(line);
            });

            propertiesWritten.push(`${getSpacing(spacing + 3)}}\r\n`);
          }
        } else {
          entry = WriteProperty(property, spacing + 3);

          entry.forEach(e => {
            propertiesWritten.push(e);
          });
        }
      });

      if (propertiesWritten.length) {
        finalBin.push(
          `${getSpacing(spacing + 2)}VfxEmitterDefinitionData {\r\n`
        );

        propertiesWritten.forEach(emitterLine => {
          finalBin.push(emitterLine);
        });
        finalBin.push(`${getSpacing(spacing + 2)}}\r\n`);
      }
    });

    finalBin.push(`${getSpacing(spacing + 1)}}\r\n`);

    bin.system.forEach(systemProperty => {
      const systemEntry = WriteProperty(systemProperty, spacing + 1);

      systemEntry.forEach(s => {
        finalBin.push(s);
      });
    });

    finalBin.push(`${getSpacing(spacing)}}\r\n`);

    if (bin.unknowns.length) {
      finalBin.push(
        `\r\n`,
        `Troygrade was unable to translate the following values: \r\n`
      );

      bin.unknowns.forEach(unknown => {
        finalBin.push(`${unknown}\r\n`);
      });
    }

    return finalBin.join("");
  };

  loadFile = async event => {
    event.preventDefault();
    this.clearState();

    const input = event.target.files[0];
    const reader = new FileReader();

    if (input.type === "text/plain") {
      reader.onload = async e => {
        const text = e.target.result;
        this.setState({
          originalTroybin: text,
          outputFileName: input.name,
          inputType: input.type
        });
      };
      reader.readAsText(event.target.files[0]);
    } else {
      reader.onload = async e => {
        const text = e.target.result;

        this.setState({
          originalTroybin: text,
          outputFileName: input.name,
          inputType: input.type
        });
      };
      reader.readAsArrayBuffer(event.target.files[0]);
    }
  };

  async click(e) {
    e.preventDefault();
    try {
      await this.getInputs();

      const troybinStructure = this.readTroybin();

      const updatedTroybin = UpdateEmitters(troybinStructure);

      const binStructure = this.createBin(updatedTroybin);

      const finalBin = this.writeBin(binStructure);

      const blob = new Blob([finalBin], { type: "text/plain" });
      const downloadLink = URL.createObjectURL(blob);

      this.setState({
        convertedLink: downloadLink
      });

      this.setState({ clicked: true, progressStep: "" });
    } catch (error) {
      this.setState({ progressStep: "Error!" });
      console.log(error);
    }

    return 1;
  }

  render() {
    const {
      clicked,
      convertedLink,
      defaultAssetsPath,
      defaultFilePath,
      namesOnly,
      progressStep,
      outputFileName,
      randomIndex,
      updateFileTypes
    } = this.state;

    const splasharts = {
      old: [
        aatroxOld,
        akaliOld,
        asheOld,
        blitzcrankOld,
        cassiopeiaOld,
        ezrealOld,
        fioraOld,
        gangplankOld,
        HeimerdingerOld,
        katarinaOld,
        missFortuneOld,
        nasusOld,
        poppyOld,
        sionOld,
        sonaNew,
        sonaOld,
        trundleOld,
        varusOld,
        veigarOld,
        viktorOld,
        warwickOld
      ],
      new: [
        aatroxNew,
        akaliNew,
        asheNew,
        blitzcrankNew,
        cassiopeiaNew,
        ezrealNew,
        fioraNew,
        gangplankNew,
        HeimerdingerNew,
        katarinaNew,
        missFortuneNew,
        nasusNew,
        poppyNew,
        sionNew,
        seraphineNew,
        sonaNew,
        trundleNew,
        varusNew,
        veigarNew,
        viktorNew,
        warwickNew
      ]
    };

    return (
      <div className="m-5">
        <div className="text-light text-center">
          <h1>Troygrade - A League of Legends Troybin Migration Tool</h1>
          <br />
          <h3>
            1. Select A Troybin File Converted To .txt With{" "}
            <a
              href="https://github.com/moonshadow565/lolpytools"
              style={{ color: "#FFF" }}
              target="_blank"
              rel="noreferrer"
            >
              <u>lol-pytools</u>
            </a>
          </h3>
          <h3>2. Click On Convert</h3>
          <h3>3. Click On Download</h3>
        </div>

        <div className="row mt-5">
          <div
            className="col-xl-5 col-lg-4 col-md-12 col-sm-12"
            style={{ flex: 1.3344 }}
          >
            <Card.Img
              className="ht"
              variant="top"
              src={splasharts.old[randomIndex]}
            />
            <div className="d-flex">
              <input
                type="file"
                accept=".txt, .troybin"
                className="mt-2 btn btn-dark w-100"
                onChange={e => this.loadFile(e)}
                style={{ textAlign: "left" }}
              />
            </div>
            <br />
            <br />
            <h4 className="mt-2 text-light d-flex" style={{ color: "#FFF" }}>
              <u>Optional:</u>
            </h4>
            <h5 className="mt-2 text-light d-flex" style={{ color: "#FFF" }}>
              Assets Path:
            </h5>
            <div className="d-flex justify-content-center">
              <input
                className="w-100"
                disabled={clicked}
                name="PathToAssets"
                onChange={this.handleChangeAssetsPath}
                placeholder="ASSETS/Shared/Particles"
                type="text"
                value={defaultAssetsPath}
              />
            </div>
            <h5 className="mt-2 text-light d-flex" style={{ color: "#FFF" }}>
              Particle Path:
            </h5>
            <div className="d-flex justify-content-center">
              <input
                className="w-100"
                disabled={clicked}
                name="PathToParticle"
                onChange={this.handleChangeFilePath}
                placeholder="Shared/Particles"
                type="text"
                value={defaultFilePath}
              />
            </div>
            <div className="d-flex">
              <input
                defaultChecked={updateFileTypes}
                className="mt-2 text-light d-flex mr-2"
                disabled={clicked}
                name="UpdateFileType"
                onChange={e => this.handleChangeUpdateFileType(e)}
                type="checkbox"
              />
              <div className="mt-2 text-light d-flex" style={{ color: "#FFF" }}>
                Update File Typings (.tga --&gt; .dds)
              </div>
            </div>
            <div className="d-flex">
              <input
                defaultChecked={namesOnly}
                className="mt-2 text-light d-flex mr-2"
                disabled={clicked}
                name="NamesOnly"
                onChange={e => this.handleChangeNamesOnly(e)}
                type="checkbox"
              />
              <div className="mt-2 text-light d-flex" style={{ color: "#FFF" }}>
                Only Show Names Of Untranslated Properties
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-12 mb-5 mt-5 col-sm-12 d-flex justify-content-center align-items-baseline" />
          <div
            className="col-xl-5 col-lg-4 col-md-12 col-sm-12"
            style={{ flex: 1.3344 }}
          >
            <Card.Img
              className="ht"
              variant="top"
              src={splasharts.new[randomIndex]}
            />
            <div className="d-flex justify-content-center">
              <button
                className="mt-2 btn btn-dark w-100"
                disabled={!outputFileName || clicked}
                onClick={e => this.click(e)}
                type="button"
              >
                Convert
              </button>
            </div>
            <div className="d-flex justify-content-center">
              {clicked ? (
                <a
                  className="mt-2 btn btn-dark w-100"
                  href={convertedLink}
                  download={`${outputFileName.replace(
                    ".txt",
                    ""
                  )}_converted.txt`}
                  style={{ color: "#FFF" }}
                >
                  Download
                </a>
              ) : (
                <button
                  className="mt-2 btn btn-dark w-100"
                  disabled
                  type="button"
                  style={{ color: "#FFF" }}
                >
                  Download
                </button>
              )}
            </div>
            <div className="d-flex justify-content-center">
              <h4 className="mt-2 text-light text-center">{progressStep}</h4>
            </div>
            {/* <br />
            <h4 className="mt-2 text-light d-flex" style={{ color: "#FFF" }}>
              <u>Hash Generator:</u>
            </h4>
            <h5 className="mt-2 text-light d-flex" style={{ color: "#FFF" }}>
              Emitter:
            </h5>
            <div className="d-flex justify-content-center">
              <input
                className="w-100"
                disabled={clicked}
                name="PathToAssets"
                onChange={this.handleChangeAssetsPath}
                placeholder="ASSETS/Shared/Particles"
                type="text"
                value={defaultAssetsPath}
              />
            </div>
            <h5 className="mt-2 text-light d-flex" style={{ color: "#FFF" }}>
              Property:
            </h5>
            <div className="d-flex justify-content-center">
              <input
                className="w-100"
                disabled={clicked}
                name="PathToParticle"
                onChange={this.handleChangeFilePath}
                placeholder="Shared/Particles"
                type="text"
                value={defaultFilePath}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="mt-2 btn btn-dark w-50"
                type="button"
                style={{ color: "#FFF" }}
              >
                Generate Hash
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
