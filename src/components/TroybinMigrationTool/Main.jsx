import PropTypes from "prop-types";

import CreateBin from "./MigrateSteps/CreateBin";
import ReadTroybin from "./MigrateSteps/ReadTroybin";
import UpdateEmitters from "./MigrateSteps/UpdateEmitters";
import WriteBin from "./MigrateSteps/WriteBin";

const MigrateConvertedTroybin = (
  defaultAssetsPath,
  defaultFilePath,
  file,
  namesOnly,
  updateFileTypes
) => {
  const troybinStructure = ReadTroybin(
    defaultAssetsPath,
    namesOnly,
    file.content,
    file.fileName,
    updateFileTypes
  );

  const updatedEmitter = UpdateEmitters(troybinStructure.emitters);
  const updatedTroybin = {
    emitters: updatedEmitter,
    fileName: troybinStructure.fileName,
    system: troybinStructure.system,
    unknown: troybinStructure.unknown
  };

  const binStructure = CreateBin(updatedTroybin, defaultFilePath);

  const finalBin = WriteBin(binStructure, defaultFilePath);

  return finalBin;
};

export default MigrateConvertedTroybin;

MigrateConvertedTroybin.propTypes = {
  defaultAssetsPath: PropTypes.string.isRequired,
  defaultFilePath: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  namesOnly: PropTypes.bool.isRequired,
  updateFileTypes: PropTypes.bool.isRequired
};

/* export default class TroybinMigrationTool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultAssetsPath: "",
      defaultFilePath: "",
      namesOnly: false,
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

  getInputs() {
    const { defaultAssetsPath, defaultFilePath } = this.state;

    if (defaultAssetsPath === "") {
      this.setState({
        defaultAssetsPath: "ASSETS/Shared/Particles"
      });
    }

    if (defaultFilePath === "") {
      this.setState({
        defaultFilePath: "Shared/Particles"
      });
    }
  };

  async click(e) {
    e.preventDefault();
    try {
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
      defaultAssetsPath,
      defaultFilePath,
      namesOnly,
      updateFileTypes
    } = this.state;

    return (
      <div className="mb-5 mr-5 ml-5">
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
        </div>
      </div>
    );
  }
} */
