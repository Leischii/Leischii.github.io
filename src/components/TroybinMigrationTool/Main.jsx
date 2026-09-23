import CreateBin from "./MigrateSteps/CreateBin";
import ReadTroybin from "./MigrateSteps/ReadTroybin";
import UpdateEmitters from "./MigrateSteps/UpdateEmitters";
import WriteBin from "./MigrateSteps/WriteBin";

const MigrateConvertedTroybin = (
  defaultAssetsPath,
  defaultFilePath,
  file,
  namesOnly,
  splitKeywords,
  updateFileTypes
) => {
  const troybinStructure = ReadTroybin(
    defaultAssetsPath,
    namesOnly,
    file.content,
    file.fileName,
    updateFileTypes
  );

  const { updatedEmitters, keywords } = UpdateEmitters(
    troybinStructure.emitters,
    splitKeywords
  );

  const updatedTroybin = {
    emitters: updatedEmitters,
    fileName: troybinStructure.fileName,
    system: troybinStructure.system,
    unknown: troybinStructure.unknown
  };

  const { binStructures, unknowns } = CreateBin(
    updatedTroybin,
    defaultFilePath,
    keywords
  );

  const finalBin = WriteBin(binStructures, defaultFilePath, unknowns);

  return finalBin;
};

export default MigrateConvertedTroybin;
