/* 
Add these with the "createMembers" function to the members array of a property
if the property can have those entries

Example: 
createMembers([xTableEntries, yTableEntries, zTableEntries, aTableEntries, timesTableEntries])

Or:
Check "const rate"
};
*/
const xTableEntries = [
  "probTableX1",
  "probTableX2",
  "probTableX3",
  "probTableX4",
  "probTableX5",
  "probTableX6",
  "probTableX7",
  "probTableX8",
  "probTableX9"
];
const yTableEntries = [
  "probTableY1",
  "probTableX2",
  "probTableY3",
  "probTableY4",
  "probTableY5",
  "probTableY6",
  "probTableY7",
  "probTableY8",
  "probTableY9"
];
const zTableEntries = [
  "probTableZ1",
  "probTableZ2",
  "probTableZ3",
  "probTableZ4",
  "probTableZ5",
  "probTableZ6",
  "probTableZ7",
  "probTableZ8",
  "probTableZ9"
];
const aTableEntries = [ // eslint-disable-line
  "probTableA1",
  "probTableA2",
  "probTableA3",
  "probTableA4",
  "probTableA5",
  "probTableA6",
  "probTableA7",
  "probTableA8",
  "probTableA9"
];
const timesTableEntries = [
  "timesTable1",
  "timesTable2",
  "timesTable3",
  "timesTable4",
  "timesTable5",
  "timesTable6",
  "timesTable7",
  "timesTable8",
  "timesTable9"
];

function createMembers(arrays) {
  const members = ["constantValue"];
  arrays.forEach(array => {
    array.forEach(entry => {
      members.push(entry);
    });
  });

  return members;
}

/* 
Parent info necessary for generating bin entries
*/

const shape = {
  name: "shape",
  members: [
    "birthTranslation",
    "emitOffset",
    "emitRotationAngles",
    "emitRotationAxes"
  ],
  structure: "",
  order: 50
};

const primitiveMesh = {
  name: "primitive",
  members: ["mMesh"],
  structure: "primitiveMesh",
  order: 50
};

const primitiveTrail = {
  name: "primitive",
  members: ["mMode", "mBirthTilingSize"],
  structure: "primitiveTrail",
  order: 50
};

/* 
Contains info necessary for generating bin entries

Blueprint binGroup:
const  = {
  name: "",
  members: [],
  structure: "",
  order: 
};
*/
const bindWeight = {
  name: "bindWeight",
  members: [],
  structure: "SimpleObjectVariableProperty",
  order: 53
};

const birthDrag = {
  name: "birthDrag",
  members: [],
  structure: "SimpleObjectVariableProperty",
  order: 45
};

const birthTranslation = {
  name: "birthTranslation",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  structure: "SimpleObjectVariableProperty",
  order: 50.1,
  parent: shape
};

const birthRotationalVelocity0 = {
  name: "birthRotationalVelocity0",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  structure: "SimpleObjectVariableProperty",
  order: 150
};

const birthUVOffset = {
  name: "birthUVOffset",
  members: createMembers([xTableEntries, yTableEntries, zTableEntries]),
  structure: "SimpleObjectVariableProperty",
  order: 225
};

const birthUvScrollRate = {
  name: "birthUvScrollRate",
  members: ["constantValue"],
  structure: "SimpleObjectVariableProperty",
  order: 220
};

const birthVelocity = {
  name: "birthVelocity",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  structure: "SimpleObjectVariableProperty",
  order: 43
};

const blendMode = {
  name: "blendMode",
  members: [],
  structure: "SimpleProperty",
  order: 55
};

const color = {
  name: "color",
  members: createMembers([timesTableEntries]),
  structure: "SimpleObjectVariableProperty",
  order: 70
};

const disableBackfaceCull = {
  name: "disableBackfaceCull",
  members: [],
  structure: "SimpleProperty",
  order: 80
};

const disabled = { // eslint-disable-line
  name: "disabled",
  members: [],
  structure: "SimpleProperty",
  order: 27
};

const emitterName = {
  name: "emitterName",
  members: [],
  structure: "SimpleProperty",
  order: 25
};

const emitOffset = {
  name: "emitOffset",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  structure: "SimpleObjectVariableProperty",
  order: 50.2,
  parent: shape
};

const emitRotationAngles = {
  name: "emitRotationAngles",
  members: createMembers([xTableEntries, yTableEntries]),
  structure: "ShapeRotationAnglesProperty",
  order: 50.3,
  parent: shape
};

const emitRotationAxes = {
  name: "emitRotationAxes",
  members: ["e-rotation1-axis", "e-rotation2-axis"],
  structure: "SimpleObjectProperty",
  order: 50.4,
  parent: shape
};

const importance = {
  name: "importance",
  members: [],
  structure: "SimpleProperty",
  order: 30
};

const isSingleParticle = {
  name: "isSingleParticle",
  members: [],
  structure: "SimpleProperty",
  order: 20
};

const mBirthTilingSize = {
  name: "mBirthTilingSize",
  members: [],
  structure: "SimpleObjectVariableProperty",
  order: 55.2,
  parent: primitiveTrail
};

const mMesh = {
  name: "mMesh",
  members: [],
  structure: "SimpleProperty",
  order: 55.1,
  parent: primitiveMesh
};

const mMode = {
  name: "mMode",
  members: [],
  structure: "SimpleProperty",
  order: 55.1,
  parent: primitiveTrail
};

const particleIsLocalOrientation = {
  name: "particleIsLocalOrientation",
  members: [],
  structure: "SimpleProperty",
  order: 85
};

const particleLifetime = {
  name: "particleLifetime",
  members: createMembers([xTableEntries, timesTableEntries]),
  structure: "SimpleObjectVariableProperty",
  order: 10
};

const particleLinger = {
  name: "particleLinger",
  members: [],
  structure: "SimpleObjectProperty",
  order: 15
};

const rate = {
  name: "rate",
  members: createMembers([xTableEntries, timesTableEntries]),
  structure: "SimpleObjectVariableProperty",
  order: 5
};

const softParticleParams = {
  name: "softParticleParams",
  members: ["beginIn", "deltaIn"],
  structure: "MultConstantValueProperty",
  order: 75
};

const soundPersistentDefault = {
  name: "soundPersistentDefault",
  members: [],
  structure: "SimpleProperty",
  order: 310
};

const spectatorPolicy = { // eslint-disable-line
  name: "spectatorPolicy",
  members: [],
  structure: "SimpleProperty",
  order: 32
};

const texture = {
  name: "texture",
  members: [],
  structure: "SimpleProperty",
  order: 200
};

/* 
Blueprint ValueEntry:
,
    {   
        troybinName: "",
        troybinType: "",
        binGroup: "",
        binGroupType: "",
        binPropertyName: "",
        binPropertyType: ""
    },
*/

const Values = {
  eValues: [
    {
      troybinName: "e-rate",
      troybinType: "ONE_DOUBLE",
      binGroup: rate,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rotation1",
      troybinType: "ONE_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "list[embed] =",
      binPropertyName: "constantValue",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rotation1-axis",
      troybinType: "THREE_DOUBLE",
      binGroup: emitRotationAxes,
      binGroupType: "list[vec3] =",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "e-rotation1P1",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rotation1P2",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rotation2",
      troybinType: "ONE_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "list[embed] =",
      binPropertyName: "constantValue",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rotation2-axis",
      troybinType: "THREE_DOUBLE",
      binGroup: emitRotationAxes,
      binGroupType: "list[vec3] =",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "e-rotation2P1",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rotation2P2",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-soft-in-depth",
      troybinType: "ONE_DOUBLE",
      binGroup: softParticleParams,
      binGroupType: "pointer = VfxSoftParticleDefinitionData",
      binPropertyName: "beginIn",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-soft-in-depth-delta",
      troybinType: "ONE_DOUBLE",
      binGroup: softParticleParams,
      binGroupType: "pointer = VfxSoftParticleDefinitionData",
      binPropertyName: "deltaIn",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-tilesize",
      troybinType: "THREE_DOUBLE",
      binGroup: mBirthTilingSize,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "mBirthTilingSize",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "embed = ValueVector2",
      binPropertyName: "constantValue",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    }
  ],
  pValues: [
    {
      troybinName: "p-backfaceon",
      troybinType: "INT/BOOLEAN",
      binGroup: disableBackfaceCull,
      binGroupType: "bool",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-bindtoemitter",
      troybinType: "TWO_DOUBLE_TO_ONE",
      binGroup: bindWeight,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32",
      defaultValue: "0"
    },
    {
      troybinName: "p-drag",
      troybinType: "THREE_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-life",
      troybinType: "ONE_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-life1",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-life2",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-life3",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-life4",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-life5",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-life6",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-life7",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-life8",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-life9",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-lifeP1",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-lifeP2",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-lifeP3",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-lifeP4",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-lifeP5",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-lifeP6",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-lifeP7",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-lifeP8",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-lifeP9",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-linger",
      troybinType: "ONE_DOUBLE",
      binGroup: particleLinger,
      binGroupType: "option[f32]",
      binPropertyName: "constantValue",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-local-orient",
      troybinType: "INT/BOOLEAN",
      binGroup: particleIsLocalOrientation,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-mesh",
      troybinType: "STRING_PATH",
      binGroup: mMesh,
      binGroupType: "string",
      binPropertyName: "mSimpleMeshName",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-meshtex",
      troybinType: "STRING_PATH",
      binGroup: texture,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-offset",
      troybinType: "THREE_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: "{ 0, 0, 0 }"
    },
    {
      troybinName: "p-offsetXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-offsetXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-offsetYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-offsetYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-offsetZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-offsetZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffset",
      troybinType: "THREE_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvel",
      troybinType: "THREE_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelP1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelP2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelP3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelP4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelP5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelP6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelP7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelP8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelP9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-texture",
      troybinType: "STRING_PATH",
      binGroup: texture,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-trailmode",
      troybinType: "ONE_DOUBLE",
      binGroup: mMode,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "embed ValueVector2",
      binPropertyName: "constantValue",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "p-vel",
      troybinType: "THREE_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: "{ 0, 0, 0 }"
    },
    {
      troybinName: "p-velXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-velP1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-velP2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-velP3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-velP4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-velP5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-velP6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-velP7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-velP8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-velP9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgba",
      troybinType: "FOUR_DOUBLE",
      binGroup: color,
      binGroupType: "embed = ValueColor",
      binPropertyName: "constantValue",
      binPropertyType: "vec4",
      defaultValue: "{ 1, 1, 1, 1 }"
    },
    {
      troybinName: "p-xrgba1",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgba2",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgba3",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgba4",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgba5",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgba6",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgba7",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgba8",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgba9",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec4",
      defaultValue: undefined
    }
  ],
  systemValues: [
    {
      troybinName: "GroupPart",
      troybinType: "STRING_NO_PATH",
      binGroup: emitterName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "GroupPartImportance",
      troybinType: "BOOLEAN/INT",
      binGroup: importance,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "SimulateEveryFrame",
      troybinType: "INT/BOOLEAN",
      binGroup: undefined,
      binGroupType: "",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "SoundPersistent",
      troybinType: "STRING_NO_PATH",
      binGroup: soundPersistentDefault,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    }
  ],
  others: [
    {
      troybinName: "rendermode",
      troybinType: "BOOLEAN/INT",
      binGroup: blendMode,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "single-particle",
      troybinType: "INT/BOOLEAN",
      binGroup: isSingleParticle,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    }
  ]
};

export default Values;
