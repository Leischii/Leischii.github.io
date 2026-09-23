import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import React, { Component } from "react";

import AddIcon from "@mui/icons-material/Add";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import BuildIcon from "@mui/icons-material/Build";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import SearchIcon from "@mui/icons-material/Search";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

import AppBarComponent from "./components/AppBar";
import ConvertModal from "./components/Modals/Main";
import CardMediaComponent from "./components/CardMedia";
import DialogComponent from "./components/Dialog";
import DrawerComponent from "./components/Drawer";
import FileList from "./components/FileList/Main";
import getSplashArt, { SplashArtAmount } from "./components/SplashArt/Main";
import MenuComponent from "./components/Menu";

import BinFileReader from "../BinFileReader/Main";
import ConvertTroybin from "../TroybinConverter/Main";
import MigrateConvertedTroybin from "../TroybinMigrationTool/Main";
import AboutModal from "./components/Modals/About";
import ChangelogModal from "./components/Modals/Changelog";

function getButtonsDisabled(selectedFilesFull) {
  let hasTroybins = false;
  let hasMigratedTroybins = false;
  let hasBins = false;

  for (let i = 0; i < selectedFilesFull.length; i += 1) {
    const file = selectedFilesFull[i];

    switch (file.type) {
      case "CONV_TROYBIN":
        hasTroybins = true;
        break;
      case "MIG_BIN":
        hasMigratedTroybins = true;
        break;
      case "CONV_BIN":
        hasBins = true;
        break;
      default:
        break;
    }
  }

  const result = {
    hasTroybins,
    hasMigratedTroybins,
    hasBins,
    amount: selectedFilesFull.length
  };

  return result;
}

function getDataSource(files, filter, search) {
  const dataWithFilter = files.filter(file => filter[file.type]);

  if (search !== "") {
    return dataWithFilter.filter(file =>
      file.fileName.toLowerCase().includes(search.toLowerCase())
    );
  }

  return dataWithFilter;
}

function getSelectedFiles(files, selectedFiles) {
  const selectedFilesFull = [];

  for (let i = 0; i < files.length; i += 1) {
    for (let j = 0; j < selectedFiles.length; j += 1) {
      if (files[i].id === selectedFiles[j]) {
        selectedFilesFull.push(files[i]);
      }
    }
  }

  return selectedFilesFull;
}

function getTypeName(type) {
  switch (type) {
    case "TROYBIN":
      return "Troybin";
    case "CONV_TROYBIN":
      return "Troybin (Converted)";
    case "MIG_BIN":
      return "Bin (Migrated)";
    case "CONV_BIN":
      return "Bin (Converted)";
    default:
      return "UNKNOWN";
  }
}

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFile: undefined,
      dialogOpen: {
        action: "",
        open: false
      },
      failedConverts: [],
      fileContentDirty: "",
      files: [],
      fileSettings: {},
      filter: {
        CONV_TROYBIN: true,
        MIG_BIN: true,
        CONV_BIN: true
      },
      fixesToApply: [],
      loading: false,
      search: "",
      selectedFiles: [],
      showEditor: false,
      showToolbarModal: "",
      showMenu: {
        anchor: null,
        menu: ""
      },
      showModal: ""
    };
  }

  handleChangeDialogAccept(action, value) {
    this.setState({ dialogOpen: value }, () => {
      switch (action) {
        case "download":
          this.handleDownloadFiles();
          break;
        case "delete":
          this.handleDeleteFiles();
          break;
        case "fix":
          this.handleFixFiles();
          break;
        case "save":
          this.handleSaveFile();
          break;
        default:
          break;
      }
    });
  }

  handleChangeDialogVisible(value) {
    this.setState({ dialogOpen: value });
    this.handleChangeShowMenu({ anchor: null, menu: "" });
  }

  handleChangeDrawer() {
    this.setState({ failedConverts: [] });
  }

  handleChangeFileActive(file) {
    this.setState({ activeFile: file, showEditor: false });
  }

  handleChangeFilesSelected(e, fileID, selectedFileIndex) {
    const { selectedFiles } = this.state;
    const dataSource = [...selectedFiles];
    const event = e || window.event;

    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }

    if (selectedFileIndex === -1) {
      dataSource.push(fileID);
    } else {
      dataSource.splice(selectedFileIndex, 1);
    }
    this.setState({ selectedFiles: dataSource });
  }

  handleChangeFilesSelectedAll() {
    const { files, filter, search, selectedFiles } = this.state;
    const filteredFiles = getDataSource(files, filter, search);

    if (filteredFiles.length === selectedFiles.length) {
      this.setState({ selectedFiles: [] });
    } else {
      const result = [];

      for (let i = 0; i < filteredFiles.length; i += 1) {
        result.push(filteredFiles[i].id);
      }

      this.setState({ selectedFiles: result });
    }
  }

  handleChangeFilter(targetFilter) {
    const { filter } = this.state;
    const newFilter = { ...filter };
    newFilter[targetFilter] = !newFilter[targetFilter];

    this.setState({ filter: newFilter, selectedFiles: [] });
  }

  handleChangeLoading(val) {
    this.setState({ loading: val });
  }

  handleChangeSearch(searchNew) {
    const { search } = this.state;

    if (searchNew !== search) {
      this.setState({ search: searchNew, selectedFiles: [] });
    }
  }

  handleChangeSelectedFix(val) {
    this.setState({ fixesToApply: val });
  }

  handleChangeOpenToolbarModal(value) {
    this.setState({ showToolbarModal: value });
    this.handleChangeShowMenu({ anchor: null, menu: "" });
  }

  handleChangeShowMenu(event) {
    this.setState({ showMenu: event });
  }

  handleChangeShowModal(value) {
    this.setState({ showModal: value });
  }

  handleChangeTheme() {
    const { handleChangeTheme } = this.props;

    handleChangeTheme();
    this.handleChangeShowMenu({ anchor: null, menu: "" });
  }

  handleClickImage = value => {
    const { activeFile } = this.state;

    if (activeFile) {
      this.setState({
        fileContentDirty: activeFile.content,
        showEditor: value
      });
    }
  };

  handleFixFiles() {
    const { files, fixesToApply, selectedFiles } = this.state;
    const oldSelectedFiles = selectedFiles;
    const failedFiles = [];
    const filesNew = [];
    let activeFile;

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];

      if (file.type === "CONV_BIN") {
        let convertedEntry;

        for (let j = 0; j < oldSelectedFiles.length; j += 1) {
          if (file.id === oldSelectedFiles[j]) {
            file.fileName = files[i].fileName
              .replace("_Migrated", "")
              .replace("_Fixed", "");

            try {
              let fileContent = file.content;

              for (let k = 0; k < fixesToApply.length; k += 1) {
                const updatedBin = BinFileReader(fixesToApply[k], fileContent);

                fileContent = updatedBin.result;
              }

              convertedEntry = {
                id: uuid(),
                fileName: `${file.fileName}_Fixed`,
                content: fileContent,
                type: "CONV_BIN",
                besen: file.besen,
                originalFileID: file.id
              };

              activeFile = convertedEntry;
            } catch (err) {
              console.log(err);
              failedFiles.push({
                id: file.id,
                error: err,
                fileName: files[i].fileName,
                type: file.type
              });
            }
          }
        }

        if (convertedEntry !== undefined) {
          filesNew.push(convertedEntry);
        }
      }

      filesNew.push(file);
    }

    this.setState(
      {
        failedConverts: failedFiles,
        files: filesNew,
        selectedFiles: [],
        showModal: ""
      },
      () => {
        if (oldSelectedFiles.length === 1 && activeFile !== undefined) {
          this.setState({ activeFile, showEditor: false });
        }
      }
    );
  }

  handleCombineFiles() {
    /* const { files, selectedFiles } = this.state;
    const oldSelectedFiles = selectedFiles;
    const failedFiles = [];
    const filesNew = [];
    let activeFile;

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];

      if (file.type === "CONV_BIN") {
        let convertedEntry;

        for (let j = 0; j < oldSelectedFiles.length; j += 1) {
          if (file.id === oldSelectedFiles[j]) {
            file.fileName = files[i].fileName.replace("_Migrated", "");

            try {
              const test = BinFileReader("listFix", file);

              if (fileContentCombined !== -1) {
                convertedEntry = {
                  id: uuid(),
                  fileName: `${fileSettings.file.fileName}_Combined`,
                  content: fileContentCombined,
                  type: "CONV_BIN",
                  besen: file.besen,
                  originalFileID: file.id
                };
              }

              activeFile = convertedEntry;
            } catch (err) {
              console.log(err);
              failedFiles.push({
                id: file.id,
                error: err,
                fileName: files[i].fileName,
                type: file.type
              });
            }
          }
        }

        if (convertedEntry !== undefined) {
          filesNew.push(convertedEntry);
        }
      } else {
        failedFiles.push({
          id: file.id,
          error:
            "Target file must be a converted .bin file. Use ritobin to convert .bin files to .txt",
          fileName: file.fileName,
          type: file.type
        });
      }
    } */
    const { selectedFiles } = this.state;
    return selectedFiles;
  }

  handleConvertFiles() {
    const { files, fileSettings, selectedFiles } = this.state;
    const oldSelectedFiles = selectedFiles;
    const failedFiles = [];
    const filesNew = [];

    let activeFile;

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];

      let convertedEntry;
      let removeOriginal = false;

      for (let j = 0; j < oldSelectedFiles.length; j += 1) {
        if (file.id === oldSelectedFiles[j]) {
          if (file.type === "CONV_TROYBIN") {
            file.fileName = files[i].fileName.replace("_Converted", "");

            try {
              const fileContentConverted = MigrateConvertedTroybin(
                fileSettings.assetsPath,
                fileSettings.filePath,
                file,
                fileSettings.namesOnly,
                fileSettings.splitKeywords,
                fileSettings.updateFileTypes
              );

              if (fileContentConverted !== -1) {
                convertedEntry = {
                  id: uuid(),
                  fileName: `${file.fileName}_Migrated`,
                  content: fileContentConverted,
                  type: "MIG_BIN",
                  besen: file.besen,
                  originalFileID: file.id
                };
              }

              if (oldSelectedFiles.length === 1) {
                activeFile = convertedEntry;
              }
            } catch (err) {
              console.log(err);
              failedFiles.push({
                id: file.id,
                error: err,
                fileName: files[i].fileName,
                type: file.type
              });
            }
          } else if (file.type === "TROYBIN") {
            try {
              const fileContentConverted = ConvertTroybin(file.content);

              convertedEntry = {
                id: uuid(),
                fileName: `${file.fileName}_Converted`,
                content: fileContentConverted,
                type: "CONV_TROYBIN",
                besen: file.besen,
                originalFileID: file.id
              };
              removeOriginal = true;

              if (oldSelectedFiles.length === 1) {
                activeFile = convertedEntry;
              }
            } catch (err) {
              console.log(err);
              failedFiles.push({
                id: file.id,
                error: err,
                fileName: file.fileName,
                type: file.type
              });
            }
          } else {
            failedFiles.push({
              id: file.id,
              error: "File type can not be converted",
              fileName: file.fileName,
              type: file.type
            });
          }
        }
      }

      if (!removeOriginal) {
        filesNew.push(file);
      }

      if (convertedEntry !== undefined) {
        filesNew.push(convertedEntry);
      }
    }

    this.setState(
      {
        failedConverts: failedFiles,
        files: filesNew,
        fileSettings: {},
        loading: false,
        selectedFiles: [],
        showModal: ""
      },
      () => {
        if (oldSelectedFiles.length === 1 && activeFile !== undefined) {
          this.setState({ activeFile, showEditor: false });
        }
      }
    );
  }

  handleDeleteFiles() {
    const { activeFile, files, selectedFiles } = this.state;
    const oldSelectedFiles = [...selectedFiles];
    const newFiles = [];
    let hasActiveFile = false;

    for (let i = 0; i < files.length; i += 1) {
      let deleteFile = false;

      for (let j = 0; j < oldSelectedFiles.length; j += 1) {
        if (files[i].id === oldSelectedFiles[j]) {
          if (activeFile && files[i].id === activeFile.id) {
            hasActiveFile = true;
          }

          deleteFile = true;
        }
      }

      if (deleteFile === false) {
        newFiles.push(files[i]);
      }
    }

    this.setState({ files: newFiles, selectedFiles: [] });

    if (hasActiveFile) {
      this.setState({ activeFile: undefined, showEditor: false });
    }
  }

  handleDownloadFiles() {
    const { files, selectedFiles } = this.state;

    const oldSelectedFiles = [...selectedFiles];
    const downloadFiles = [];

    for (let i = 0; i < files.length; i += 1) {
      for (let j = 0; j < oldSelectedFiles.length; j += 1) {
        if (files[i].id === oldSelectedFiles[j]) {
          const fileToDownload = files[i];

          const blob = new Blob([fileToDownload.content], {
            type: "text/plain"
          });
          const downloadLink = URL.createObjectURL(blob);

          let link = document.createElement("a");
          link.href = downloadLink;
          link.download = `${fileToDownload.fileName}.${
            fileToDownload.type === "TROYBIN" ? "troybin" : "txt"
          }`;
          link.target = "_blank";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          link = null;

          downloadFiles.push(files[i]);
        }
      }
    }

    this.setState({ selectedFiles: [] });
  }

  handleLoadFiles = fileInput => {
    const { files } = this.state;
    const troybinFilesIDs = [];

    for (let i = 0; i < fileInput.length; i += 1) {
      const input = fileInput[i];
      const reader = new FileReader();

      let fileType = "";

      if (input.type === "text/plain") {
        fileType = "TXT";
        reader.readAsText(input);
      } else {
        fileType = "TROYBIN";
        reader.readAsArrayBuffer(input);
      }

      reader.onload = e => {
        const updatedFiles = files;
        const content = e.target.result;
        const id = uuid();
        const besen = Math.floor(Math.random() * SplashArtAmount);
        let fileName;
        let type;

        if (fileType === "TXT") {
          fileName = input.name.replace(".txt", "");

          if (content[0] === "[") {
            type = "CONV_TROYBIN";
          } else if (content[0] === '"') {
            type = "MIG_BIN";
          } else if (content[0] === "#") {
            type = "CONV_BIN";
          } else {
            type = "UNKNOWN_FILE_TYPE";
          }
        } else {
          fileName = input.name.replace(".troybin", "");
          type = "TROYBIN";

          troybinFilesIDs.push(id);
        }

        if (type !== "UNKNOWN_FILE_TYPE") {
          const file = {
            id,
            fileName,
            content,
            type,
            besen
          };

          updatedFiles.push(file);

          if (i === fileInput.length - 1 && troybinFilesIDs.length > 0) {
            this.setState(
              {
                files: updatedFiles,
                selectedFiles: troybinFilesIDs
              },
              () => this.handleConvertFiles()
            );
          } else {
            this.setState({
              files: updatedFiles
            });
          }

          if (fileInput.length === 1) {
            this.setState({
              activeFile: file,
              showEditor: false
            });
          }
        } else {
          console.log("File Type is unknown");
        }
      };
    }
  };

  handleSaveFile() {
    const { fileContentDirty, files, selectedFiles } = this.state;
    const fileToUpdate = selectedFiles[0];
    const filesNew = [];

    let activeFile;

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];

      if (file.id === fileToUpdate) {
        const newFile = file;
        newFile.content = fileContentDirty;
        activeFile = newFile;

        filesNew.push(newFile);
      } else {
        filesNew.push(file);
      }
    }

    this.setState({
      activeFile,
      showEditor: false,
      files: filesNew,
      loading: false,
      showModal: ""
    });
  }

  handleSaveDirty(event) {
    this.setState({ fileContentDirty: event.target.value });
  }

  handleStartConvert(settings) {
    this.setState(
      {
        fileSettings: settings,
        loading: true
      },
      () => this.handleConvertFiles()
    );
  }

  handleOpenNewTab() {
    const { files, selectedFiles } = this.state;
    const fileIndex = files.findIndex(file => file.id === selectedFiles[0]);

    if (fileIndex !== -1) {
      const blob = new Blob([files[fileIndex].content], { type: "text/plain" });
      const downloadLink = URL.createObjectURL(blob);

      window.open(downloadLink);
    }

    this.handleChangeShowMenu({ anchor: null, menu: "" });
  }

  render() {
    const {
      activeFile,
      dialogOpen,
      failedConverts,
      fileContentDirty,
      files,
      filter,
      loading,
      search,
      selectedFiles,
      showEditor,
      showToolbarModal,
      showMenu,
      showModal
    } = this.state;
    const { /* lightMode, */ theme } = this.props;
    const dataSource = getDataSource(files, filter, search);
    const selectedFilesFull = getSelectedFiles(files, selectedFiles);
    const selectedFilesInfo = getButtonsDisabled(selectedFilesFull);

    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBarComponent
            clickToolbarButton={val => this.handleChangeOpenToolbarModal(val)}
            showMenu={showToolbarModal}
          />
        </Box>
        <Container maxWidth="xl" sx={{ mb: 28, mt: 9 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={6} sx={{ maxHeight: 850 }}>
              <Grid item xs={3}>
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    height: "100%",
                    maxWidth: 380
                  }}
                >
                  <Box
                    sx={{
                      height: 100 / 850,
                      maxHeight: 100,
                      width: "100%"
                    }}
                  >
                    <Box
                      sx={{
                        height: "60%",
                        "& > :not(style)": { m: 1, mt: 0 }
                      }}
                    >
                      <Box
                        sx={{
                          alignItems: "flex-end",
                          display: "flex"
                        }}
                      >
                        <SearchIcon
                          sx={{ color: "action.active", mr: 1, my: 1.0 }}
                        />
                        <TextField
                          id="input-with-sx"
                          label="Search"
                          onChange={event =>
                            this.handleChangeSearch(event.target.value)
                          }
                          sx={{ width: "82%" }}
                          variant="standard"
                        />
                      </Box>
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        height: "40%",
                        maxWidth: 380,
                        color: "text.secondary",
                        "& svg": {
                          m: 1.5
                        },
                        "& hr": {
                          mx: 0.5
                        },
                        "& button": {
                          padding: 0
                        },
                        "& label": {
                          padding: 0
                        }
                      }}
                    >
                      <Tooltip title="Filters" arrow placement="top">
                        <span>
                          <MenuComponent
                            changeShowMenu={e => this.handleChangeShowMenu(e)}
                            menuSettings={{
                              menu: "filters",
                              options: [
                                {
                                  icon: filter.CONV_TROYBIN,
                                  onClickFunc: () =>
                                    this.handleChangeFilter("CONV_TROYBIN"),
                                  order: 1,
                                  text: "Troybin (Converted)"
                                },
                                {
                                  icon: filter.MIG_BIN,
                                  onClickFunc: () =>
                                    this.handleChangeFilter("MIG_BIN"),
                                  order: 2,
                                  text: "Bin (Migrated)"
                                },
                                {
                                  icon: filter.CONV_BIN,
                                  onClickFunc: () =>
                                    this.handleChangeFilter("CONV_BIN"),
                                  order: 3,
                                  text: "Bin (Converted)"
                                }
                              ]
                            }}
                            showMenu={showMenu}
                            icon={<FilterAltIcon />}
                          />
                        </span>
                      </Tooltip>
                      <Tooltip title="Add" arrow placement="top">
                        <IconButton
                          variant="contained"
                          component="label"
                          size="small"
                          color="inherit"
                          sx={{ marginLeft: "auto" }}
                        >
                          <input
                            type="file"
                            accept=".txt, .troybin"
                            multiple
                            onChange={e => this.handleLoadFiles(e.target.files)}
                            hidden
                          />
                          <AddIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Convert" arrow placement="top">
                        <span>
                          <IconButton
                            variant="contained"
                            component="label"
                            size="small"
                            color="inherit"
                            disabled={
                              selectedFilesInfo.amount === 0 ||
                              !selectedFilesInfo.hasTroybins
                            }
                            onClick={() =>
                              this.setState({
                                showModal: "convert",
                                showMenu: {
                                  anchor: null,
                                  menu: ""
                                }
                              })
                            }
                          >
                            <RotateRightIcon />
                          </IconButton>
                        </span>
                      </Tooltip>
                      <Tooltip title="Actions" arrow placement="top">
                        <span>
                          <MenuComponent
                            changeShowMenu={e => this.handleChangeShowMenu(e)}
                            menuDisabled={selectedFiles.length === 0}
                            menuSettings={{
                              menu: "actions",
                              options: [
                                {
                                  desc: "Download selected files",
                                  disabled: selectedFilesInfo.amount === 0,
                                  icon: <BrowserUpdatedIcon />,
                                  onClickFunc: () =>
                                    this.handleChangeDialogVisible({
                                      action: "download",
                                      open: true
                                    }),
                                  order: 1,
                                  text: "Download"
                                },
                                {
                                  desc:
                                    "Apply fixes to selected outdated files",
                                  disabled:
                                    selectedFilesInfo.amount === 0 ||
                                    selectedFilesInfo.hasBins === false,
                                  icon: <BuildIcon />,
                                  onClickFunc: () =>
                                    this.handleChangeDialogVisible({
                                      action: "fix",
                                      open: true
                                    }),
                                  order: 3,
                                  text: "Apply Bin Fixes"
                                },
                                {
                                  desc: "Combine selected files",
                                  disabled: true,
                                  icon: <CompareArrowsIcon />,
                                  onClickFunc: () =>
                                    this.handleChangeDialogVisible({
                                      action: "combine",
                                      open: true
                                    }),
                                  order: 4,
                                  text: "Combine"
                                },
                                {
                                  desc: "Delete selected files",
                                  disabled: selectedFilesInfo.amount === 0,
                                  icon: <DeleteIcon />,
                                  onClickFunc: () =>
                                    this.handleChangeDialogVisible({
                                      action: "delete",
                                      open: true
                                    }),
                                  order: 5,
                                  text: "Delete"
                                }
                              ]
                            }}
                            showMenu={showMenu}
                          />
                        </span>
                      </Tooltip>
                    </Box>
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      height: 750 / 850,
                      width: "100%",
                      maxHeight: 750
                    }}
                  >
                    <FileList
                      clickFile={(e, id, selected) =>
                        this.handleChangeFilesSelected(e, id, selected)
                      }
                      clickFileActive={fileEntry =>
                        this.handleChangeFileActive(fileEntry)
                      }
                      dataSource={dataSource}
                      filesLength={files.length}
                      loadFile={filesToLoad =>
                        this.handleLoadFiles(filesToLoad)
                      }
                      selectAll={() => this.handleChangeFilesSelectedAll()}
                      selectedFiles={selectedFiles}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={9}>
                <Card
                  sx={{
                    height: 850,
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <CardHeader
                    action={
                      <Tooltip title="Actions" arrow placement="top">
                        <span>
                          <MenuComponent
                            changeShowMenu={e => this.handleChangeShowMenu(e)}
                            menuDisabled={activeFile === undefined}
                            menuSettings={{
                              menu: "File",
                              options: [
                                {
                                  desc:
                                    "View content of selected file in new tab",
                                  disabled: !activeFile,
                                  icon: <OpenInNewIcon />,
                                  onClickFunc: () => {
                                    this.setState(
                                      {
                                        selectedFiles: [activeFile.id]
                                      },
                                      () => this.handleOpenNewTab()
                                    );
                                  },
                                  order: 1,
                                  text: "Show Content (New Tab)"
                                },
                                {
                                  desc: "Save changes made to selected file",
                                  disabled: true, // Old: !activeFile Bugged, changes are not applied correctly atm
                                  icon: <SaveAsIcon />,
                                  onClickFunc: () => {
                                    this.setState(
                                      {
                                        selectedFiles: [activeFile.id]
                                      },
                                      () =>
                                        this.handleChangeDialogVisible({
                                          action: "save",
                                          open: true
                                        })
                                    );
                                  },
                                  order: 2,
                                  text: "Save Changes"
                                },
                                {
                                  desc: "Download selected file",
                                  disabled: !activeFile,
                                  icon: <BrowserUpdatedIcon />,
                                  onClickFunc: () => {
                                    this.setState(
                                      {
                                        selectedFiles: [activeFile.id]
                                      },
                                      () =>
                                        this.handleChangeDialogVisible({
                                          action: "download",
                                          open: true
                                        })
                                    );
                                  },
                                  order: 3,
                                  text: "Download"
                                },
                                {
                                  desc:
                                    "Convert selected troybin particle to bin particle",
                                  disabled:
                                    !activeFile ||
                                    activeFile.type !== "CONV_TROYBIN",
                                  icon: <RotateRightIcon />,
                                  onClickFunc: () => {
                                    this.setState(
                                      {
                                        selectedFiles: [activeFile.id]
                                      },
                                      () =>
                                        this.setState({
                                          showModal: "convert",
                                          showMenu: {
                                            anchor: null,
                                            menu: ""
                                          }
                                        })
                                    );
                                  },
                                  order: 4,
                                  text: "Convert"
                                },
                                {
                                  desc:
                                    "Apply fixes to selected outdated bin file",
                                  disabled:
                                    !activeFile ||
                                    activeFile.type !== "CONV_BIN",
                                  icon: <BuildIcon />,
                                  onClickFunc: () => {
                                    this.setState(
                                      {
                                        selectedFiles: [activeFile.id]
                                      },
                                      () =>
                                        this.handleChangeDialogVisible({
                                          action: "fix",
                                          open: true
                                        })
                                    );
                                  },
                                  order: 5,
                                  text: "Apply Bin Fixes"
                                },
                                {
                                  desc: "Delete selected file",
                                  disabled: !activeFile,
                                  icon: <DeleteIcon />,
                                  onClickFunc: () => {
                                    this.setState(
                                      {
                                        selectedFiles: [activeFile.id]
                                      },
                                      () =>
                                        this.handleChangeDialogVisible({
                                          action: "delete",
                                          open: true
                                        })
                                    );
                                  },
                                  order: 6,
                                  text: "Delete"
                                }
                              ]
                            }}
                            showMenu={showMenu}
                            icon={undefined}
                          />
                        </span>
                      </Tooltip>
                    }
                    title={
                      activeFile
                        ? `File: ${activeFile.fileName}`
                        : "No File Selected"
                    }
                    subheader={
                      activeFile
                        ? `Type: ${getTypeName(activeFile.type)}`
                        : "(Click the Arrow On A File From The List To See Its Content)"
                    }
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: 0,
                      height: "100%",
                      overflow: "hidden"
                    }}
                  >
                    <CardMediaComponent
                      activeFile={activeFile}
                      fileContentDirty={fileContentDirty || ""}
                      handleClickImage={event => this.handleClickImage(event)}
                      handleSaveDirty={event => this.handleSaveDirty(event)}
                      image={getSplashArt(activeFile)}
                      showEditor={showEditor || false}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <DialogComponent
          amount={selectedFiles.length}
          control={dialogOpen}
          handleAccept={(action, val) =>
            this.handleChangeDialogAccept(action, val)
          }
          handleClose={val => this.handleChangeDialogVisible(val)}
          handleSelect={val => this.handleChangeSelectedFix(val)}
          theme={theme}
        />
        <DrawerComponent
          handleChange={() => this.handleChangeDrawer()}
          isOpen={failedConverts.length}
        />
        <ConvertModal
          startConverting={val => this.handleStartConvert(val)}
          loading={loading}
          selectedFiles={selectedFilesFull}
          showModal={showModal}
          onClose={val => this.handleChangeShowModal(val)}
        />
        <AboutModal
          onClose={val => this.handleChangeOpenToolbarModal(val)}
          open={showToolbarModal === "about"}
        />
        <ChangelogModal
          onClose={val => this.handleChangeOpenToolbarModal(val)}
          open={showToolbarModal === "changelog"}
        />
      </>
    );
  }
}

export default React.memo(MainPage);

MainPage.propTypes = {
  // lightMode: PropTypes.bool.isRequired,
  handleChangeTheme: PropTypes.func.isRequired,
  theme: PropTypes.any.isRequired // eslint-disable-line
};
