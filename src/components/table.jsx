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
  "timesTable9",
  "timesTable10"
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
  name: "primitiveMesh",
  members: ["mMesh"],
  structure: "primitiveMesh",
  order: 52
};

const primitiveTrail = {
  name: "primitiveTrail",
  members: ["mMode", "mBirthTilingSize"],
  structure: "primitiveTrail",
  order: 52
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
const alphaRef = {
  name: "alphaRef",
  members: [],
  structure: "SimpleProperty",
  order: 77
};
const bindWeight = {
  name: "bindWeight",
  members: [],
  structure: "SimpleObjectVariableProperty",
  order: 53
};

const birthAcceleration = {
  name: "birthAcceleration",
  members: createMembers([xTableEntries, yTableEntries, zTableEntries]),
  structure: "SimpleObjectVariableProperty",
  order: 48
};

const birthColor = {
  name: "birthColor",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    aTableEntries,
    timesTableEntries
  ]),
  structure: "SimpleObjectVariableProperty",
  order: 68
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

const birthRotation0 = {
  name: "birthRotation0",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  structure: "SimpleObjectVariableProperty",
  order: 90
};

const birthRotation1 = {
  name: "birthRotation1",
  members: createMembers([timesTableEntries]),
  structure: "SimpleObjectVariableProperty",
  order: 232
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
  order: 92
};

const birthRotationalVelocity1 = {
  name: "birthRotationalVelocity1",
  members: createMembers([timesTableEntries]),
  structure: "SimpleObjectVariableProperty",
  order: 235
};

const birthScale0 = {
  name: "birthScale0",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  structure: "SimpleObjectVariableProperty",
  order: 150
};

const birthScale1 = {
  name: "birthScale1",
  members: createMembers([timesTableEntries]),
  structure: "SimpleObjectVariableProperty",
  order: 230
};

const birthUVOffset = {
  name: "birthUVOffset",
  members: createMembers([xTableEntries, yTableEntries, timesTableEntries]),
  structure: "SimpleObjectVariableProperty",
  order: 225
};

const birthUvScrollRate = {
  name: "birthUvScrollRate",
  members: createMembers([xTableEntries, yTableEntries, timesTableEntries]),
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

const childParticleSetDefinition = {
  name: "childParticleSetDefinition",
  members: [],
  structure: "ChildParticleProperty",
  order: 23
};

const color = {
  name: "color",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    aTableEntries,
    timesTableEntries
  ]),
  structure: "SimpleObjectVariableProperty",
  order: 70
};

const colorLookUpType = {
  name: "colorLookUpType",
  members: [],
  structure: "ColorTypeProperty",
  order: 74
};

const disableBackfaceCull = {
  name: "disableBackfaceCull",
  members: [],
  structure: "SimpleProperty",
  order: 80
};

const disabled = {
  name: "disabled",
  members: [],
  structure: "SimpleProperty",
  order: 27
};

const doesCastShadow = {
  name: "doesCastShadow",
  members: [],
  structure: "SimpleProperty",
  order: 88
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

const isDirectionOriented = {
  name: "isDirectionOriented",
  members: [],
  structure: "SimpleProperty",
  order: 83
};

const isLocalOrientation = {
  name: "isLocalOrientation",
  members: [],
  structure: "SimpleProperty",
  order: 82
};

const isRandomStartFrame = {
  name: "isRandomStartFrame",
  members: [],
  structure: "SimpleProperty",
  order: 86
};

const isRotationEnabled = {
  name: "isRotationEnabled",
  members: [],
  structure: "SimpleProperty",
  order: 87
};

const isSingleParticle = {
  name: "isSingleParticle",
  members: [],
  structure: "SimpleProperty",
  order: 20
};

const isUniformScale = {
  name: "isUniformScale",
  members: [],
  structure: "SimpleProperty",
  order: 85
};

const lifetime = {
  name: "lifetime",
  members: [],
  structure: "SimpleObjectProperty",
  order: 17
};

const mBirthTilingSize = {
  name: "mBirthTilingSize",
  members: [],
  structure: "SimpleObjectVariableProperty",
  order: 52.2,
  parent: primitiveTrail
};

const miscRenderFlags = { // eslint-disable-line
  name: "miscRenderFlags",
  members: [],
  structure: "SimpleProperty",
  order: 51
};

const mMesh = {
  name: "mMesh",
  members: [],
  structure: "SimpleProperty",
  order: 52.1,
  parent: primitiveMesh
};

const mMode = {
  name: "mMode",
  members: [],
  structure: "SimpleProperty",
  order: 52.1,
  parent: primitiveTrail
};

const numFrames = {
  name: "numFrames",
  members: [],
  structure: "SimpleProperty",
  order: 210
};

const orientation1 = {
  name: "orientation",
  members: [],
  structure: "SimpleProperty",
  order: 240
};

const particleColorTexture = {
  name: "particleColorTexture",
  members: [],
  structure: "SimpleProperty",
  order: 54
};

const particleIsLocalOrientation = {
  name: "particleIsLocalOrientation",
  members: [],
  structure: "SimpleProperty",
  order: 84
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

const pass = {
  name: "pass",
  members: [],
  structure: "SimpleProperty",
  order: 73
};

const primitive = {
  name: "primitive",
  members: [],
  structure: "SimpleProperty",
  order: 52
};

const rate = {
  name: "rate",
  members: createMembers([xTableEntries, timesTableEntries]),
  structure: "SimpleObjectVariableProperty",
  order: 5
};

const rotation0 = {
  name: "rotation0",
  members: createMembers([timesTableEntries]),
  structure: "SimpleObjectVariableProperty",
  order: 93
};

const scale0 = {
  name: "scale0",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  structure: "SimpleObjectVariableProperty",
  order: 155
};

const scale1 = {
  name: "scale1",
  members: createMembers([timesTableEntries]),
  structure: "SimpleObjectVariableProperty",
  order: 231
};

const softParticleParams = {
  name: "softParticleParams",
  members: ["beginIn", "deltaIn"],
  structure: "MultConstantValueProperty",
  order: 75
};

const soundOnCreateDefault = {
  name: "soundOnCreateDefault",
  members: [],
  structure: "SimpleProperty",
  order: 311
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

const timeBeforeFirstEmission = { // eslint-disable-line
  name: "timeBeforeFirstEmission",
  members: [],
  structure: "SimpleProperty",
  order: 3
};

const texDiv = {
  name: "texDiv",
  members: [],
  structure: "SimpleProperty",
  order: 213
};

const texture = {
  name: "texture",
  members: [],
  structure: "SimpleProperty",
  order: 200
};

const textureMult = {
  name: "textureMult",
  members: [],
  structure: "SimpleProperty",
  order: 215
};

const worldAcceleration = {
  name: "worldAcceleration",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  structure: "SimpleObjectVariableProperty",
  order: 47
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
      troybinName: "e-alpharef",
      troybinType: "BOOLEAN/INT",
      binGroup: alphaRef,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "e-disabled",
      troybinType: "INT/BOOLEAN",
      binGroup: disabled,
      binGroupType: "bool",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "e-life",
      troybinType: "ONE_DOUBLE",
      binGroup: lifetime,
      binGroupType: "option[f32]",
      binPropertyName: "constantValue",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "e-local-orient",
      troybinType: "INT/BOOLEAN",
      binGroup: isLocalOrientation,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
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
      troybinName: "e-rgba",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthColor,
      binGroupType: "embed = ValueColor",
      binPropertyName: "constantValue",
      binPropertyType: "vec4",
      defaultValue: "{ 1, 1, 1, 1 }"
    },
    {
      troybinName: "e-rgbaXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaAP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaAP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaAP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaAP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaAP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaAP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaAP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaAP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgbaAP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgba1",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgba2",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgba3",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgba4",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgba5",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgba6",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgba7",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgba8",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec4",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgba9",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec4",
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
    },
    {
      troybinName: "e-uvoffsetXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffsetP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec2",
      defaultValue: undefined
    }
  ],
  pValues: [
    {
      troybinName: "p-accel",
      troybinType: "THREE_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: "{ 0, 0, 0 }"
    },
    {
      troybinName: "p-accelXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-accelZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
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
      defaultValue: "0",
      simpleValue: ["ONE_DOUBLE", "embed = ValueFloat", "f32", bindWeight]
    },
    {
      troybinName: "p-colortype",
      troybinType: "TWO_DOUBLE_TO_XYZ",
      binGroup: colorLookUpType,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
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
      defaultValue: 0
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
      troybinName: "p-meshtex-mult",
      troybinType: "STRING_PATH",
      binGroup: textureMult,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-numframes",
      troybinType: "ONE_DOUBLE",
      binGroup: numFrames,
      binGroupType: "u16",
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
      defaultValue: "{ 0, 0, 0 }"
    },
    {
      troybinName: "p-quadrot",
      troybinType: "THREE_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: "{ 0, 0, 0 }",
      simpleValue: ["ONE_DOUBLE", "embed = ValueFloat", "f32", birthRotation1]
    },
    {
      troybinName: "p-quadrotXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotP1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotP2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotP3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotP4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotP5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotP6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotP7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotP8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-quadrotP9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1
      ]
    },
    {
      troybinName: "p-randomstartframe",
      troybinType: "INT/BOOLEAN",
      binGroup: isRandomStartFrame,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-rgba",
      troybinType: "STRING_PATH",
      binGroup: particleColorTexture,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvel",
      troybinType: "THREE_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: "{ 0, 0, 0 }",
      simpleValue: [
        "ONE_DOUBLE",
        "embed = ValueFloat",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
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
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelP2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelP3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelP4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelP5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelP6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelP7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelP8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-rotvelP9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1
      ]
    },
    {
      troybinName: "p-scale",
      troybinType: "THREE_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: "{ 0, 0, 0 }",
      simpleValue: ["ONE_DOUBLE", "embed = ValueFloat", "f32", birthScale1]
    },
    {
      troybinName: "p-scaleXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleP1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleP2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleP3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleP4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleP5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleP6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleP7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleP8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-scaleP9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "ONE_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1
      ]
    },
    {
      troybinName: "p-shadow",
      troybinType: "INT/BOOLEAN",
      binGroup: doesCastShadow,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      // Note: implement simpleEmitter logic
      troybinName: "p-simpleorient",
      troybinType: "ONE_DOUBLE",
      binGroup: orientation1,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-texdiv",
      troybinType: "TWO_DOUBLE",
      binGroup: texDiv,
      binGroupType: "vec2",
      binPropertyName: "",
      binPropertyType: "",
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
      troybinName: "p-type",
      troybinType: "DOUBLE_TO_PRIMITIVE",
      binGroup: primitive,
      binGroupType: "pointer",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: -1
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
      troybinName: "p-uvscroll-rgbXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgbP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "p-vecalign",
      troybinType: "INT/BOOLEAN",
      binGroup: isDirectionOriented,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: "",
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
      troybinName: "p-vel1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-vel2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-vel3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-vel4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-vel5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-vel6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-vel7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-vel8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-vel9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccel",
      troybinType: "THREE_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "embed = IntegratedValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: "{ 0, 0, 0 }"
    },
    {
      troybinName: "p-worldaccelXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelP1",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelP2",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelP3",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelP4",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelP5",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelP6",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelP7",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelP8",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccelP9",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-xquadrot",
      troybinType: "THREE_DOUBLE",
      binGroup: rotation0,
      binGroupType: "embed = IntegratedValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-xquadrot-on",
      troybinType: "INT/BOOLEAN",
      binGroup: isRotationEnabled,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-xquadrot1",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-xquadrot2",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-xquadrot3",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-xquadrot4",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-xquadrot5",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-xquadrot6",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-xquadrot7",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-xquadrot8",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-xquadrot9",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
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
      troybinName: "p-xrgbaXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaAP1",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaAP2",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaAP3",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaAP4",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaAP5",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaAP6",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaAP7",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaAP8",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xrgbaAP9",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA9",
      binPropertyType: "f32",
      defaultValue: undefined
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
    },
    {
      troybinName: "p-xscale",
      troybinType: "THREE_DOUBLE",
      binGroup: scale0,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: "{ 0, 0, 0 }",
      simpleValue: ["ONE_DOUBLE", "embed = ValueFloat", "f32", scale1]
    },
    {
      troybinName: "p-xscaleXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscaleZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-xscale1",
      troybinType: "FOUR_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1
      ]
    },
    {
      troybinName: "p-xscale2",
      troybinType: "FOUR_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1
      ]
    },
    {
      troybinName: "p-xscale3",
      troybinType: "FOUR_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1
      ]
    },
    {
      troybinName: "p-xscale4",
      troybinType: "FOUR_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1
      ]
    },
    {
      troybinName: "p-xscale5",
      troybinType: "FOUR_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1
      ]
    },
    {
      troybinName: "p-xscale6",
      troybinType: "FOUR_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1
      ]
    },
    {
      troybinName: "p-xscale7",
      troybinType: "FOUR_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1
      ]
    },
    {
      troybinName: "p-xscale8",
      troybinType: "FOUR_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1
      ]
    },
    {
      troybinName: "p-xscale9",
      troybinType: "FOUR_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1
      ]
    },
    {
      troybinName: "p-xscale10",
      troybinType: "FOUR_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable10",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1
      ]
    },
    {
      troybinName: "pass",
      troybinType: "ONE_DOUBLE",
      binGroup: pass,
      binGroupType: "i16",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: 0
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
      troybinName: "SoundOnCreate",
      troybinType: "STRING_NO_PATH",
      binGroup: soundOnCreateDefault,
      binGroupType: "string",
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
      troybinName: "ChildParticleName",
      troybinType: "STRING_NO_EXT",
      binGroup: childParticleSetDefinition,
      binGroupType: "embed = VfxChildParticleSetDefinitionData",
      binPropertyName: "effectKey",
      binPropertyType: "hash",
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
    },
    {
      troybinName: "uniformscale",
      troybinType: "INT/BOOLEAN",
      binGroup: isUniformScale,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    }
  ]
};

export default Values;
