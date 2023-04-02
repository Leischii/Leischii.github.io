const CheckValueType = value => {
  let valueType = "";

  switch (value.length) {
    case 1:
      valueType = "ONE_DOUBLE";
      break;
    case 2:
      valueType = "TWO_DOUBLE";
      break;
    case 3:
      valueType = "THREE_DOUBLE";
      break;
    case 4:
      valueType = "FOUR_DOUBLE";
      break;
    case 5:
      valueType = "FIVE_DOUBLE";
      break;
    default:
      valueType = "ONE_DOUBLE";
      break;
  }

  return valueType;
};

const UpdateEmitters = data => {
  function getMultiName(nameProp) {
    let hasNumber;

    for (let i = 0; i < 10; i += 1) {
      if (nameProp[nameProp.length - 1] === i.toString()) hasNumber = i;
    }

    if (hasNumber) {
      return {
        emitterName: nameProp.slice(0, -1),
        number: hasNumber + 1
      };
    }

    return { emitterName: nameProp, number: 1 };
  }

  function getNewProperties(properties, emitterName) {
    const newProperties = properties;
    const groupNamePropertyIndex = properties.findIndex(
      element => element.binGroup.name === "emitterName"
    );

    newProperties[groupNamePropertyIndex].value = emitterName;

    return newProperties;
  }

  // Needed since values get lost for some reason otherwise
  const troybinData = JSON.parse(JSON.stringify(data));

  const emitters = [];
  const emittersToRemove = [];

  troybinData.forEach(emit => {
    // Needed since values get lost for some reason otherwise
    const emitter = JSON.parse(JSON.stringify(emit));

    const propertiesToAdd = [];
    const propertiesToRemove = [];
    const updatedEmitter = {
      name: emitter.name,
      properties: [],
      order: emitter.order
    };

    let hasLinger = false;

    emitter.properties.forEach(prop => {
      // Needed since values get lost for some reason otherwise
      const property = JSON.parse(JSON.stringify(prop));

      if (property.binGroup.name === "lifetime" && property.value === -1) {
        const hasTableEntries =
          emitter.properties.findIndex(currProp =>
            currProp.troybinName.includes("p-lifeP")
          ) !== -1;

        if (!hasTableEntries) {
          propertiesToRemove.push("e-life", "p-life");
        }
      }

      if (
        property.troybinName === "e-rate" ||
        property.troybinName === "p-life"
      ) {
        for (let j = 1; j < 10; j += 1) {
          const timesTableName = `${property.troybinName}${j}`;
          const timesTableEntryIndex = emitter.properties.findIndex(
            propS => propS.troybinName === timesTableName
          );

          if (timesTableEntryIndex !== -1) {
            propertiesToRemove.push(timesTableName);

            const timesTableEntry = emitter.properties[timesTableEntryIndex];
            const newTimesTableEntryValue = [
              timesTableEntry.value[0],
              timesTableEntry.value[1] * property.value
            ];

            const newTimesTableEntry = timesTableEntry;
            newTimesTableEntry.value = newTimesTableEntryValue;

            propertiesToAdd.push(newTimesTableEntry);
          }
        }
      }

      // Preparation for fixing particleLinger later
      if (property.binGroup.name === "particleLinger") {
        hasLinger = true;
      }

      // Color table values need to be multiplied with the constantValue
      if (
        property.troybinName === "p-xrgba" ||
        property.troybinName === "e-rgba" ||
        property.troybinName === "p-bindtoemitter"
      ) {
        let colorNotDefault = false;

        for (let i = 0; i < 4; i += 1) {
          const colorValue = property.value[i];

          if (colorValue !== 1) {
            colorNotDefault = true;
          }
        }

        if (colorNotDefault) {
          for (let j = 1; j < 21; j += 1) {
            const propertyName = `${property.troybinName}${j}`;
            const timesTableEntryIndex = emitter.properties.findIndex(
              propS => propS.troybinName === propertyName
            );

            if (timesTableEntryIndex !== -1) {
              propertiesToRemove.push(propertyName);

              const timesTableEntry = emitter.properties[timesTableEntryIndex];
              const newTimesTableEntryValue = [timesTableEntry.value[0]];

              for (let k = 1; k < 5; k += 1) {
                newTimesTableEntryValue.push(
                  timesTableEntry.value[k] * property.value[k - 1]
                );
              }

              const newTimesTableEntry = timesTableEntry;
              newTimesTableEntry.value = newTimesTableEntryValue;

              propertiesToAdd.push(newTimesTableEntry);
            }
          }
        }
      }

      // Read Empty Primitive correctly
      if (property.binGroup.name === "primitive") {
        if (
          property.value === "primitiveArbitraryQuad" ||
          property.value === "primitiveRay"
        ) {
          const primitiveEntry = property;
          primitiveEntry.binGroup.name = property.value;

          propertiesToAdd.push(primitiveEntry);
        }
      }

      if (property.binGroup.name.includes("field")) {
        const fieldEmitterIndex = troybinData.findIndex(
          selectedEmit => `"${selectedEmit.name}"` === property.value
        );

        if (fieldEmitterIndex !== -1) {
          const fieldEmitter = troybinData[fieldEmitterIndex];

          fieldEmitter.properties.forEach(fieldProp => {
            const fieldProperty = fieldProp;

            if (
              fieldProp.binGroup.parent &&
              Array.isArray(fieldProp.binGroup.parent)
            ) {
              const correctParent = fieldProp.binGroup.parent.filter(
                parentEntry => parentEntry.name === property.binGroup.name
              )[0];

              fieldProperty.binGroup.parent = correctParent;
            }

            propertiesToAdd.push(fieldProperty);
          });

          if (
            emittersToRemove.findIndex(
              emitterToRemove => emitterToRemove === fieldEmitter.name
            ) === -1
          ) {
            emittersToRemove.push(fieldEmitter.name);
          }
        }

        propertiesToRemove.push(property.troybinName);
      }

      if (emitter.isSimple) {
        // Todo: More rules
        const isSimpleProperty = !!property.simpleValue;

        let normalProperty;
        let simpleProperty;

        if (isSimpleProperty) {
          if (property.binPropertyName === "constantValue") {
            let nValue;
            let sValue;

            let nBinType = property.binPropertyType;
            const sBinType = property.simpleValue[2];

            const valueType = CheckValueType(property.value);

            if (valueType === property.troybinType) {
              // Case: Value is normal Property
              nValue = property.value;
              sValue = property.value[0]; // eslint-disable-line
            } else if (
              property.binGroup.name === "birthRotationalVelocity0" ||
              property.binGroup.name === "birthRotation0"
            ) {
              nValue = [property.value, 0, 0];
              sValue = property.value;
            } else if (property.binGroup.name === "bindWeight") {
              nValue = property.value;
              sValue = [property.value, property.value];
            } else {
              // Case: Value is simple Property
              nValue = [property.value, property.value, property.value];
              sValue = property.value;

              nBinType = "vec3";
            }

            normalProperty = {
              troybinName: property.troybinName,
              troybinType: property.troybinType,
              binGroup: property.binGroup,
              binGroupType: property.binGroupType,
              binPropertyName: property.binPropertyName,
              binPropertyType: nBinType,
              value: nValue
            };
            simpleProperty = {
              troybinName: property.troybinName,
              troybinType: property.simpleValue[0],
              binGroup: property.simpleValue[3],
              binGroupType: property.simpleValue[1],
              binPropertyName:
                property.binGroup.name === "bindWeight"
                  ? ""
                  : property.binPropertyName,
              binPropertyType: sBinType,
              value: sValue
            };
          } else {
            let correctValue = property.value;

            if (
              property.simpleValue[4].includes("timesTable") &&
              property.binGroup.name !== "particleLifetime"
            ) {
              correctValue = [
                property.value[0],
                property.value[1],
                property.value[1],
                property.value[1]
              ];
            }

            normalProperty = {
              troybinName: property.troybinName,
              troybinType: property.simpleValue[0],
              binGroup: property.binGroup,
              binGroupType: property.binGroupType,
              binPropertyName: property.simpleValue[4],
              binPropertyType: property.simpleValue[4].includes("timesTable")
                ? property.binPropertyType
                : property.simpleValue[2],
              value: correctValue
            };

            if (property.binGroup.name !== property.simpleValue[3].name) {
              simpleProperty = {
                troybinName: property.troybinName,
                troybinType: property.simpleValue[0],
                binGroup: property.simpleValue[3],
                binGroupType: property.simpleValue[1],
                binPropertyName: property.simpleValue[4],
                binPropertyType: property.simpleValue[2],
                value: property.value
              };
            } else {
              simpleProperty = undefined;
            }
          }

          if (simpleProperty !== undefined) {
            propertiesToAdd.push(normalProperty, simpleProperty);
          } else {
            propertiesToAdd.push(normalProperty);
          }

          propertiesToRemove.push(normalProperty.troybinName);
        }
      } else {
        const propertiesToCheckForTableEntries = [
          "p-quadrot",
          "p-rotvel",
          "p-scale",
          "p-worldaccel",
          "p-xquadrot",
          "p-xscale",
          "Particle-Velocity",
          "Particle-Drag"
        ];

        if (propertiesToCheckForTableEntries.includes(property.troybinName)) {
          let valueNotDefault = false;

          for (let i = 0; i < 3; i += 1) {
            const propertyValue = property.value[i];

            if (propertyValue !== 1) {
              valueNotDefault = true;
            }
          }

          if (valueNotDefault) {
            for (let j = 1; j < 10; j += 1) {
              const propertyName = `${property.troybinName}${j}`;
              const timesTableEntryIndex = emitter.properties.findIndex(
                propS => propS.troybinName === propertyName
              );

              if (timesTableEntryIndex !== -1) {
                propertiesToRemove.push(propertyName);

                const timesTableEntry =
                  emitter.properties[timesTableEntryIndex];
                const newTimesTableEntryValue = [timesTableEntry.value[0]];

                for (let k = 1; k < 4; k += 1) {
                  newTimesTableEntryValue.push(
                    timesTableEntry.value[k] * property.value[k - 1]
                  );
                }

                const newTimesTableEntry = timesTableEntry;
                newTimesTableEntry.value = newTimesTableEntryValue;

                propertiesToAdd.push(newTimesTableEntry);
              }
            }
          }
        }
      }
    });

    // Linger default value is 10 + particleLifeTime unless stated otherwise.
    // Simple Emitters are also an exception to this rule
    if (!hasLinger && !emitter.isSimple) {
      const pIndex = emitter.properties.findIndex(
        property => property.troybinName === "p-life"
      );
      const plifetimeVal = pIndex === -1 ? 0 : emitter.properties[pIndex].value;

      // TODO: Link linger property instead
      const lingerProperty = {
        troybinName: "p-linger",
        troybinType: "ONE_DOUBLE",
        binGroup: {
          name: "particleLinger",
          members: [],
          structure: "SimpleObjectProperty",
          order: 15
        },
        binGroupType: "option[f32]",
        binPropertyName: "constantValue",
        binPropertyType: "",
        value: 10 + plifetimeVal
      };

      propertiesToAdd.push(lingerProperty);
    }

    if (emitter.isSimple) {
      if (!hasLinger) {
        const lingerProperty = {
          troybinName: "p-linger",
          troybinType: "ONE_DOUBLE",
          binGroup: {
            name: "particleLinger",
            members: [],
            structure: "SimpleObjectProperty",
            order: 15
          },
          binGroupType: "option[f32]",
          binPropertyName: "constantValue",
          binPropertyType: "",
          value: 10
        };

        propertiesToAdd.push(lingerProperty);
      }

      const meshRenderFlagsProperty = {
        troybinName: "p-disable-mesh-z",
        troybinType: "ONE_DOUBLE",
        binGroup: {
          name: "meshRenderFlags",
          members: [],
          structure: "SimpleProperty",
          order: 57
        },
        binGroupType: "u8",
        binPropertyName: "",
        binPropertyType: "",
        value: 0
      };

      propertiesToAdd.push(meshRenderFlagsProperty);
    }

    emitter.properties.forEach(property => {
      const keepEntry =
        propertiesToRemove.find(element => element === property.troybinName) ===
        undefined;

      if (keepEntry) {
        updatedEmitter.properties.push(property);
      }
    });

    propertiesToAdd.forEach(addProperty => {
      updatedEmitter.properties.push(addProperty);
    });

    emitters.push(JSON.parse(JSON.stringify(updatedEmitter)));

    // Create a copy of the emitter if used multiple times
    if (emitter.isMultiUseEntry) {
      const { emitterName, number } = getMultiName(emitter.name);
      let emitterNameNumber = number;

      for (let i = 0; i < emitter.isMultiUseEntry.length; i += 1) {
        const newEmitterName = `"${emitterName + emitterNameNumber}"`;
        const updatedProperties = getNewProperties(
          updatedEmitter.properties,
          newEmitterName
        );

        const multiEmitter = {
          name: newEmitterName,
          properties: updatedProperties,
          order: emitter.isMultiUseEntry[i]
        };

        emitters.push(multiEmitter);
        emitterNameNumber += 1;
      }
    }
  });

  const emittersNoField = [];

  // Check which emitters to keep and which to remove
  // Mostly filters empty emitters like field
  for (let i = 0; i < emitters.length; i += 1) {
    const emitter = emitters[i];

    const keepEmitter =
      emittersToRemove.find(element => element === emitter.name) === undefined;

    if (keepEmitter) {
      emittersNoField.push(emitter);
    }
  }

  // Sort Emitters by GroupType Order
  emittersNoField.sort(function compareNumbers(a, b) {
    return a.order - b.order;
  });

  return emittersNoField;
};

export default UpdateEmitters;
