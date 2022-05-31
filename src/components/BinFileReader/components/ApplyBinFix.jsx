const listFix = [
  {
    type: "StaticMaterialDef",
    oldString: "samplerValues: list[embed]",
    newString: "samplerValues: list2[embed]"
  },
  {
    type: "StaticMaterialDef",
    oldString: "paramValues: list[embed]",
    newString: "paramValues: list2[embed]"
  },
  {
    type: "StaticMaterialDef",
    oldString: "switches: list[embed]",
    newString: "switches: list2[embed]"
  }
];

const updaterTypeFix = [
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u8 = 4",
    newString: "0x16860572: pointer = 0x3c38f0fa {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u32 = 4",
    newString: "0x16860572: pointer = 0x3c38f0fa {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u8 = 5",
    newString: "0x16860572: pointer = 0x6c816d62 {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u32 = 5",
    newString: "0x16860572: pointer = 0x6c816d62 {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u8 = 6",
    newString: "0x16860572: pointer = 0xee405aca {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u32 = 6",
    newString: "0x16860572: pointer = 0xee405aca {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u8 = 16",
    newString: "0x16860572: pointer = 0xbd71ac00 {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u32 = 16",
    newString: "0x16860572: pointer = 0xbd71ac00 {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u8 = 22",
    newString: "0x16860572: pointer = 0x4ccbdd5b {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u32 = 22",
    newString: "0x16860572: pointer = 0x4ccbdd5b {}"
  }
];

const getChangesEntries = value => {
  switch (value) {
    case "listFix":
      return listFix;
    case "updaterTypeFix":
      return updaterTypeFix;
    default:
      return value;
  }
};

const ApplyBinFix = (changesProps, content, metadata) => {
  const data = content.split("\r\n");
  const changes = getChangesEntries(changesProps);
  let amountChanges = 0;

  for (let i = 0; i < metadata.length; i += 1) {
    const metaDataEntry = metadata[i];

    for (let j = 0; j < changes.length; j += 1) {
      const changesEntry = changes[j];
      if (metaDataEntry.type === changesEntry.type) {
        for (let k = metaDataEntry.start; k <= metaDataEntry.end; k += 1) {
          const row = data[k];

          if (
            row.includes(changesEntry.oldString) &&
            !row.includes(changesEntry.newString)
          ) {
            data[k] = row.replace(
              changesEntry.oldString,
              changesEntry.newString
            );
            amountChanges += 1;
          }
        }
      }
    }
  }

  const result = data.join("\r\n");

  return { result, amountChanges };
};

export default ApplyBinFix;
