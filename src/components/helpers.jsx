function getSpacing(number) {
  return "    ".repeat(number);
}

function getValue(member) {
  let constValue = "";

  const isArray = Array.isArray(member.value);

  if (isArray) {
    const value1 = member.value[0].toString();
    const value2 = member.value[1].toString();

    constValue = `{ ${value1}, ${value2} }`;

    if (member.value.length === 3) {
      const value3 = member.value[2].toString();

      constValue = `{ ${value1}, ${value2}, ${value3} }`;
    }

    if (member.value.length === 4) {
      const value3 = member.value[2].toString();
      const value4 = member.value[3].toString();

      constValue = `{ ${value1}, ${value2}, ${value3}, ${value4} }`;
    }
  } else {
    constValue = member.value;
  }

  return constValue;
}

function writeConstantValue(
  property,
  spacingAmount,
  isMult = true,
  valueOnly = false
) {
  const members = isMult ? property.members : property;
  const result = [];
  let returnConst;

  members.forEach(member => {
    const constValue = getValue(member);

    if (member === members[0]) {
      returnConst = constValue;
    }

    if (constValue !== member.defaultValue) {
      if (valueOnly) {
        result.push(`${getSpacing(spacingAmount)}${constValue}\r\n`);
      } else {
        result.push(
          `${getSpacing(spacingAmount)}${member.binPropertyName}: ${
            member.binPropertyType
          } = ${constValue}\r\n`
        );
      }
    }
  });

  return { constValue: returnConst, result };
}

function writeDynamics(
  constValue,
  property,
  probTableX,
  probTableY,
  probTableZ,
  probTableA,
  spacingAmount,
  timesTable,
  writeEmptyEntries = true
) {
  const result = [];

  if (
    probTableX.length ||
    probTableY.length ||
    probTableZ.length ||
    probTableA.length
  ) {
    result.push(
      `${getSpacing(spacingAmount)}dynamics: ${probTableX[0]?.binGroupType ||
        probTableY[0]?.binGroupType ||
        probTableZ[0]?.binGroupType ||
        probTableA[0]?.binGroupType} {\r\n`,
      `${getSpacing(spacingAmount + 1)}probabilityTables: list[pointer] = {\r\n`
    );

    const canHaveA =
      property.members[0].binGroup.members.findIndex(emit =>
        emit.includes("probTableA")
      ) !== -1;
    const canHaveY =
      property.members[0].binGroup.members.findIndex(emit =>
        emit.includes("probTableY")
      ) !== -1;
    const canHaveZ =
      property.members[0].binGroup.members.findIndex(emit =>
        emit.includes("probTableZ")
      ) !== -1;

    if (probTableX.length) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
        `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
      );

      probTableX.forEach(probTable => {
        result.push(
          `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
        );
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 3)}keyValues: list[${
          probTableX[0].binPropertyType
        }] = {\r\n`
      );

      probTableX.forEach(probTable => {
        let value = probTable.value[1];

        if (probTable.value.length === 3) {
          value = `{${value[1]}, ${value[2]}}`;
        }

        if (probTable.value.length === 4) {
          value = `{${value[1]}, ${value[2]}, ${value[3]}}`;
        }

        result.push(`${getSpacing(spacingAmount + 4)}${value}\r\n`);
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 2)}}\r\n`
      );
    } else if (writeEmptyEntries) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
      );
    }

    if (probTableY.length) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
        `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
      );

      probTableY.forEach(probTable => {
        result.push(
          `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
        );
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 3)}keyValues: list[${
          probTableY[0].binPropertyType
        }] = {\r\n`
      );

      probTableY.forEach(probTable => {
        let value = probTable.value[1];

        if (probTable.value.length === 3) {
          value = `{${value[1]}, ${value[2]}}`;
        }

        if (probTable.value.length === 4) {
          value = `{${value[1]}, ${value[2]}, ${value[3]}}`;
        }

        result.push(`${getSpacing(spacingAmount + 4)}${value}\r\n`);
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 2)}}\r\n`
      );
    } else if (canHaveY && writeEmptyEntries) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
      );
    }

    if (probTableZ.length) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
        `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
      );

      probTableZ.forEach(probTable => {
        result.push(
          `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
        );
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 3)}keyValues: list[${
          probTableZ[0].binPropertyType
        }] = {\r\n`
      );

      probTableZ.forEach(probTable => {
        let value = probTable.value[1];

        if (probTable.value.length === 3) {
          value = `{${value[1]}, ${value[2]}}`;
        }

        if (probTable.value.length === 4) {
          value = `{${value[1]}, ${value[2]}, ${value[3]}}`;
        }

        result.push(`${getSpacing(spacingAmount + 4)}${value}\r\n`);
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 2)}}\r\n`
      );
    } else if (canHaveZ && writeEmptyEntries) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
      );
    }

    if (probTableA.length) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
        `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
      );

      probTableA.forEach(probTable => {
        result.push(
          `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
        );
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 3)}keyValues: list[${
          probTableA[0].binPropertyType
        }] = {\r\n`
      );

      probTableA.forEach(probTable => {
        let value = probTable.value[1];

        if (probTable.value.length === 3) {
          value = `{${value[1]}, ${value[2]}}`;
        }

        if (probTable.value.length === 4) {
          value = `{${value[1]}, ${value[2]}, ${value[3]}}`;
        }

        result.push(`${getSpacing(spacingAmount + 4)}${value}\r\n`);
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 2)}}\r\n`
      );
    } else if (canHaveA && writeEmptyEntries) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
      );
    }

    result.push(`${getSpacing(spacingAmount + 1)}}\r\n`);
  } else {
    result.push(
      `${getSpacing(spacingAmount)}dynamics: ${
        timesTable[0] !== undefined
          ? timesTable[0].binGroupType
          : "pointer = VfxAnimatedVector3fVariableData"
      } {\r\n`
    );
  }

  result.push(`${getSpacing(spacingAmount + 1)}times: list[f32] = {\r\n`);

  if (timesTable.length) {
    timesTable.forEach(table => {
      result.push(`${getSpacing(spacingAmount + 2)}${table.value[0]}\r\n`);
    });

    result.push(
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount + 1)}values: list[${
        timesTable[0].binPropertyType
      }] = {\r\n`
    );

    timesTable.forEach(table => {
      let value = table.value[1];

      if (table.value.length === 3) {
        value = `{ ${table.value[1]}, ${table.value[2]} }`;
      }

      if (table.value.length === 4) {
        value = `{ ${table.value[1]}, ${table.value[2]}, ${table.value[3]} }`;
      }

      if (table.value.length === 5) {
        value = `{ ${table.value[1]}, ${table.value[2]}, ${table.value[3]}, ${table.value[4]} }`;
      }

      result.push(`${getSpacing(spacingAmount + 2)}${value}\r\n`);
    });

    result.push(
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount + 0)}}\r\n`
    );
  } else {
    result.push(
      `${getSpacing(spacingAmount + 2)}0\r\n`,
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount + 1)}values: list[${
        property.members[0].binPropertyType
      }] = {\r\n`,
      `${getSpacing(spacingAmount + 2)}${constValue}\r\n`,
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount)}}\r\n`
    );
  }

  return result;
}

export function CheckValueType(value) {
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
      break;
  }

  return valueType;
}
/*
Converts text into array with each entry representing a line of text
Also removes backspaces
*/
export function FormatInput(originalTroybin) {
  const troybinArray = originalTroybin.split("\r\n");
  const convertedTroybin = [];

  for (let i = 0; i < troybinArray.length; i += 1) {
    const row = troybinArray[i];

    if (row !== "") {
      convertedTroybin.push(row);
    }
  }

  return convertedTroybin;
}

/*
Converts string value into array with floats
*/
export function FormatNumber(values) {
  const formatedValue = [];

  values.split(" ").forEach(value => {
    formatedValue.push(parseFloat(value));
  });

  return formatedValue;
}

/*
Converts string value to their correct type
*/
export function FormatValue(values, type, defaultAssetsPath, updateFileTypes) {
  let formatedValue;

  switch (type) {
    case "ONE_DOUBLE":
      formatedValue = parseFloat(values);
      break;
    case "TWO_DOUBLE":
      formatedValue = FormatNumber(values);
      break;
    case "THREE_DOUBLE":
      formatedValue = FormatNumber(values);
      break;
    case "FOUR_DOUBLE":
      formatedValue = FormatNumber(values);
      break;
    case "FIVE_DOUBLE":
      formatedValue = FormatNumber(values);
      break;
    case "DOUBLE_TO_PRIMITIVE":
      if (values === "0") {
        formatedValue = -1;
      } else if (values === "1") {
        formatedValue = "VfxPrimitiveArbitraryQuad {}";
      } else if (values === "2") {
        formatedValue = -1;
      } else if (values === "3") {
        formatedValue = -1;
      } else if (values === "4") {
        formatedValue = -1;
      } else if (values === "5") {
        formatedValue = -1;
      } else {
        formatedValue = -1;
      }
      break;
    case "BOOLEAN/INT":
      if (values === "4") {
        formatedValue = 4;
      } else if (values === "3") {
        formatedValue = 3;
      } else if (values === "\"High\"" || values === "2") { // eslint-disable-line
        formatedValue = 2;
      } else if (values === "true" || values === "1") {
        formatedValue = 1;
      } else {
        formatedValue = 0;
      }
      break;
    case "INT/BOOLEAN":
      if (values === "1" || values === "true") {
        formatedValue = true;
      } else {
        formatedValue = false;
      }
      break;
    case "STRING_PATH":
      formatedValue = `\"${defaultAssetsPath}/${values.replace("\"", "")}`; // eslint-disable-line

      if (updateFileTypes) {
        formatedValue = formatedValue.replace(".tga", ".dds");
      }
      break;
    case "STRING_NO_EXT":
      formatedValue = values.replace(".troy", "");
      break;
    case "STRING_NO_PATH":
      formatedValue = values;
      break;
    case "STRINGS_NO_PATH":
      formatedValue = values.split(" ");
      break;
    case "TWO_DOUBLE_TO_ONE":
      if (values.split(" ")[0] === "1.0" || values.split(" ")[1] === "1.0") {
        formatedValue = 1;
      } else {
        const valueArray = values.split(" ");

        formatedValue = parseFloat(valueArray[0]);
      }
      break;
    case "TWO_DOUBLE_TO_XYZ":
      if (values.split(" ")[0] === "0.0") {
        formatedValue = ["X", parseFloat(values.split(" ")[1])];
      } else if (values.split(" ")[0] === "1.0") {
        formatedValue = ["Y", parseFloat(values.split(" ")[1])];
      } else {
        formatedValue = ["Z", parseFloat(values.split(" ")[1])];
      }
      break;
    default:
      break;
  }

  return formatedValue;
}

/*
Rewrites emitter to simple emitter and returns new properties array
*/
export function UpdateEmitters(data) {
  const troybinData = JSON.parse(JSON.stringify(data));

  const emitters = [];

  troybinData.emitters.forEach(emit => {
    const emitter = JSON.parse(JSON.stringify(emit));

    if (emitter.needsChanges) {
      const propertiesToAdd = [];
      const propertiesToRemove = [];

      const updatedEmitter = {
        name: emitter.name,
        properties: []
      };

      emitter.properties.forEach(prop => {
        const property = JSON.parse(JSON.stringify(prop));

        if (property.binGroup.name === "lifetime" && property.value === -1) {
          propertiesToRemove.push("lifetime", "particleLifetime");
        }

        if (emitter.isSimple) {
          // Todo: More rules
          const isSimpleProperty = !!property.simpleValue;

          let normalProperty;
          let simpleProperty;

          if (isSimpleProperty) {
            if (property.binPropertyName === "constantValue") {
              normalProperty = property;
              simpleProperty = {
                troybinName: property.troybinName,
                troybinType: property.simpleValue[0],
                binGroup: property.simpleValue[3],
                binGroupType: property.simpleValue[1],
                binPropertyName: property.binPropertyName,
                binPropertyType: property.simpleValue[2]
              };

              const valueType = CheckValueType(property.value);

              if (valueType === property.troybinType) {
                normalProperty.value = property.value;
                simpleProperty.value = property.value[0]; // eslint-disable-line
              } else if (
                normalProperty.binGroup.name === "birthRotationalVelocity0" ||
                normalProperty.binGroup.name === "birthRotation0"
              ) {
                normalProperty.value = [property.value, 0, 0];
                simpleProperty.value = property.value[0][0]; // eslint-disable-line
              } else if (property.binGroup.name === "bindWeight") {
                normalProperty.value = property.value;
                simpleProperty.binPropertyName = "";
                simpleProperty.value = [property.value, property.value];
              } else {
                normalProperty.value = [
                  property.value,
                  property.value,
                  property.value
                ];
                simpleProperty.value = property.value[0][0]; // eslint-disable-line
              }
            } else {
              const correctValue = property.simpleValue[4].includes(
                "timesTable"
              )
                ? [
                    property.value[0],
                    property.value[1],
                    property.value[1],
                    property.value[1]
                  ]
                : property.value;

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
        }
      });

      emitter.properties.forEach(property => {
        const keepEntry =
          propertiesToRemove.find(
            element => element === property.troybinName
          ) === undefined;

        if (keepEntry) {
          updatedEmitter.properties.push(property);
        }
      });

      propertiesToAdd.forEach(addProperty => {
        updatedEmitter.properties.push(addProperty);
      });

      emitters.push(updatedEmitter);
    } else {
      emitters.push(emitter);
    }
  });

  troybinData.emitters = emitters;

  return troybinData;
}

/*
Returns array with property in bin format
*/
export function WriteProperty(property, spacingAmount) {
  let constValueWritten;
  const forceDynamics = property.name === "worldAcceleration";
  const formatedProperty = [];

  const constantValues = [];
  const probTableX = [];
  const probTableY = [];
  const probTableZ = [];
  const probTableA = [];
  const timesTable = [];

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
  });

  switch (property.members[0].binGroup.structure) {
    case "ChildParticleProperty":
      constValueWritten = getValue(property.members[0]);

      formatedProperty.push(
        `${getSpacing(spacingAmount)}${property.members[0].binGroup.name}: ${
          property.members[0].binGroupType
        } {\r\n`,
        `${getSpacing(
          spacingAmount + 1
        )}childrenIdentifiers: list[embed] = {\r\n`,
        `${getSpacing(spacingAmount + 2)}VfxChildIdentifier {\r\n`,
        `${getSpacing(spacingAmount + 3)}${
          property.members[0].binPropertyName
        }: ${property.members[0].binPropertyType} = ${constValueWritten}\r\n`,
        `${getSpacing(spacingAmount + 2)}}\r\n`,
        `${getSpacing(spacingAmount + 1)}}\r\n`,
        `${getSpacing(spacingAmount)}}\r\n`
      );

      break;
    case "ColorTypeProperty":
      if (property.members[0].value[1] !== property.members[0].defaultValue) {
        formatedProperty.push(
          `${getSpacing(spacingAmount)}${
            property.members[0].binPropertyName !== ""
              ? property.members[0].binPropertyName
              : property.name
          }${property.members[0].value[0]}: ${
            property.members[0].binGroupType
          } = ${property.members[0].value[1]}\r\n`
        );
      }

      break;
    case "MultConstantValueProperty":
      formatedProperty.push(
        `${getSpacing(spacingAmount)}${property.name}: ${
          property.members[0].binGroupType
        } {\r\n`
      );

      constValueWritten = writeConstantValue(property, spacingAmount + 1);

      constValueWritten.result.forEach(entry => {
        formatedProperty.push(entry);
      });

      formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);

      break;
    case "SimpleProperty":
      constValueWritten = getValue(property.members[0]);

      if (constValueWritten !== property.members[0].defaultValue) {
        formatedProperty.push(
          `${getSpacing(spacingAmount)}${
            property.members[0].binPropertyName !== ""
              ? property.members[0].binPropertyName
              : property.name
          }: ${property.members[0].binGroupType} = ${constValueWritten}\r\n`
        );
      }

      break;
    case "SimpleObjectProperty":
      if (property.members[0].value !== property.members[0].defaultValue) {
        formatedProperty.push(
          `${getSpacing(spacingAmount)}${property.name}: ${
            property.members[0].binGroupType
          } = {\r\n`
        );

        const isStringArray =
          property.members[0].troybinType === "STRINGS_NO_PATH";

        if (isStringArray) {
          property.members[0].value.forEach(valuePart => {
            formatedProperty.push(
              `${getSpacing(spacingAmount + 1)}${valuePart}\r\n`
            );
          });
        } else {
          constValueWritten = writeConstantValue(
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

      break;
    case "SimpleObjectVariableProperty":
      constValueWritten = writeConstantValue(
        constantValues,
        spacingAmount + 1,
        false
      );

      if (
        constValueWritten.result.length !== 0 ||
        probTableX.length ||
        probTableY.length ||
        probTableZ.length ||
        probTableA.length ||
        timesTable.length ||
        forceDynamics
      ) {
        formatedProperty.push(
          `${getSpacing(spacingAmount)}${property.name}: embed = ${
            property.members[0].binGroup.propertyType
          } {\r\n`
        );

        constValueWritten.result.forEach(entry => {
          formatedProperty.push(entry);
        });

        if (
          probTableX.length ||
          probTableY.length ||
          probTableZ.length ||
          probTableA.length ||
          timesTable.length ||
          forceDynamics
        ) {
          writeDynamics(
            constValueWritten.constValue,
            property,
            probTableX,
            probTableY,
            probTableZ,
            probTableA,
            spacingAmount + 1,
            timesTable
          ).forEach(entry => {
            formatedProperty.push(entry);
          });
        }

        formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);
      }

      break;
    case "ShapeRotationAnglesProperty":
      formatedProperty.push(
        `${getSpacing(spacingAmount)}${property.name}: ${
          property.members[0].binGroupType
        } {\r\n`
      );

      if (probTableX.length) {
        formatedProperty.push(
          `${getSpacing(spacingAmount + 1)}ValueFloat {\r\n`
        );

        constValueWritten = writeConstantValue(
          [constantValues[0]],
          spacingAmount + 2,
          false
        );

        constValueWritten.result.forEach(entry => {
          formatedProperty.push(entry);
        });

        writeDynamics(
          constValueWritten.constValue,
          property,
          probTableX,
          [],
          probTableZ,
          probTableA,
          spacingAmount + 2,
          timesTable,
          false
        ).forEach(entry => {
          formatedProperty.push(entry);
        });

        formatedProperty.push(`${getSpacing(spacingAmount + 1)}}\r\n`);
      } else {
        formatedProperty.push(
          `${getSpacing(spacingAmount + 1)}ValueFloat {}\r\n`
        );
      }

      if (probTableY.length) {
        formatedProperty.push(
          `${getSpacing(spacingAmount + 1)}ValueFloat {\r\n`
        );

        constValueWritten = writeConstantValue(
          [constantValues[1]],
          spacingAmount + 2,
          false
        );

        constValueWritten.result.forEach(entry => {
          formatedProperty.push(entry);
        });

        writeDynamics(
          constValueWritten.constValue,
          property,
          [],
          probTableY,
          probTableZ,
          probTableA,
          spacingAmount + 2,
          timesTable,
          false
        ).forEach(entry => {
          formatedProperty.push(entry);
        });

        formatedProperty.push(`${getSpacing(spacingAmount + 1)}}\r\n`);
      } else {
        formatedProperty.push(
          `${getSpacing(spacingAmount + 1)}ValueFloat {}\r\n`
        );
      }

      formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);

      break;
    default:
      break;
  }

  return formatedProperty;
}

export function GetStructureData(troybinArray) {
  const entryStartIndices = [];
  let entryAmount = 0;
  let systemIndex = 0;
  let unknownIndex = -1;

  for (let i = 0; i < troybinArray.length; i += 1) {
    const row = troybinArray[i];

    // Checks if row starts with "[" to see if it's an entry starting point
    if (row[0] === "[") {
      entryStartIndices.push(i);
      entryAmount += 1;

      // Note down which one is the System entry
      if (row === "[System]") {
        systemIndex = i;
      }
    }
    // Note down which one is the UNKNOWN_HASHES entry if it exists
    if (row === "[UNKNOWN_HASHES]" || row.includes("UNKNOWN_HASH")) {
      if (unknownIndex === -1) {
        entryStartIndices.push(i);
        entryAmount += 1;
        unknownIndex = i;
      }
    }
  }

  const structureData = {
    entryAmount,
    entryStartIndices,
    systemIndex,
    unknownIndex
  };

  return structureData;
}
