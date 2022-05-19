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
const aTableEntries = [
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
const timesSimpleTableEntries = [
  "timesSimpleTable1",
  "timesSimpleTable2",
  "timesSimpleTable3",
  "timesSimpleTable4",
  "timesSimpleTable5",
  "timesSimpleTable6",
  "timesSimpleTable7",
  "timesSimpleTable8",
  "timesSimpleTable9",
  "timesSimpleTable10"
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
const distortionDefinition = {
  name: "distortionDefinition",
  members: ["distortion", "distortionMode", "normalMapTexture"],
  structure: "",
  order: 79
};

const fieldCollectionDefinition = {
  name: "fieldCollectionDefinition",
  members: [
    "fieldAccelerationDefinitions",
    "fieldAttractionDefinitions",
    "fieldDragDefinitions",
    "fieldNoiseDefinitions",
    "fieldOrbitalDefinitions"
  ],
  structure: "",
  order: 24
};

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

const primitiveArbitraryQuad = { // eslint-disable-line
  name: "primitiveArbitraryQuad",
  members: [],
  structure: "primitiveArbitraryQuad",
  order: 52
};

const primitiveArbitraryTrail = {
  name: "primitiveArbitraryTrail",
  members: ["mMode", "mCutoff", "mBirthTilingSize", "mSmoothingMode"],
  structure: "primitiveArbitraryTrail",
  order: 52
};

const primitiveAttachedMesh = {
  name: "primitiveAttachedMesh",
  members: ["mMesh"],
  structure: "primitiveAttachedMesh",
  order: 52
};

const primitiveBeam = { // eslint-disable-line
  name: "primitiveBeam",
  members: ["mBeam"],
  structure: "primitiveBeam",
  order: 52
};

const primitiveMesh = {
  name: "primitiveMesh",
  members: ["mMesh"],
  structure: "primitiveMesh",
  order: 52
};

const primitiveNone = { // eslint-disable-line
  name: "primitiveNone",
  members: [],
  structure: "primitiveNone",
  order: 52
};

const primitivePlanarProjection = { // eslint-disable-line
  name: "primitivePlanarProjection",
  members: ["mProjection"],
  structure: "primitivePlanarProjection",
  order: 52
};

const primitiveRay = { // eslint-disable-line
  name: "primitiveRay",
  members: [],
  structure: "primitiveRay",
  order: 52
};

const primitiveTrail = {
  name: "primitiveTrail",
  members: ["mMode", "mCutoff", "mBirthTilingSize", "mSmoothingMode"],
  structure: "primitiveTrail",
  order: 52
};

/*
Field-Definitions
*/
const fieldAccelerationDefinitions = {
  name: "fieldAccelerationDefinitions",
  members: ["isLocalSpace", "acceleration"],
  structure: "fieldAccelerationDefinitions",
  order: 24.1,
  parent: fieldCollectionDefinition
};

const fieldAttractionDefinitions = {
  name: "fieldAttractionDefinitions",
  members: ["isLocalSpace", "position", "radius", "acceleration"],
  structure: "fieldAttractionDefinitions",
  order: 24.2,
  parent: fieldCollectionDefinition
};

const fieldDragDefinitions = {
  name: "fieldDragDefinitions",
  members: ["position", "radius", "strength"],
  structure: "fieldDragDefinitions",
  order: 24.3,
  parent: fieldCollectionDefinition
};

const fieldNoiseDefinitions = {
  name: "fieldNoiseDefinitions",
  members: ["position", "radius", "frequency", "velocityDelta", "axisFraction"],
  structure: "fieldNoiseDefinitions",
  order: 24.4,
  parent: fieldCollectionDefinition
};

const fieldOrbitalDefinitions = {
  name: "fieldOrbitalDefinitions",
  members: ["isLocalSpace", "direction"],
  structure: "fieldOrbitalDefinitions",
  order: 24.5,
  parent: fieldCollectionDefinition
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
const acceleration = {
  name: "acceleration",
  members: [],
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 24.2,
  parent: [fieldAccelerationDefinitions, fieldAttractionDefinitions]
};

const alphaRef = {
  name: "alphaRef",
  members: [],
  structure: "SimpleProperty",
  order: 77
};
const bindWeight = {
  name: "bindWeight",
  members: createMembers([timesTableEntries]),
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 53
};

const birthAcceleration = {
  name: "birthAcceleration",
  members: createMembers([xTableEntries, yTableEntries, zTableEntries]),
  propertyType: "ValueVector3",
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
  propertyType: "ValueColor",
  structure: "SimpleObjectVariableProperty",
  order: 68
};

const birthDrag = {
  name: "birthDrag",
  members: createMembers([xTableEntries, yTableEntries, zTableEntries]),
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 44
};

const birthFrameRate = {
  name: "birthFrameRate",
  members: createMembers([xTableEntries, timesTableEntries]),
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 205
};

const birthOrbitalVelocity = {
  name: "birthOrbitalVelocity",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 38
};

const birthTranslation = {
  name: "birthTranslation",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  propertyType: "ValueVector3",
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
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 90
};

const birthRotation1 = {
  name: "birthRotation1",
  members: createMembers([timesTableEntries]),
  propertyType: "ValueFloat",
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
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 92
};

const birthRotationalVelocity1 = {
  name: "birthRotationalVelocity1",
  members: createMembers([timesTableEntries]),
  propertyType: "ValueVector3",
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
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 150
};

const birthScale1 = {
  name: "birthScale1",
  members: createMembers([timesTableEntries, timesSimpleTableEntries]),
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 230
};

const birthUVOffset = {
  name: "birthUVOffset",
  members: createMembers([xTableEntries, yTableEntries, timesTableEntries]),
  propertyType: "ValueVector2",
  structure: "SimpleObjectVariableProperty",
  order: 220
};

const birthUVOffsetMult = {
  name: "birthUVOffsetMult",
  members: createMembers([xTableEntries, yTableEntries, timesTableEntries]),
  propertyType: "ValueVector2",
  structure: "SimpleObjectVariableProperty",
  order: 226
};

const birthUvScrollRate = {
  name: "birthUvScrollRate",
  members: createMembers([xTableEntries, yTableEntries, timesTableEntries]),
  propertyType: "ValueVector2",
  structure: "SimpleObjectVariableProperty",
  order: 216
};

const birthUvScrollRateMult = {
  name: "birthUvScrollRateMult",
  members: createMembers([xTableEntries, yTableEntries, timesTableEntries]),
  propertyType: "ValueVector2",
  structure: "SimpleObjectVariableProperty",
  order: 225
};

const birthVelocity = {
  name: "birthVelocity",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 43
};

const blendMode = {
  name: "blendMode",
  members: [],
  structure: "SimpleProperty",
  order: 56
};

const buildUpTime = {
  name: "buildUpTime",
  members: [],
  structure: "SimpleProperty",
  order: 302
}

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
  propertyType: "ValueColor",
  structure: "SimpleObjectVariableProperty",
  order: 70
};

const colorLookUpOffsets = {
  name: "colorLookUpOffsets",
  members: [],
  structure: "SimpleProperty",
  order: 60
};

const colorLookUpScales = {
  name: "colorLookUpScales",
  members: [],
  structure: "SimpleProperty",
  order: 59
};

const colorLookUpType = {
  name: "colorLookUpType",
  members: [],
  structure: "ColorTypeProperty",
  order: 58
};

const direction = {
  name: "direction",
  members: [],
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 24.2,
  parent: fieldOrbitalDefinitions
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

const distortion = {
  name: "distortion",
  members: [],
  structure: "SimpleProperty",
  order: 79.1,
  parent: distortionDefinition
};

const distortionMode = {
  name: "distortionMode",
  members: [],
  structure: "SimpleProperty",
  order: 79.2,
  parent: distortionDefinition
};

const doesCastShadow = {
  name: "doesCastShadow",
  members: [],
  structure: "SimpleProperty",
  order: 88
};

const drag = {
  name: "drag",
  members: createMembers([timesTableEntries]),
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 46
};

const emissionMeshName = {
  name: "emissionMeshName",
  members: [],
  structure: "SimpleProperty",
  order: 55.2
};

const emissionMeshScale = {
  name: "emissionMeshScale",
  members: [],
  structure: "SimpleProperty",
  order: 55.1
};

const emitterLinger = {
  name: "emitterLinger",
  members: [],
  structure: "SimpleObjectProperty",
  order: 22
};

const emitOffset = {
  name: "emitOffset",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  propertyType: "ValueVector3",
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

const emitterName = {
  name: "emitterName",
  members: [],
  structure: "SimpleProperty",
  order: 25
};

const fieldAccelName = {
  name: "fieldAccelerationDefinitions",
  members: [],
  structure: "SimpleProperty",
  order: 1000
};

const fieldAttractName = {
  name: "fieldAttractionDefinitions",
  members: [],
  structure: "SimpleProperty",
  order: 1003
};

const fieldDragName = {
  name: "fieldDragDefinitions",
  members: [],
  structure: "SimpleProperty",
  order: 1005
};

const fieldNoiseName = {
  name: "fieldNoiseDefinitions",
  members: [],
  structure: "SimpleProperty",
  order: 1007
};

const fieldOrbitName = {
  name: "fieldOrbitalDefinitions",
  members: [],
  structure: "SimpleProperty",
  order: 1010
};

const frameRate = { // eslint-disable-line
  name: "frameRate",
  members: [],
  structure: "SimpleProperty",
  order: 204
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

const isLocalSpace = {
  name: "isLocalSpace",
  members: [],
  structure: "SimpleProperty",
  order: 24.1,
  parent: [fieldAccelerationDefinitions, fieldOrbitalDefinitions]
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

const keywordsExcluded = {
  name: "keywordsExcluded",
  members: [],
  structure: "SimpleObjectProperty",
  order: 40
};

const KeywordsRequired = {
  name: "KeywordsRequired",
  members: [],
  structure: "SimpleObjectProperty",
  order: 41
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
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 52.3,
  parent: [primitiveArbitraryTrail, primitiveTrail]
};

const mCutoff = {
  name: "mCutoff",
  members: [],
  structure: "SimpleProperty",
  order: 52.2,
  parent: [primitiveArbitraryTrail, primitiveTrail]
};

const meshRenderFlags = { // eslint-disable-line
  name: "meshRenderFlags",
  members: [],
  structure: "SimpleProperty",
  order: 57
};

const miscRenderFlags = {
  name: "miscRenderFlags",
  members: [],
  structure: "SimpleProperty",
  order: 81
};

const mMesh = {
  name: "mMesh",
  members: [],
  structure: "SimpleProperty",
  order: 52.1,
  parent: [primitiveMesh, primitiveAttachedMesh]
};

const mMode = {
  name: "mMode",
  members: [],
  structure: "SimpleProperty",
  order: 52.1,
  parent: [primitiveArbitraryTrail, primitiveTrail]
};

const mSmoothingMode = { // eslint-disable-line
  name: "mSmoothingMode",
  members: [],
  structure: "SimpleProperty",
  order: 52.4,
  parent: [primitiveArbitraryTrail, primitiveTrail]
};

const normalMapTexture = {
  name: "normalMapTexture",
  members: [],
  structure: "SimpleProperty",
  order: 79.3,
  parent: distortionDefinition
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

const overrideScaleCap = {
  name: "overrideScaleCap",
  members: [],
  structure: "SimpleObjectProperty",
  order: 305
};

const particleBind = {
  name: "particleBind",
  members: [],
  structure: "SimpleProperty",
  order: 233
};

const particleColorTexture = {
  name: "particleColorTexture",
  members: [],
  structure: "SimpleProperty",
  order: 55
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
  propertyType: "ValueFloat",
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

const position = {
  name: "position",
  members: [],
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 24.1,
  parent: [
    fieldAttractionDefinitions,
    fieldDragDefinitions,
    fieldNoiseDefinitions
  ]
};

const primitive = {
  name: "primitive",
  members: [],
  structure: "SimpleProperty",
  order: 52
};

// TODO: Rename when translation is found
const property_0x4ffce322 = { // eslint-disable-line
  name: "0x4ffce322",
  members: ["scaleEmitOffsetByBoundObjectSize"],
  structure: "MultConstantValueProperty",
  order: 54
};

const radius = {
  name: "radius",
  members: [],
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 24.2,
  parent: [
    fieldAttractionDefinitions,
    fieldDragDefinitions,
    fieldNoiseDefinitions
  ]
};

const rate = {
  name: "rate",
  members: createMembers([xTableEntries, timesTableEntries]),
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 5
};

const rotation0 = {
  name: "rotation0",
  members: createMembers([timesTableEntries]),
  propertyType: "IntegratedValueVector3",
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
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 155
};

const scale1 = {
  name: "scale1",
  members: createMembers([timesTableEntries]),
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 231
};

const scaleBirthScaleByBoundObjectSize = {
  name: "scaleBirthScaleByBoundObjectSize",
  members: [],
  structure: "SimpleProperty",
  order: 195
};

const sliceTechniqueRange = {
  name: "sliceTechniqueRange",
  members: [],
  structure: "SimpleProperty",
  order: 61
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

const soundOnCreateName = {
  name: "soundOnCreateName",
  members: [],
  structure: "SimpleProperty",
  order: 2
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

const strength = {
  name: "strength",
  members: [],
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 24.3,
  parent: fieldDragDefinitions
};

const texAddressModeBase = {
  name: "texAddressModeBase",
  members: [],
  structure: "SimpleProperty",
  order: 212
};

const texAddressModeMult = {
  name: "texAddressModeMult",
  members: [],
  structure: "SimpleProperty",
  order: 229
};

const texDiv = {
  name: "texDiv",
  members: [],
  structure: "SimpleProperty",
  order: 213
};

const texDivMult = {
  name: "texDivMult",
  members: [],
  structure: "SimpleProperty",
  order: 230
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
  order: 223
};

const timeBeforeFirstEmission = {
  name: "timeBeforeFirstEmission",
  members: [],
  structure: "SimpleProperty",
  order: 3
};

const uvScrollClamp = {
  name: "uvScrollClamp",
  members: [],
  structure: "SimpleProperty",
  order: 147
};

const uvScrollClampMult = {
  name: "uvScrollClampMult",
  members: [],
  structure: "SimpleProperty",
  order: 148
};

const velocity = {
  name: "velocity",
  members: createMembers([timesTableEntries]),
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 45
};

const visibilityRadius = {
  name: "visibilityRadius",
  members: [],
  structure: "SimpleProperty",
  order: 301
};

const worldAcceleration = {
  name: "worldAcceleration",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  propertyType: "IntegratedValueVector3",
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
      troybinName: "e-framerate",
      troybinType: "ONE_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-framerateP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-framerateP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-framerateP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-framerateP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-framerateP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-framerateP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-framerateP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-framerateP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-framerateP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-life",
      troybinType: "ONE_DOUBLE",
      binGroup: lifetime,
      binGroupType: "option[f32]",
      binPropertyName: "constantValue",
      binPropertyType: "",
      defaultValue: 0
    },
    {
      troybinName: "e-linger",
      troybinType: "ONE_DOUBLE",
      binGroup: emitterLinger,
      binGroupType: "option[f32]",
      binPropertyName: "constantValue",
      binPropertyType: "",
      defaultValue: 0
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
      troybinName: "e-rateP1",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rateP2",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rateP3",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rateP4",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rateP5",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rateP6",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rateP7",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rateP8",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rateP9",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rate1",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rate2",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rate3",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rate4",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rate5",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rate6",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rate7",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rate8",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rate9",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rgba",
      troybinType: "COLOR_DOUBLE",
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
      binGroupType: "list[vec3]",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "e-rotation11",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rotation12",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "f32",
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
      binGroupType: "list[vec3]",
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
      troybinName: "e-rotation21",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-rotation22",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-shape-name",
      troybinType: "STRING_PATH",
      binGroup: emissionMeshName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "e-shape-scale",
      troybinType: "ONE_DOUBLE",
      binGroup: emissionMeshScale,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: "",
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
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "e-timeoffset",
      troybinType: "ONE_DOUBLE",
      binGroup: timeBeforeFirstEmission,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "e-trail-cutoff",
      troybinType: "ONE_DOUBLE",
      binGroup: mCutoff,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: "",
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
      troybinName: "e-uvoffset-mult",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "embed = ValueVector2",
      binPropertyName: "constantValue",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "e-uvoffset-multYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
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
  fValues: [
    {
      troybinName: "f-accel",
      troybinType: "THREE_DOUBLE",
      binGroup: acceleration,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "f-direction",
      troybinType: "THREE_DOUBLE",
      binGroup: direction,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "f-drag",
      troybinType: "ONE_DOUBLE",
      binGroup: strength,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "f-localspace",
      troybinType: "INT/BOOLEAN",
      binGroup: isLocalSpace,
      binGroupType: "bool",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "f-pos",
      troybinType: "THREE_DOUBLE",
      binGroup: position,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "f-radius",
      troybinType: "ONE_DOUBLE",
      binGroup: radius,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "field-accel-1",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldAccelName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "field-attract-1",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldAttractName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "field-drag-1",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldDragName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "field-noise-1",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldNoiseName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "field-orbit-1",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldOrbitName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "flag-disable-z",
      troybinType: "ONE_DOUBLE",
      binGroup: miscRenderFlags,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: "",
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
      troybinName: "p-alphaslicerange",
      troybinType: "ONE_DOUBLE",
      binGroup: sliceTechniqueRange,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: "",
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
      defaultValue: 0,
      simpleValue: ["TWO_DOUBLE", "vec2", "", particleBind]
    },
    {
      troybinName: "p-bindtoemitter1",
      troybinType: "TWO_DOUBLE",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-bindtoemitter2",
      troybinType: "TWO_DOUBLE",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-bindtoemitter3",
      troybinType: "TWO_DOUBLE",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-bindtoemitter4",
      troybinType: "TWO_DOUBLE",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-bindtoemitter5",
      troybinType: "TWO_DOUBLE",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-bindtoemitter6",
      troybinType: "TWO_DOUBLE",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-bindtoemitter7",
      troybinType: "TWO_DOUBLE",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-bindtoemitter8",
      troybinType: "TWO_DOUBLE",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-bindtoemitter9",
      troybinType: "TWO_DOUBLE",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-coloroffset",
      troybinType: "TWO_DOUBLE",
      binGroup: colorLookUpOffsets,
      binGroupType: "vec2",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: 0
    },
    {
      troybinName: "p-colorscale",
      troybinType: "ENSURE_TWO_DOUBLE",
      binGroup: colorLookUpScales,
      binGroupType: "vec2",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: 0
    },
    {
      troybinName: "p-colortype",
      troybinType: "TWO_DOUBLE_TO_XYZ",
      binGroup: colorLookUpType,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: 0
    },
    {
      troybinName: "p-distortion-mode",
      troybinType: "ONE_DOUBLE",
      binGroup: distortionMode,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-distortion-power",
      troybinType: "ONE_DOUBLE",
      binGroup: distortion,
      binGroupType: "f32",
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
      troybinName: "p-dragXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-dragZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-flexoffset",
      troybinType: "ONE_DOUBLE",
      binGroup: property_0x4ffce322, // eslint-disable-line
      binGroupType: "pointer = 0xb13097f0",
      binPropertyName: "scaleEmitOffsetByBoundObjectSize",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-flexscale",
      troybinType: "ONE_DOUBLE",
      binGroup: scaleBirthScaleByBoundObjectSize,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: "",
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
      binPropertyName: "timesTable1",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "probTableX1"
      ]
    },
    {
      troybinName: "p-life2",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "probTableX2"
      ]
    },
    {
      troybinName: "p-life3",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "probTableX3"
      ]
    },
    {
      troybinName: "p-life4",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "probTableX4"
      ]
    },
    {
      troybinName: "p-life5",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "probTableX5"
      ]
    },
    {
      troybinName: "p-life6",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "probTableX6"
      ]
    },
    {
      troybinName: "p-life7",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "probTableX7"
      ]
    },
    {
      troybinName: "p-life8",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "probTableX8"
      ]
    },
    {
      troybinName: "p-life9",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "probTableX9"
      ]
    },
    {
      troybinName: "p-lifeP1",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "timesTable1"
      ]
    },
    {
      troybinName: "p-lifeP2",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "timesTable2"
      ]
    },
    {
      troybinName: "p-lifeP3",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "timesTable3"
      ]
    },
    {
      troybinName: "p-lifeP4",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "timesTable4"
      ]
    },
    {
      troybinName: "p-lifeP5",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "timesTable5"
      ]
    },
    {
      troybinName: "p-lifeP6",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "timesTable6"
      ]
    },
    {
      troybinName: "p-lifeP7",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "timesTable7"
      ]
    },
    {
      troybinName: "p-lifeP8",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "timesTable8"
      ]
    },
    {
      troybinName: "p-lifeP9",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        particleLifetime,
        "timesTable9"
      ]
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
      troybinName: "p-normal-map",
      troybinType: "STRING_PATH",
      binGroup: normalMapTexture,
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
      troybinName: "p-offsetXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-offsetXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-offsetXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
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
      troybinName: "p-offsetYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-offsetYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-offsetYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
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
      troybinName: "p-offsetZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-offsetZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-offsetZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-offset1",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-offset2",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-offset3",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-offset4",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-offset5",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-offset6",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-offset7",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-offset8",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-offset9",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvel",
      troybinType: "THREE_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: "{ 0, 0, 0 }"
    },
    {
      troybinName: "p-orbitvelXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvelZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvel1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvel2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvel3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvel4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvel5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvel6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvel7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvel8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-orbitvel9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
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
      troybinName: "p-postoffsetXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-postoffsetZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthTranslation,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      defaultValue: undefined
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
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-quadrotXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
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
      troybinName: "p-quadrot1",
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
        birthRotation1,
        "probTableX1"
      ]
    },
    {
      troybinName: "p-quadrot2",
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
        birthRotation1,
        "probTableX2"
      ]
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
        birthRotation1,
        "probTableX1"
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
        birthRotation1,
        "probTableX2"
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
        birthRotation1,
        "probTableX3"
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
        birthRotation1,
        "probTableX4"
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
        birthRotation1,
        "probTableX5"
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
        birthRotation1,
        "probTableX6"
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
        birthRotation1,
        "probTableX7"
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
        birthRotation1,
        "probTableX8"
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
        birthRotation1,
        "probTableX9"
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
      troybinName: "p-rotvel1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvel2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvel3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvel4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvel5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvel6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvel7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvel8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvel9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-rotvelP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX1"
      ]
    },
    {
      troybinName: "p-rotvelP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX2"
      ]
    },
    {
      troybinName: "p-rotvelP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX3"
      ]
    },
    {
      troybinName: "p-rotvelP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX4"
      ]
    },
    {
      troybinName: "p-rotvelP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX5"
      ]
    },
    {
      troybinName: "p-rotvelP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX6"
      ]
    },
    {
      troybinName: "p-rotvelP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX7"
      ]
    },
    {
      troybinName: "p-rotvelP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX8"
      ]
    },
    {
      troybinName: "p-rotvelP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "f32",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX9"
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
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-scaleXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
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
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX1"
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
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX2"
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
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX3"
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
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX4"
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
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX5"
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
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX6"
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
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX7"
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
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX8"
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
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX9"
      ]
    },
    {
      troybinName: "p-scale1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "timesTable1"
      ]
    },
    {
      troybinName: "p-scale2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "timesTable2"
      ]
    },
    {
      troybinName: "p-scale3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "timesTable3"
      ]
    },
    {
      troybinName: "p-scale4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "timesTable4"
      ]
    },
    {
      troybinName: "p-scale5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "timesTable5"
      ]
    },
    {
      troybinName: "p-scale6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "timesTable6"
      ]
    },
    {
      troybinName: "p-scale7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "timesTable7"
      ]
    },
    {
      troybinName: "p-scale8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "timesTable8"
      ]
    },
    {
      troybinName: "p-scale9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined,
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "timesTable9"
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
      troybinName: "p-texdiv-mult",
      troybinType: "TWO_DOUBLE",
      binGroup: texDivMult,
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
      troybinName: "p-texture-mode",
      troybinType: "BOOLEAN/INT",
      binGroup: texAddressModeBase,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-texture-mode-mult",
      troybinType: "BOOLEAN/INT",
      binGroup: texAddressModeMult,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-texture-mult",
      troybinType: "STRING_PATH",
      binGroup: textureMult,
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
      binGroupType: "embed = ValueVector2",
      binPropertyName: "constantValue",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-clamp",
      troybinType: "INT/BOOLEAN",
      binGroup: uvScrollClamp,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: "",
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
      troybinName: "p-uvscroll-rgb-mult",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "embed = ValueVector2",
      binPropertyName: "constantValue",
      binPropertyType: "vec2",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-clamp-mult",
      troybinType: "INT/BOOLEAN",
      binGroup: uvScrollClampMult,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      defaultValue: undefined
    },
    {
      troybinName: "p-uvscroll-rgb-multYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
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
      troybinName: "p-worldaccel1",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccel2",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccel3",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccel4",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccel5",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccel6",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccel7",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccel8",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "p-worldaccel9",
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
      troybinType: "COLOR_DOUBLE",
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
      defaultValue: "{ 1, 1, 1 }",
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
        scale1,
        "timesTable1"
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
        scale1,
        "timesTable2"
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
        scale1,
        "timesTable3"
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
        scale1,
        "timesTable4"
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
        scale1,
        "timesTable5"
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
        scale1,
        "timesTable6"
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
        scale1,
        "timesTable7"
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
        scale1,
        "timesTable8"
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
        scale1,
        "timesTable9"
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
        scale1,
        "timesTable10"
      ]
    },
    {
      troybinName: "Particle-Drag",
      troybinType: "THREE_DOUBLE",
      binGroup: drag,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Drag1",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Drag2",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Drag3",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Drag4",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Drag5",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Drag6",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Drag7",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Drag8",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Drag9",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Velocity",
      troybinType: "THREE_DOUBLE",
      binGroup: velocity,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Velocity1",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Velocity2",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Velocity3",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Velocity4",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Velocity5",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Velocity6",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Velocity7",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Velocity8",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      defaultValue: undefined
    },
    {
      troybinName: "Particle-Velocity9",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      defaultValue: undefined
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
      troybinName: "build-up-time",
      troybinType: "ONE_DOUBLE",
      binGroup: buildUpTime,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "group-scale-cap",
      troybinType: "ONE_DOUBLE",
      binGroup: overrideScaleCap,
      binGroupType: "option[f32]",
      binPropertyName: "constantValue",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "group-vis",
      troybinType: "ONE_DOUBLE",
      binGroup: visibilityRadius,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
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
      troybinName: "GroupPartType",
      troybinType: "STRING_NO_PATH",
      binGroup: "",
      binGroupType: "string",
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
      troybinName: "ChildParticleName",
      troybinType: "STRING_NO_EXT",
      binGroup: childParticleSetDefinition,
      binGroupType: "embed = VfxChildParticleSetDefinitionData",
      binPropertyName: "effectKey",
      binPropertyType: "hash",
      defaultValue: undefined
    },
    {
      troybinName: "KeywordsExcluded",
      troybinType: "STRINGS_NO_PATH",
      binGroup: keywordsExcluded,
      binGroupType: "list[string]",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "KeywordsRequired",
      troybinType: "STRINGS_NO_PATH",
      binGroup: KeywordsRequired,
      binGroupType: "list[string]",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: undefined
    },
    {
      troybinName: "rendermode",
      troybinType: "BOOLEAN/INT",
      binGroup: blendMode,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: 0
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
      troybinName: "SoundOnCreate",
      troybinType: "STRING_NO_PATH",
      binGroup: soundOnCreateName,
      binGroupType: "string",
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
