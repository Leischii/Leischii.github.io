import ApplyBinFix from "./components/ApplyBinFix";
import ReadBin from "./components/ReadBin";

const BinFileReader = (changes, file) => {
  const getBinMetaData = ReadBin(file.content);
  const applyFix = ApplyBinFix(changes, file.content, getBinMetaData);

  return applyFix;
};

export default BinFileReader;
