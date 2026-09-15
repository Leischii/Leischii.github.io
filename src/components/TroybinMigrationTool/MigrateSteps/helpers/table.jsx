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
  "timesTable9"
];
const timesTableColorEntries = [
  "timesTable1",
  "timesTable2",
  "timesTable3",
  "timesTable4",
  "timesTable5",
  "timesTable6",
  "timesTable7",
  "timesTable8",
  "timesTable9",
  "timesTable10",
  "timesTable11",
  "timesTable12",
  "timesTable13",
  "timesTable14",
  "timesTable15",
  "timesTable16",
  "timesTable17",
  "timesTable18",
  "timesTable19",
  "timesTable20",
  "timesTable21",
  "timesTable22",
  "timesTable23",
  "timesTable24"
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

const materialOverrideDefinitions = {
  name: "materialOverrideDefinitions",
  members: ["VfxMaterialOverrideDefinitionData"],
  structure: "",
  order: 89
};

const SpawnShape = {
  name: "SpawnShape",
  members: ["emitOffset", "emitRotationAngles", "emitRotationAxes"],
  structure: "",
  order: 50
};

const textureMultGroup = {
  name: "textureMult",
  members: [
    "textureMult",
    "texDivMult",
    "uvScaleMult",
    "texAddressModeMult",
    "0x33b8543e",
    "0x22c3cf3e",
    "uvScrollAlphaMult",
    "birthUvScrollRateMult",
    "0xdd36a38c",
    "birthUVOffsetMult",
    "birthUvRotateRateMult"
  ],
  structure: "",
  order: 223
};

const LegacySimple = {
  name: "LegacySimple",
  members: [
    "birthScale",
    "scale",
    "birthRotation",
    "birthRotationalVelocity",
    "particleBind",
    "scaleBias",
    "orientation"
  ],
  structure: "",
  order: 214
};

const primitiveArbitraryQuad = { // eslint-disable-line
  name: "primitiveArbitraryQuad",
  members: [],
  structure: "primitiveArbitraryQuad",
  order: 54
};

const primitiveArbitraryTrail = {
  name: "primitiveArbitraryTrail",
  members: ["mMode", "mCutoff", "mBirthTilingSize", "mSmoothingMode"],
  structure: "primitiveArbitraryTrail",
  order: 54
};

const primitiveAttachedMesh = {
  name: "primitiveAttachedMesh",
  members: ["mAnimationName", "mMesh", "mMeshName", "mMeshSkeletonName"],
  structure: "primitiveAttachedMesh",
  order: 54
};

const primitiveBeam = { // eslint-disable-line
  name: "primitiveBeam",
  members: ["mBeam", "mMesh", "mBirthTilingSize"],
  structure: "primitiveBeam",
  order: 54
};

const primitiveMesh = {
  name: "primitiveMesh",
  members: ["mAnimationName", "mMesh", "mMeshName", "mMeshSkeletonName"],
  structure: "primitiveMesh",
  order: 54
};

const primitiveNone = { // eslint-disable-line
  name: "primitiveNone",
  members: [],
  structure: "primitiveNone",
  order: 54
};

const primitivePlanarProjection = { // eslint-disable-line
  name: "primitivePlanarProjection",
  members: ["mProjection", "mYRange", "mFading"],
  structure: "primitivePlanarProjection",
  order: 54
};

const primitiveRay = { // eslint-disable-line
  name: "primitiveRay",
  members: [],
  structure: "primitiveRay",
  order: 54
};

const primitiveTrail = {
  name: "primitiveTrail",
  members: ["mMode", "mCutoff", "mBirthTilingSize", "mSmoothingMode"],
  structure: "primitiveTrail",
  order: 54
};

/*
Field-Definitions
*/
const fieldAccelerationDefinitions = {
  name: "fieldAccelerationDefinitions",
  members: ["isLocalSpace", "acceleration", "radius"],
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
Material-Definitions
*/
const VfxMaterialOverrideDefinitionData = {
  name: "VfxMaterialOverrideDefinitionData",
  members: [
    "priority",
    "subMeshName",
    "overrideBlendMode",
    "baseTexture",
    "transitionTexture",
    "transitionSample"
  ],
  structure: "VfxMaterialOverrideDefinitionData",
  order: 89.1,
  parent: materialOverrideDefinitions
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
const accelerationF = {
  name: "acceleration",
  members: [],
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 24.2,
  parent: [fieldAccelerationDefinitions, fieldAttractionDefinitions]
};

const acceleration = {
  name: "acceleration",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 46
};

const alphaRef = {
  name: "alphaRef",
  members: [],
  structure: "SimpleProperty",
  order: 76
};

const axisFracF = {
  name: "axisFraction",
  members: [],
  structure: "SimpleProperty",
  order: 24.5,
  parent: [fieldNoiseDefinitions]
};

const baseTexture = {
  name: "baseTexture",
  members: [],
  structure: "SimpleProperty",
  order: 89.4,
  parent: [VfxMaterialOverrideDefinitionData]
};

const bindWeight = {
  name: "bindWeight",
  members: createMembers([timesTableEntries]),
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 52
};

const birthAcceleration = {
  name: "birthAcceleration",
  members: createMembers([xTableEntries, yTableEntries, zTableEntries]),
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 45
};

const birthColor = {
  name: "birthColor",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    aTableEntries,
    timesTableColorEntries
  ]),
  propertyType: "ValueColor",
  structure: "SimpleObjectVariableProperty",
  order: 68
};

const birthDrag = {
  name: "birthDrag",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
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
  name: "birthRotation",
  members: createMembers([timesTableEntries]),
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 232,
  parent: LegacySimple
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
  order: 93
};

const birthRotationalVelocity1 = {
  name: "birthRotationalVelocity",
  members: createMembers([timesTableEntries]),
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 235,
  parent: LegacySimple
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
  name: "birthScale",
  members: createMembers([timesTableEntries, timesSimpleTableEntries]),
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 230,
  parent: LegacySimple
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
  order: 223.9,
  parent: textureMultGroup
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
  order: 223.8,
  parent: textureMultGroup
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
  order: 306
};

const childParticleSetDefinition = {
  name: "childParticleSetDefinition",
  members: [],
  structure: "ChildParticleProperty",
  order: 23
};

const color = {
  name: "Color",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    aTableEntries,
    timesTableColorEntries
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

const depthBiasFactors = { // eslint-disable-line
  name: "depthBiasFactors",
  members: [],
  structure: "SimpleProperty",
  order: 78
};

const direction = {
  name: "direction",
  members: [],
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 24.2,
  parent: [fieldOrbitalDefinitions]
};

const directionVelocityMinScale = {
  name: "directionVelocityMinScale",
  members: [],
  structure: "SimpleProperty",
  order: 92
};

const directionVelocityScale = {
  name: "directionVelocityScale",
  members: [],
  structure: "SimpleProperty",
  order: 91
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
  order: 48
};

const emissionMeshName = {
  name: "emissionMeshName",
  members: [],
  structure: "SimpleProperty",
  order: 53.2
};

const emissionMeshScale = {
  name: "emissionMeshScale",
  members: [],
  structure: "SimpleProperty",
  order: 53.1
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
  parent: SpawnShape
};

const emitRotationAngles = {
  name: "emitRotationAngles",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  structure: "ShapeRotationAnglesProperty",
  order: 50.3,
  parent: SpawnShape
};

const emitRotationAxes = {
  name: "emitRotationAxes",
  members: ["e-rotation1-axis", "e-rotation2-axis", "e-rotation3-axis"],
  structure: "SimpleObjectProperty",
  order: 50.4,
  parent: SpawnShape
};

const EmitterPosition = {
  name: "EmitterPosition",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 50.1
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

const flags = {
  name: "flags",
  members: [
    "KeepOrientationAfterSpellCast",
    "SimulateEveryFrame",
    "SoundsPlayWhileOffScreen",
    "SoundEndsOnEmitterEnd",
    "SimulateOncePerFrame",
    "PersistThruRevive",
    "PersistThruDeath",
    "SimulateWhileOffScreen"
  ],
  structure: "SimpleProperty",
  order: 307
};

const frameRate = {
  name: "frameRate",
  members: [],
  structure: "SimpleProperty",
  order: 204
};

const frequencyF = {
  name: "frequency",
  members: [],
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 24.3,
  parent: [fieldNoiseDefinitions]
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
  order: 18
};

const mAnimationName = {
  name: "mAnimationName",
  members: [],
  structure: "SimpleProperty",
  order: 54.3,
  parent: [primitiveMesh, primitiveAttachedMesh]
};

const mBirthTilingSize = {
  name: "mBirthTilingSize",
  members: createMembers([
    xTableEntries,
    yTableEntries,
    zTableEntries,
    timesTableEntries
  ]),
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 54.3,
  parent: [primitiveArbitraryTrail, primitiveTrail, primitiveBeam]
};

const mCutoff = {
  name: "mCutoff",
  members: [],
  structure: "SimpleProperty",
  order: 54.2,
  parent: [primitiveArbitraryTrail, primitiveTrail]
};

const mFading = {
  name: "mFading",
  members: [],
  structure: "SimpleProperty",
  order: 54.2,
  parent: [primitivePlanarProjection]
};

const mYRange = {
  name: "mYRange",
  members: [],
  structure: "SimpleProperty",
  order: 54.1,
  parent: [primitivePlanarProjection]
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
  order: 54.1,
  parent: [primitiveMesh, primitiveAttachedMesh, primitiveBeam]
};

const mMeshName = {
  name: "mMeshName",
  members: [],
  structure: "SimpleProperty",
  order: 54.1,
  parent: [primitiveMesh, primitiveAttachedMesh]
};

const mMeshSkeletonName = {
  name: "mMeshSkeletonName",
  members: [],
  structure: "SimpleProperty",
  order: 54.2,
  parent: [primitiveMesh, primitiveAttachedMesh]
};

const mMode = {
  name: "mMode",
  members: [],
  structure: "SimpleProperty",
  order: 54.1,
  parent: [primitiveArbitraryTrail, primitiveTrail]
};

const modulationFactor = {
  name: "modulationFactor",
  members: [],
  structure: "SimpleProperty",
  order: 74
};

const mSmoothingMode = { // eslint-disable-line
  name: "mSmoothingMode",
  members: [],
  structure: "SimpleProperty",
  order: 54.4,
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
  order: 240,
  parent: LegacySimple
};

const overrideBlendMode = {
  name: "overrideBlendMode",
  members: [],
  structure: "SimpleProperty",
  order: 89.3,
  parent: [VfxMaterialOverrideDefinitionData]
};

const overrideScaleCap = {
  name: "overrideScaleCap",
  members: [],
  structure: "SimpleObjectProperty",
  order: 308
};

const particleBind = {
  name: "particleBind",
  members: [],
  structure: "SimpleProperty",
  order: 233,
  parent: LegacySimple
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

const period = {
  name: "period",
  members: [],
  structure: "SimpleObjectProperty",
  order: 16
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
  order: 54
};

const priority = {
  name: "priority",
  members: [],
  structure: "SimpleProperty",
  order: 89.1,
  parent: [VfxMaterialOverrideDefinitionData]
};

const FlexShapeDefinition = {
  name: "FlexShapeDefinition",
  members: [
    "scaleEmitOffsetByBoundObjectSize",
    "scaleBirthScaleByBoundObjectSize"
  ],
  structure: "MultConstantValueProperty",
  order: 53
};

const radius = {
  name: "radius",
  members: [],
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 24.2,
  parent: [
    fieldAccelerationDefinitions,
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

const reflectionDefinition = {
  name: "reflectionDefinition",
  members: ["fresnel", "fresnelColor", "reflectionMapTexture"],
  structure: "MultConstantValueProperty",
  order: 77
};

const rotation0 = {
  name: "rotation0",
  members: createMembers([timesTableEntries]),
  propertyType: "IntegratedValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 94
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
  name: "scale",
  members: createMembers([timesTableEntries]),
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 231,
  parent: LegacySimple
};

const scaleBias = {
  name: "scaleBias",
  members: [],
  structure: "SimpleProperty",
  order: 234
};

const scaleBias1 = {
  name: "scaleBias",
  members: [],
  structure: "SimpleProperty",
  order: 234,
  parent: LegacySimple
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
  order: 305
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
  order: 304
};

const spectatorPolicy = { // eslint-disable-line
  name: "spectatorPolicy",
  members: [],
  structure: "SimpleProperty",
  order: 32
};

const startFrame = {
  name: "startFrame",
  members: [],
  structure: "SimpleProperty",
  order: 211
};

const strength = {
  name: "strength",
  members: [],
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 24.3,
  parent: [fieldDragDefinitions]
};

const subMeshName = {
  name: "subMeshName",
  members: [],
  structure: "SimpleObjectProperty",
  order: 89.2,
  parent: [VfxMaterialOverrideDefinitionData]
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
  order: 223.4,
  parent: textureMultGroup
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
  order: 223.2,
  parent: textureMultGroup
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
  order: 223.1,
  parent: textureMultGroup
};

const timeActiveDuringPeriod = {
  name: "timeActiveDuringPeriod",
  members: [],
  structure: "SimpleObjectProperty",
  order: 17
};

const timeBeforeFirstEmission = {
  name: "timeBeforeFirstEmission",
  members: [],
  structure: "SimpleProperty",
  order: 3
};

const transitionSample = {
  name: "transitionSample",
  members: [],
  structure: "SimpleProperty",
  order: 89.6,
  parent: [VfxMaterialOverrideDefinitionData]
};

const transitionTexture = {
  name: "transitionTexture",
  members: [],
  structure: "SimpleProperty",
  order: 89.5,
  parent: [VfxMaterialOverrideDefinitionData]
};

const uvMode = {
  name: "uvMode",
  members: [],
  structure: "SimpleProperty",
  order: 201
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

const velocityDeltaF = {
  name: "velocityDelta",
  members: [],
  propertyType: "ValueFloat",
  structure: "SimpleObjectVariableProperty",
  order: 24.4,
  parent: [fieldNoiseDefinitions]
};

const velocity = {
  name: "velocity",
  members: createMembers([timesTableEntries]),
  propertyType: "ValueVector3",
  structure: "SimpleObjectVariableProperty",
  order: 47
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
  order: 49
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
      troybinName: "e-active",
      troybinType: "ONE_DOUBLE",
      binGroup: timeActiveDuringPeriod,
      binGroupType: "option[f32]",
      binPropertyName: "constantValue",
      binPropertyType: "",
      defaultValue: 0
    },
    {
      troybinName: "e-alpharef",
      troybinType: "BOOLEAN/INT",
      binGroup: alphaRef,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "e-color-modulate",
      troybinType: "FOUR_DOUBLE",
      binGroup: modulationFactor,
      binGroupType: "vec4",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "e-disabled",
      troybinType: "INT/BOOLEAN",
      binGroup: disabled,
      binGroupType: "bool",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "e-framerate",
      troybinType: "ONE_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-framerateP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-framerateP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-framerateP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-framerateP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-framerateP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-framerateP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-framerateP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-framerateP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-framerateP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthFrameRate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
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
      defaultValue: true
    },
    {
      troybinName: "e-period",
      troybinType: "ONE_DOUBLE",
      binGroup: period,
      binGroupType: "option[f32]",
      binPropertyName: "constantValue",
      binPropertyType: "",
      defaultValue: 0
    },
    {
      troybinName: "e-rate",
      troybinType: "ONE_DOUBLE",
      binGroup: rate,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rateP1",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rateP2",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rateP3",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rateP4",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rateP5",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rateP6",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rateP7",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rateP8",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rateP9",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rate1",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rate2",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rate3",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rate4",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rate5",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rate6",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rate7",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rate8",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rate9",
      troybinType: "TWO_DOUBLE",
      binGroup: rate,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "f32"
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
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaAP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaAP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaAP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA3",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaAP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA4",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaAP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA5",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaAP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA6",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaAP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA7",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaAP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA8",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgbaAP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA9",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rgba1",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec4"
    },
    {
      troybinName: "e-rgba2",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec4"
    },
    {
      troybinName: "e-rgba3",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec4"
    },
    {
      troybinName: "e-rgba4",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec4"
    },
    {
      troybinName: "e-rgba5",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec4"
    },
    {
      troybinName: "e-rgba6",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec4"
    },
    {
      troybinName: "e-rgba7",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec4"
    },
    {
      troybinName: "e-rgba8",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec4"
    },
    {
      troybinName: "e-rgba9",
      troybinType: "FIVE_DOUBLE",
      binGroup: birthColor,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec4"
    },
    {
      troybinName: "e-rotation1",
      troybinType: "ONE_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "list[embed] =",
      binPropertyName: "constantValue",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation1-axis",
      troybinType: "THREE_DOUBLE",
      binGroup: emitRotationAxes,
      binGroupType: "list[vec3]",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "e-rotation11",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation12",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation1P1",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation1P2",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation1P3",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation1P4",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation2",
      troybinType: "ONE_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "list[embed] =",
      binPropertyName: "constantValue",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation2-axis",
      troybinType: "THREE_DOUBLE",
      binGroup: emitRotationAxes,
      binGroupType: "list[vec3]",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "e-rotation2P1",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation2P2",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation21",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation22",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation3",
      troybinType: "ONE_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "list[embed] =",
      binPropertyName: "constantValue",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation3-axis",
      troybinType: "THREE_DOUBLE",
      binGroup: emitRotationAxes,
      binGroupType: "list[vec3]",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "e-rotation31",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation32",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation3P1",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-rotation3P2",
      troybinType: "TWO_DOUBLE",
      binGroup: emitRotationAngles,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-shape-name",
      troybinType: "STRING_PATH",
      binGroup: emissionMeshName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "e-shape-scale",
      troybinType: "ONE_DOUBLE",
      binGroup: emissionMeshScale,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "e-soft-in-depth",
      troybinType: "ONE_DOUBLE",
      binGroup: softParticleParams,
      binGroupType: "pointer = VfxSoftParticleDefinitionData",
      binPropertyName: "beginIn",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-soft-in-depth-delta",
      troybinType: "ONE_DOUBLE",
      binGroup: softParticleParams,
      binGroupType: "pointer = VfxSoftParticleDefinitionData",
      binPropertyName: "deltaIn",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-tilesize",
      troybinType: "THREE_DOUBLE",
      binGroup: mBirthTilingSize,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3"
    },
    {
      troybinName: "e-tilesizeXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: mBirthTilingSize,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-tilesizeXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: mBirthTilingSize,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-tilesizeYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: mBirthTilingSize,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-tilesizeYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: mBirthTilingSize,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-tilesizeZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: mBirthTilingSize,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-tilesizeZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: mBirthTilingSize,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-timeoffset",
      troybinType: "ONE_DOUBLE",
      binGroup: timeBeforeFirstEmission,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "e-trail-cutoff",
      troybinType: "ONE_DOUBLE",
      binGroup: mCutoff,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "e-uvoffset",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "embed = ValueVector2",
      binPropertyName: "constantValue",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffsetXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffsetYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-mult",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "embed = ValueVector2",
      binPropertyName: "constantValue",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset-multXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-multYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "e-uvoffset-mult1",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset-mult2",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset-mult3",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset-mult4",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset-mult5",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset-mult6",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset-mult7",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset-mult8",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset-mult9",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffsetMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffsetP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffsetP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffsetP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffsetP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffsetP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffsetP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffsetP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffsetP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffsetP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset1",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset2",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset3",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset4",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset5",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset6",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset7",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset8",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec2"
    },
    {
      troybinName: "e-uvoffset9",
      troybinType: "THREE_DOUBLE",
      binGroup: birthUVOffset,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec2"
    }
  ],
  fValues: [
    {
      troybinName: "f-accel",
      troybinType: "THREE_DOUBLE || ONE_DOUBLE",
      binGroup: accelerationF,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3"
    },
    {
      troybinName: "f-axisfrac",
      troybinType: "THREE_DOUBLE",
      binGroup: axisFracF,
      binGroupType: "vec3",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "f-direction",
      troybinType: "THREE_DOUBLE",
      binGroup: direction,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3"
    },
    {
      troybinName: "f-drag",
      troybinType: "ONE_DOUBLE",
      binGroup: strength,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32"
    },
    {
      troybinName: "f-localspace",
      troybinType: "INT/BOOLEAN",
      binGroup: isLocalSpace,
      binGroupType: "bool",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "f-period",
      troybinType: "ONE_DOUBLE",
      binGroup: frequencyF,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32"
    },
    {
      troybinName: "f-pos",
      troybinType: "THREE_DOUBLE",
      binGroup: position,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: "{ 0, 0, 0 }"
    },
    {
      troybinName: "f-radius",
      troybinType: "ONE_DOUBLE",
      binGroup: radius,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32"
    },
    {
      troybinName: "f-veldelta",
      troybinType: "ONE_DOUBLE",
      binGroup: velocityDeltaF,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32"
    },
    {
      troybinName: "field-accel-1",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldAccelName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-accel-2",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldAccelName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-accel-3",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldAccelName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-attract-1",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldAttractName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-attract-2",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldAttractName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-attract-3",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldAttractName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-drag-1",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldDragName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-drag-2",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldDragName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-drag-3",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldDragName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-noise-1",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldNoiseName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-noise-2",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldNoiseName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-noise-3",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldNoiseName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-orbit-1",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldOrbitName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-orbit-2",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldOrbitName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "field-orbit-3",
      troybinType: "STRING_NO_PATH",
      binGroup: fieldOrbitName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "flag-disable-z",
      troybinType: "ONE_DOUBLE",
      binGroup: miscRenderFlags,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: ""
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
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-accelZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-alphaslicerange",
      troybinType: "ONE_DOUBLE",
      binGroup: sliceTechniqueRange,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-animation",
      troybinType: "STRING_PATH",
      binGroup: mAnimationName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-backfaceon",
      troybinType: "INT/BOOLEAN",
      binGroup: disableBackfaceCull,
      binGroupType: "bool",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: false
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
      troybinType: "THREE_DOUBLE_TO_TWO",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-bindtoemitter2",
      troybinType: "THREE_DOUBLE_TO_TWO",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-bindtoemitter3",
      troybinType: "THREE_DOUBLE_TO_TWO",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-bindtoemitter4",
      troybinType: "THREE_DOUBLE_TO_TWO",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-bindtoemitter5",
      troybinType: "THREE_DOUBLE_TO_TWO",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-bindtoemitter6",
      troybinType: "THREE_DOUBLE_TO_TWO",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-bindtoemitter7",
      troybinType: "THREE_DOUBLE_TO_TWO",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-bindtoemitter8",
      troybinType: "THREE_DOUBLE_TO_TWO",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-bindtoemitter9",
      troybinType: "THREE_DOUBLE_TO_TWO",
      binGroup: bindWeight,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-coloroffset",
      troybinType: "TWO_DOUBLE",
      binGroup: colorLookUpOffsets,
      binGroupType: "vec2",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: "{ 0, 0 }"
    },
    {
      troybinName: "p-colorscale",
      troybinType: "ENSURE_TWO_DOUBLE",
      binGroup: colorLookUpScales,
      binGroupType: "vec2",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: "{ 1, 1 }"
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
      binPropertyType: ""
    },
    {
      troybinName: "p-distortion-power",
      troybinType: "ONE_DOUBLE",
      binGroup: distortion,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-drag",
      troybinType: "THREE_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-dragXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-dragZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-drag1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-drag2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-drag3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-drag4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-drag5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-drag6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-drag7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-drag8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-drag9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthDrag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-flexoffset",
      troybinType: "ONE_DOUBLE",
      binGroup: FlexShapeDefinition,
      binGroupType: "pointer = VfxFlexShapeDefinitionData",
      binPropertyName: "scaleEmitOffsetByBoundObjectSize",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-flexscale",
      troybinType: "ONE_DOUBLE",
      binGroup: FlexShapeDefinition,
      binGroupType: "pointer = VfxFlexShapeDefinitionData",
      binPropertyName: "scaleBirthScaleByBoundObjectSize",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-fresnel",
      troybinType: "ONE_DOUBLE",
      binGroup: reflectionDefinition,
      binGroupType: "pointer = VfxReflectionDefinitionData",
      binPropertyName: "fresnel",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-fresnel-color",
      troybinType: "FOUR_DOUBLE",
      binGroup: reflectionDefinition,
      binGroupType: "pointer = VfxReflectionDefinitionData",
      binPropertyName: "fresnelColor",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-frameRate",
      troybinType: "ONE_DOUBLE",
      binGroup: frameRate,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: 0
    },
    {
      troybinName: "p-life",
      troybinType: "ONE_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "embed = ValueFloat",
      binPropertyName: "constantValue",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-life1",
      troybinType: "TWO_DOUBLE",
      binGroup: particleLifetime,
      binGroupType: "pointer = VfxAnimatedFloatVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32",
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
      binPropertyType: ""
    },
    {
      troybinName: "p-mesh",
      troybinType: "STRING_PATH",
      binGroup: mMesh,
      binGroupType: "string",
      binPropertyName: "mSimpleMeshName",
      binPropertyType: ""
    },
    {
      troybinName: "p-meshtex",
      troybinType: "STRING_PATH",
      binGroup: texture,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-meshtex-mult",
      troybinType: "STRING_PATH",
      binGroup: textureMult,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-normal-map",
      troybinType: "STRING_PATH",
      binGroup: normalMapTexture,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-numframes",
      troybinType: "ONE_DOUBLE",
      binGroup: numFrames,
      binGroupType: "u16",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: 1
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
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offsetZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-offset1",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-offset2",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-offset3",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-offset4",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-offset5",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-offset6",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-offset7",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-offset8",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-offset9",
      troybinType: "FOUR_DOUBLE",
      binGroup: emitOffset,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3"
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
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvelZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-orbitvel1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-orbitvel2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-orbitvel3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-orbitvel4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-orbitvel5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-orbitvel6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-orbitvel7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-orbitvel8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-orbitvel9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthOrbitalVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-postoffset",
      troybinType: "THREE_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: "{ 0, 0, 0 }"
    },
    {
      troybinName: "p-postoffsetXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffsetZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-postoffset1",
      troybinType: "FOUR_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-postoffset2",
      troybinType: "FOUR_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-postoffset3",
      troybinType: "FOUR_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-postoffset4",
      troybinType: "FOUR_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-postoffset5",
      troybinType: "FOUR_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-postoffset6",
      troybinType: "FOUR_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-postoffset7",
      troybinType: "FOUR_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-postoffset8",
      troybinType: "FOUR_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-postoffset9",
      troybinType: "FOUR_DOUBLE",
      binGroup: EmitterPosition,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-projection-fading",
      troybinType: "ONE_DOUBLE",
      binGroup: mFading,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-projection-y-range",
      troybinType: "ONE_DOUBLE",
      binGroup: mYRange,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: ""
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
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableX1"
      ]
    },
    {
      troybinName: "p-quadrotXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableX2"
      ]
    },
    {
      troybinName: "p-quadrotXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableX3"
      ]
    },
    {
      troybinName: "p-quadrotXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableX4"
      ]
    },
    {
      troybinName: "p-quadrotXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableX5"
      ]
    },
    {
      troybinName: "p-quadrotXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableX6"
      ]
    },
    {
      troybinName: "p-quadrotXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableX7"
      ]
    },
    {
      troybinName: "p-quadrotXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableX8"
      ]
    },
    {
      troybinName: "p-quadrotXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableX9"
      ]
    },
    {
      troybinName: "p-quadrotYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableY1"
      ]
    },
    {
      troybinName: "p-quadrotYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableY2"
      ]
    },
    {
      troybinName: "p-quadrotYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableY3"
      ]
    },
    {
      troybinName: "p-quadrotYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableY4"
      ]
    },
    {
      troybinName: "p-quadrotYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableY5"
      ]
    },
    {
      troybinName: "p-quadrotYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableY6"
      ]
    },
    {
      troybinName: "p-quadrotYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableY7"
      ]
    },
    {
      troybinName: "p-quadrotYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableY8"
      ]
    },
    {
      troybinName: "p-quadrotYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableY9"
      ]
    },
    {
      troybinName: "p-quadrotZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableZ1"
      ]
    },
    {
      troybinName: "p-quadrotZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableZ2"
      ]
    },
    {
      troybinName: "p-quadrotZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableZ3"
      ]
    },
    {
      troybinName: "p-quadrotZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableZ4"
      ]
    },
    {
      troybinName: "p-quadrotZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableZ5"
      ]
    },
    {
      troybinName: "p-quadrotZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableZ6"
      ]
    },
    {
      troybinName: "p-quadrotZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableZ7"
      ]
    },
    {
      troybinName: "p-quadrotZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableZ8"
      ]
    },
    {
      troybinName: "p-quadrotZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotation1,
        "probTableZ9"
      ]
    },
    {
      troybinName: "p-quadrot1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
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
      binPropertyType: ""
    },
    {
      troybinName: "p-reflection-map",
      troybinType: "STRING_PATH",
      binGroup: reflectionDefinition,
      binGroupType: "pointer = VfxReflectionDefinitionData",
      binPropertyName: "reflectionMapTexture",
      binPropertyType: "string"
    },
    {
      troybinName: "p-rgba",
      troybinType: "STRING_PATH",
      binGroup: particleColorTexture,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
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
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX1"
      ]
    },
    {
      troybinName: "p-rotvelXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX2"
      ]
    },
    {
      troybinName: "p-rotvelXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX3"
      ]
    },
    {
      troybinName: "p-rotvelXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX4"
      ]
    },
    {
      troybinName: "p-rotvelXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX5"
      ]
    },
    {
      troybinName: "p-rotvelXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX6"
      ]
    },
    {
      troybinName: "p-rotvelXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX7"
      ]
    },
    {
      troybinName: "p-rotvelXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX8"
      ]
    },
    {
      troybinName: "p-rotvelXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableX9"
      ]
    },
    {
      troybinName: "p-rotvelYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableY1"
      ]
    },
    {
      troybinName: "p-rotvelYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableY2"
      ]
    },
    {
      troybinName: "p-rotvelYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableY3"
      ]
    },
    {
      troybinName: "p-rotvelYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableY4"
      ]
    },
    {
      troybinName: "p-rotvelYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableY5"
      ]
    },
    {
      troybinName: "p-rotvelYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableY6"
      ]
    },
    {
      troybinName: "p-rotvelYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableY7"
      ]
    },
    {
      troybinName: "p-rotvelYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableY8"
      ]
    },
    {
      troybinName: "p-rotvelYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableY9"
      ]
    },
    {
      troybinName: "p-rotvelZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableZ1"
      ]
    },
    {
      troybinName: "p-rotvelZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableZ2"
      ]
    },
    {
      troybinName: "p-rotvelZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableZ3"
      ]
    },
    {
      troybinName: "p-rotvelZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableZ4"
      ]
    },
    {
      troybinName: "p-rotvelZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableZ5"
      ]
    },
    {
      troybinName: "p-rotvelZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableZ6"
      ]
    },
    {
      troybinName: "p-rotvelZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableZ7"
      ]
    },
    {
      troybinName: "p-rotvelZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableZ8"
      ]
    },
    {
      troybinName: "p-rotvelZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "probTableZ9"
      ]
    },
    {
      troybinName: "p-rotvel1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "timesTable1"
      ]
    },
    {
      troybinName: "p-rotvel2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "timesTable2"
      ]
    },
    {
      troybinName: "p-rotvel3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "timesTable3"
      ]
    },
    {
      troybinName: "p-rotvel4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "timesTable4"
      ]
    },
    {
      troybinName: "p-rotvel5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "timesTable5"
      ]
    },
    {
      troybinName: "p-rotvel6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "timesTable6"
      ]
    },
    {
      troybinName: "p-rotvel7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "timesTable7"
      ]
    },
    {
      troybinName: "p-rotvel8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "timesTable8"
      ]
    },
    {
      troybinName: "p-rotvel9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthRotationalVelocity1,
        "timesTable9"
      ]
    },
    {
      troybinName: "p-rotvelP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthRotationalVelocity0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "f32",
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
      defaultValue: "{ 1, 1, 1 }",
      simpleValue: ["ONE_DOUBLE", "embed = ValueFloat", "f32", birthScale1]
    },
    {
      troybinName: "p-scalebias",
      troybinType: "TWO_DOUBLE",
      binGroup: scaleBias,
      binGroupType: "vec2",
      binPropertyName: "",
      binPropertyType: "",
      simpleValue: ["TWO_DOUBLE", "vec2", "", scaleBias1]
    },
    {
      troybinName: "p-scaleXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX1"
      ]
    },
    {
      troybinName: "p-scaleXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX2"
      ]
    },
    {
      troybinName: "p-scaleXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX3"
      ]
    },
    {
      troybinName: "p-scaleXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX4"
      ]
    },
    {
      troybinName: "p-scaleXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX5"
      ]
    },
    {
      troybinName: "p-scaleXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX6"
      ]
    },
    {
      troybinName: "p-scaleXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX7"
      ]
    },
    {
      troybinName: "p-scaleXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX8"
      ]
    },
    {
      troybinName: "p-scaleXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableX9"
      ]
    },
    {
      troybinName: "p-scaleYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableY1"
      ]
    },
    {
      troybinName: "p-scaleYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableY2"
      ]
    },
    {
      troybinName: "p-scaleYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableY3"
      ]
    },
    {
      troybinName: "p-scaleYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableY4"
      ]
    },
    {
      troybinName: "p-scaleYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableY5"
      ]
    },
    {
      troybinName: "p-scaleYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableY6"
      ]
    },
    {
      troybinName: "p-scaleYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableY7"
      ]
    },
    {
      troybinName: "p-scaleYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableY8"
      ]
    },
    {
      troybinName: "p-scaleYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableY9"
      ]
    },
    {
      troybinName: "p-scaleZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableZ1"
      ]
    },
    {
      troybinName: "p-scaleZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableZ2"
      ]
    },
    {
      troybinName: "p-scaleZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableZ3"
      ]
    },
    {
      troybinName: "p-scaleZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableZ4"
      ]
    },
    {
      troybinName: "p-scaleZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableZ5"
      ]
    },
    {
      troybinName: "p-scaleZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableZ6"
      ]
    },
    {
      troybinName: "p-scaleZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableZ7"
      ]
    },
    {
      troybinName: "p-scaleZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableZ8"
      ]
    },
    {
      troybinName: "p-scaleZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        birthScale1,
        "probTableZ9"
      ]
    },
    {
      troybinName: "p-scaleP1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthScale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
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
      binPropertyType: ""
    },
    {
      // Note: implement simpleEmitter logic
      troybinName: "p-simpleorient",
      troybinType: "ONE_DOUBLE",
      binGroup: orientation1,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-skeleton",
      troybinType: "STRING_PATH",
      binGroup: mMeshSkeletonName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-skin",
      troybinType: "STRING_PATH",
      binGroup: mMeshName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-startframe",
      troybinType: "ONE_DOUBLE",
      binGroup: startFrame,
      binGroupType: "u16",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: 0
    },
    {
      troybinName: "p-texdiv",
      troybinType: "TWO_DOUBLE",
      binGroup: texDiv,
      binGroupType: "vec2",
      binPropertyName: "",
      binPropertyType: "",
      defaultValue: "{ 1, 1 }"
    },
    {
      troybinName: "p-texdiv-mult",
      troybinType: "TWO_DOUBLE",
      binGroup: texDivMult,
      binGroupType: "vec2",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-texture",
      troybinType: "STRING_PATH",
      binGroup: texture,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-texture-mode",
      troybinType: "BOOLEAN/INT",
      binGroup: texAddressModeBase,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-texture-mode-mult",
      troybinType: "BOOLEAN/INT",
      binGroup: texAddressModeMult,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-texture-mult",
      troybinType: "STRING_PATH",
      binGroup: textureMult,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-trailmode",
      troybinType: "ONE_DOUBLE",
      binGroup: mMode,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-trans-sample",
      troybinType: "ONE_DOUBLE_255_TO_PERCENT",
      binGroup: transitionSample,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: ""
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
      troybinName: "p-uvscroll-no-alpha",
      troybinType: "SET_ONE_DOUBLE",
      binGroup: uvMode,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-uvscroll-rgb",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "embed = ValueVector2",
      binPropertyName: "constantValue",
      binPropertyType: "vec2"
    },
    {
      troybinName: "p-uvscroll-rgb-clamp",
      troybinType: "INT/BOOLEAN",
      binGroup: uvScrollClamp,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-uvscroll-rgbXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgbP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec2"
    },
    {
      troybinName: "p-uvscroll-rgbP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec2"
    },
    {
      troybinName: "p-uvscroll-rgbP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec2"
    },
    {
      troybinName: "p-uvscroll-rgbP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec2"
    },
    {
      troybinName: "p-uvscroll-rgbP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec2"
    },
    {
      troybinName: "p-uvscroll-rgbP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec2"
    },
    {
      troybinName: "p-uvscroll-rgbP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec2"
    },
    {
      troybinName: "p-uvscroll-rgbP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec2"
    },
    {
      troybinName: "p-uvscroll-rgbP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRate,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec2"
    },
    {
      troybinName: "p-uvscroll-rgb-clamp-mult",
      troybinType: "INT/BOOLEAN",
      binGroup: uvScrollClampMult,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-uvscroll-rgb-mult",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "embed = ValueVector2",
      binPropertyName: "constantValue",
      binPropertyType: "vec2"
    },
    {
      troybinName: "p-uvscroll-rgb-multXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-uvscroll-rgb-multYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthUvScrollRateMult,
      binGroupType: "pointer = VfxAnimatedVector2fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-vec-velocity-minscale",
      troybinType: "ONE_DOUBLE",
      binGroup: directionVelocityMinScale,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-vec-velocity-scale",
      troybinType: "ONE_DOUBLE",
      binGroup: directionVelocityScale,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-vecalign",
      troybinType: "INT/BOOLEAN",
      binGroup: isDirectionOriented,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: ""
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
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-velZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-vel1",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-vel2",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-vel3",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-vel4",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-vel5",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-vel6",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-vel7",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-vel8",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-vel9",
      troybinType: "FOUR_DOUBLE",
      binGroup: birthVelocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3"
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
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-worldaccelP1",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccelP2",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccelP3",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccelP4",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccelP5",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccelP6",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccelP7",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccelP8",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccelP9",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccel1",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccel2",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccel3",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccel4",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccel5",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccel6",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccel7",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccel8",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-worldaccel9",
      troybinType: "FOUR_DOUBLE",
      binGroup: worldAcceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-xquadrot",
      troybinType: "THREE_DOUBLE",
      binGroup: rotation0,
      binGroupType: "embed = IntegratedValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-xquadrot-on",
      troybinType: "INT/BOOLEAN",
      binGroup: isRotationEnabled,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "p-xquadrot1",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-xquadrot2",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-xquadrot3",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-xquadrot4",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-xquadrot5",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-xquadrot6",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-xquadrot7",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-xquadrot8",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3"
    },
    {
      troybinName: "p-xquadrot9",
      troybinType: "FOUR_DOUBLE",
      binGroup: rotation0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3"
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
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaAP1",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA1",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaAP2",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA2",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaAP3",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA3",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaAP4",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA4",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaAP5",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA5",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaAP6",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA6",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaAP7",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA7",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaAP8",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA8",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgbaAP9",
      troybinType: "TWO_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "probTableA9",
      binPropertyType: "f32"
    },
    {
      troybinName: "p-xrgba1",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba2",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba3",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba4",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba5",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba6",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba7",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba8",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba9",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba10",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable10",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba11",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable11",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba12",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable12",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba13",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable13",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba14",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable14",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba15",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable15",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba16",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable16",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba17",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable17",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba18",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable18",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba19",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable19",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba20",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable20",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba21",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable21",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba22",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable22",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba23",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable23",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba24",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable24",
      binPropertyType: "vec4"
    },
    {
      troybinName: "p-xrgba25",
      troybinType: "FIVE_DOUBLE",
      binGroup: color,
      binGroupType: "pointer = VfxAnimatedColorVariableData",
      binPropertyName: "timesTable25",
      binPropertyType: "vec4"
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
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableX1"
      ]
    },
    {
      troybinName: "p-xscaleXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableX2"
      ]
    },
    {
      troybinName: "p-xscaleXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableX3"
      ]
    },
    {
      troybinName: "p-xscaleXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableX4"
      ]
    },
    {
      troybinName: "p-xscaleXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableX5"
      ]
    },
    {
      troybinName: "p-xscaleXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableX6"
      ]
    },
    {
      troybinName: "p-xscaleXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableX7"
      ]
    },
    {
      troybinName: "p-xscaleXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableX8"
      ]
    },
    {
      troybinName: "p-xscaleXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableX9"
      ]
    },
    {
      troybinName: "p-xscaleYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableY1"
      ]
    },
    {
      troybinName: "p-xscaleYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableY2"
      ]
    },
    {
      troybinName: "p-xscaleYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableY3"
      ]
    },
    {
      troybinName: "p-xscaleYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableY4"
      ]
    },
    {
      troybinName: "p-xscaleYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableY5"
      ]
    },
    {
      troybinName: "p-xscaleYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableY6"
      ]
    },
    {
      troybinName: "p-xscaleYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableY7"
      ]
    },
    {
      troybinName: "p-xscaleYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableY8"
      ]
    },
    {
      troybinName: "p-xscaleYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableY9"
      ]
    },
    {
      troybinName: "p-xscaleZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableZ1"
      ]
    },
    {
      troybinName: "p-xscaleZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableZ2"
      ]
    },
    {
      troybinName: "p-xscaleZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableZ3"
      ]
    },
    {
      troybinName: "p-xscaleZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableZ4"
      ]
    },
    {
      troybinName: "p-xscaleZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableZ5"
      ]
    },
    {
      troybinName: "p-xscaleZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableZ6"
      ]
    },
    {
      troybinName: "p-xscaleZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableZ7"
      ]
    },
    {
      troybinName: "p-xscaleZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableZ8"
      ]
    },
    {
      troybinName: "p-xscaleZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32",
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "probTableZ9"
      ]
    },
    {
      troybinName: "p-xscale1",
      troybinType: "FOUR_DOUBLE",
      binGroup: scale0,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3",
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
      simpleValue: [
        "TWO_DOUBLE",
        "pointer = VfxAnimatedFloatVariableData",
        "f32",
        scale1,
        "timesTable10"
      ]
    },
    {
      troybinName: "Particle-Acceleration",
      troybinType: "THREE_DOUBLE",
      binGroup: acceleration,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-AccelerationXP1",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX1",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationXP2",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX2",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationXP3",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX3",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationXP4",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX4",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationXP5",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX5",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationXP6",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX6",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationXP7",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX7",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationXP8",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX8",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationXP9",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableX9",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationYP1",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY1",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationYP2",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY2",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationYP3",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY3",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationYP4",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY4",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationYP5",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY5",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationYP6",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY6",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationYP7",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY7",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationYP8",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY8",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationYP9",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableY9",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationZP1",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ1",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationZP2",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ2",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationZP3",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ3",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationZP4",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ4",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationZP5",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ5",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationZP6",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ6",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationZP7",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ7",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationZP8",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ8",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-AccelerationZP9",
      troybinType: "TWO_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "probTableZ9",
      binPropertyType: "f32"
    },
    {
      troybinName: "Particle-Acceleration1",
      troybinType: "FOUR_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Acceleration2",
      troybinType: "FOUR_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Acceleration3",
      troybinType: "FOUR_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Acceleration4",
      troybinType: "FOUR_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Acceleration5",
      troybinType: "FOUR_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Acceleration6",
      troybinType: "FOUR_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Acceleration7",
      troybinType: "FOUR_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Acceleration8",
      troybinType: "FOUR_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Acceleration9",
      troybinType: "FOUR_DOUBLE",
      binGroup: acceleration,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Drag",
      troybinType: "THREE_DOUBLE",
      binGroup: drag,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Drag1",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Drag2",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Drag3",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Drag4",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Drag5",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Drag6",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Drag7",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Drag8",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Drag9",
      troybinType: "FOUR_DOUBLE",
      binGroup: drag,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Velocity",
      troybinType: "THREE_DOUBLE",
      binGroup: velocity,
      binGroupType: "embed = ValueVector3",
      binPropertyName: "constantValue",
      binPropertyType: "vec3",
      defaultValue: "{ 0, 0, 0 }"
    },
    {
      troybinName: "Particle-Velocity1",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable1",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Velocity2",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable2",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Velocity3",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable3",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Velocity4",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable4",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Velocity5",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable5",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Velocity6",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable6",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Velocity7",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable7",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Velocity8",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable8",
      binPropertyType: "vec3"
    },
    {
      troybinName: "Particle-Velocity9",
      troybinType: "FOUR_DOUBLE",
      binGroup: velocity,
      binGroupType: "pointer = VfxAnimatedVector3fVariableData",
      binPropertyName: "timesTable9",
      binPropertyType: "vec3"
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
      binPropertyType: ""
    },
    {
      troybinName: "group-scale-cap",
      troybinType: "ONE_DOUBLE",
      binGroup: overrideScaleCap,
      binGroupType: "option[f32]",
      binPropertyName: "constantValue",
      binPropertyType: ""
    },
    {
      troybinName: "group-vis",
      troybinType: "ONE_DOUBLE",
      binGroup: visibilityRadius,
      binGroupType: "f32",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "GroupPart",
      troybinType: "STRING_NO_PATH",
      binGroup: emitterName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "GroupPartImportance",
      troybinType: "BOOLEAN/INT",
      binGroup: importance,
      binGroupType: "u8",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "GroupPartType",
      troybinType: "STRING_NO_PATH",
      binGroup: "",
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "KeepOrientationAfterSpellCast",
      troybinType: "ONE_DOUBLE",
      binGroup: flags,
      binGroupType: "u16",
      binPropertyName: "0",
      binPropertyType: "",
      defaultValue: 196
    },
    {
      troybinName: "PersistThruDeath",
      troybinType: "ONE_DOUBLE",
      binGroup: flags,
      binGroupType: "u16",
      binPropertyName: "6",
      binPropertyType: "",
      defaultValue: 196
    },
    {
      troybinName: "PersistThruRevive",
      troybinType: "ONE_DOUBLE",
      binGroup: flags,
      binGroupType: "u16",
      binPropertyName: "5",
      binPropertyType: "",
      defaultValue: 196
    },
    {
      troybinName: "SimulateEveryFrame",
      troybinType: "ONE_DOUBLE",
      binGroup: flags,
      binGroupType: "u16",
      binPropertyName: "1",
      binPropertyType: "",
      defaultValue: 196
    },
    {
      troybinName: "SimulateOncePerFrame",
      troybinType: "ONE_DOUBLE",
      binGroup: flags,
      binGroupType: "u16",
      binPropertyName: "4",
      binPropertyType: "",
      defaultValue: 196
    },
    {
      troybinName: "SimulateWhileOffScreen",
      troybinType: "ONE_DOUBLE",
      binGroup: flags,
      binGroupType: "u16",
      binPropertyName: "7",
      binPropertyType: "",
      defaultValue: 196
    },
    {
      troybinName: "SoundOnCreate",
      troybinType: "STRING_NO_PATH",
      binGroup: soundOnCreateDefault,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "SoundPersistent",
      troybinType: "STRING_NO_PATH",
      binGroup: soundPersistentDefault,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "SoundEndsOnEmitterEnd",
      troybinType: "ONE_DOUBLE",
      binGroup: flags,
      binGroupType: "u16",
      binPropertyName: "3",
      binPropertyType: "",
      defaultValue: 196
    },
    {
      troybinName: "SoundsPlayWhileOffScreen",
      troybinType: "ONE_DOUBLE",
      binGroup: flags,
      binGroupType: "u16",
      binPropertyName: "2",
      binPropertyType: "",
      defaultValue: 196
    }
  ],
  others: [
    {
      troybinName: "ChildParticleName",
      troybinType: "STRING_NO_EXT",
      binGroup: childParticleSetDefinition,
      binGroupType: "pointer = VfxChildParticleSetDefinitionData",
      binPropertyName: "effectKey",
      binPropertyType: "hash"
    },
    {
      troybinName: "KeywordsExcluded",
      troybinType: "STRINGS_NO_PATH",
      binGroup: keywordsExcluded,
      binGroupType: "list[string]",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "KeywordsRequired",
      troybinType: "STRINGS_NO_PATH",
      binGroup: KeywordsRequired,
      binGroupType: "list[string]",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "MaterialOverridePriority",
      troybinType: "ONE_DOUBLE",
      binGroup: priority,
      binGroupType: "i32",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "MaterialOverrideTexture",
      troybinType: "STRING_PATH",
      binGroup: baseTexture,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "MaterialOverrideTransMap",
      troybinType: "STRING_PATH",
      binGroup: transitionTexture,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
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
      binPropertyType: ""
    },
    {
      troybinName: "SoundOnCreate",
      troybinType: "STRING_NO_PATH",
      binGroup: soundOnCreateName,
      binGroupType: "string",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "uniformscale",
      troybinType: "INT/BOOLEAN",
      binGroup: isUniformScale,
      binGroupType: "flag",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "",
      troybinType: "STRINGS_NO_PATH",
      binGroup: subMeshName,
      binGroupType: "option[string]",
      binPropertyName: "",
      binPropertyType: ""
    },
    {
      troybinName: "",
      troybinType: "",
      binGroup: overrideBlendMode,
      binGroupType: "u32",
      binPropertyName: "",
      binPropertyType: ""
    }
  ]
};

export default Values;
