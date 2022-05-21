import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import React, { Component } from "react";

import AccountCircle from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import BuildIcon from "@mui/icons-material/Build";
import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import InputIcon from "@mui/icons-material/Input";
import MenuIcon from "@mui/icons-material/Menu";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";

import Backdrop from "@mui/material/Backdrop";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

import AppBarComponent from "./components/AppBar";
import ConvertModal from "./components/Modals/Main";
import DialogComponent from "./components/Dialog";
import DrawerComponent from "./components/Drawer";
import FileList from "./components/FileList/Main";
import getSplashArt, { SplashArtAmount } from "./components/SplashArt/Main";
import MenuComponent from "./components/Menu";

import ConvertTroybin from "../TroybinConverter/Main";
import MigrateConvertedTroybin from "../TroybinMigrationTool/Main";

function getDataSource(files, filter, search) {
  const filterOptions = ["ALL", "CONV_TROYBIN", "MIG_BIN", "CONV_BIN"];
  const dataWithFilter = files.filter(
    file => file.type === filterOptions[filter] || filter === 0
  );

  if (search !== "") {
    return dataWithFilter.filter(file =>
      file.fileName.toLowerCase().includes(search.toLowerCase())
    );
  }

  return dataWithFilter;
}

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFile: undefined,
      defaultAssetsPath: "Data/Particles",
      defaultFilePath: "Data/Particles",
      dialogOpen: {
        action: "",
        open: false
      },
      drawerOpen: false,
      failedConverts: [],
      files: [],
      filter: 0,
      loading: false,
      namesOnly: false,
      search: "",
      selectedFiles: [],
      showMenu: {
        anchor: null,
        menu: ""
      },
      showModal: "convert",
      updateFileTypes: true
    };
  }

  handleChangeDialogAccept(action, value) {
    this.setState({ dialogOpen: value, loading: true }, () => {
      switch (action) {
        case "auto_convert":
          this.handleConvertFiles();
          break;
        case "convert":
          this.handleConvertFiles();
          break;
        case "download":
          this.handleDownloadFiles();
          break;
        case "delete":
          this.handleDeleteFiles();
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

  handleChangeDrawer(value) {
    this.setState({ drawerOpen: value });
    this.handleChangeShowMenu({ anchor: null, menu: "" });
  }

  handleChangeFileActive(file) {
    this.setState({ activeFile: file });
  }

  handleChangeFilesSelected(fileID, selectedFileIndex) {
    const { selectedFiles } = this.state;
    const dataSource = [...selectedFiles];

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

  handleChangeFilter(filter) {
    this.setState({ filter, selectedFiles: [] });
  }

  handleChangeSearch(searchNew) {
    const { search } = this.state;

    if (searchNew !== search) {
      this.setState({ search: searchNew, selectedFiles: [] });
    }
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

  handleConvertFiles() {
    const {
      defaultAssetsPath,
      defaultFilePath,
      files,
      namesOnly,
      selectedFiles,
      updateFileTypes
    } = this.state;

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
                defaultAssetsPath,
                defaultFilePath,
                file,
                namesOnly,
                updateFileTypes
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
        selectedFiles: []
      },
      () => {
        if (oldSelectedFiles.length === 1 && activeFile !== undefined) {
          this.setState({ activeFile });
        }
      }
    );
  }

  handleDeleteFiles() {
    const { files, selectedFiles } = this.state;

    const oldSelectedFiles = [...selectedFiles];
    const newFiles = [];

    for (let i = 0; i < files.length; i += 1) {
      let deleteFile = false;

      for (let j = 0; j < oldSelectedFiles.length; j += 1) {
        if (files[i].id === oldSelectedFiles[j]) {
          deleteFile = true;
        }
      }

      if (deleteFile === false) {
        newFiles.push(files[i]);
      }
    }

    this.setState({ files: newFiles, selectedFiles: [] });
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

            this.handleChangeFilter(0);
          }
        } else {
          console.log("File Type is unknown");
        }
      };
    }
  };

  render() {
    const {
      activeFile,
      dialogOpen,
      drawerOpen,
      files,
      filter,
      loading,
      search,
      selectedFiles,
      showMenu,
      showModal
    } = this.state;
    const { lightMode } = this.props;
    const dataSource = getDataSource(files, filter, search);

    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBarComponent
            changeShowMenu={event => this.handleChangeShowMenu(event)}
            clickThemeButton={() => this.handleChangeTheme()}
            menuDisabled={false}
            lightMode={lightMode}
            showMenu={showMenu}
          />
        </Box>
        <Container maxWidth="xl" sx={{ mb: 28, mt: 9 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={6} sx={{ maxHeight: 720 }}>
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
                      height: 100 / 720,
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
                        alignItems: "center",
                        height: "40%",
                        maxWidth: 380,
                        color: "text.secondary",
                        "& svg": {
                          m: 1.5
                        },
                        "& hr": {
                          mx: 0.5
                        }
                      }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        sx={{
                          width: "100%"
                        }}
                      >
                        <Box sx={{ width: "20%" }}>
                          <Tooltip title="Add" arrow placement="top">
                            <IconButton
                              variant="contained"
                              component="label"
                              size="small"
                              color="inherit"
                            >
                              <input
                                disabled={files.length === 20}
                                type="file"
                                accept=".txt, .troybin"
                                multiple
                                onChange={e =>
                                  this.handleLoadFiles(e.target.files)
                                }
                                hidden
                              />
                              <AddIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                        <Box sx={{ width: "60%" }} />
                        <Box sx={{ width: "20%" }}>
                          <Tooltip title="Actions" arrow placement="top">
                            <span>
                              <MenuComponent
                                changeShowMenu={e =>
                                  this.handleChangeShowMenu(e)
                                }
                                menuDisabled={selectedFiles.length === 0}
                                menuSettings={{
                                  menu: "List",
                                  options: [
                                    {
                                      disabled: selectedFiles.length === 0,
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
                                      disabled: selectedFiles.length === 0,
                                      icon: <AutoFixHighIcon />,
                                      onClickFunc: () =>
                                        this.handleChangeDialogVisible({
                                          action: "convert",
                                          open: true
                                        }),
                                      order: 2,
                                      text: "Convert"
                                    },
                                    {
                                      disabled: selectedFiles.length === 0,
                                      icon: <BuildIcon />,
                                      onClickFunc: () =>
                                        this.handleChangeDrawer(true, 1),
                                      order: 3,
                                      text: "Apply Bin Fixes"
                                    },
                                    {
                                      disabled: selectedFiles.length <= 1,
                                      icon: <CompareArrowsIcon />,
                                      onClickFunc: () =>
                                        this.handleChangeDrawer(true, 1),
                                      order: 4,
                                      text: "Combine"
                                    },
                                    {
                                      disabled: selectedFiles.length === 0,
                                      icon: <DeleteIcon />,
                                      onClickFunc: () =>
                                        this.handleChangeDialogVisible({
                                          action: "delete",
                                          open: true
                                        }),
                                      order: 6,
                                      text: "Delete"
                                    }
                                  ]
                                }}
                                showMenu={showMenu}
                              />
                            </span>
                          </Tooltip>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      height: 620 / 720,
                      width: "100%",
                      maxHeight: 620
                    }}
                  >
                    <FileList
                      clickFile={(id, selected) =>
                        this.handleChangeFilesSelected(id, selected)
                      }
                      clickFileActive={fileEntry =>
                        this.handleChangeFileActive(fileEntry)
                      }
                      dataSource={dataSource}
                      filesLength={files.length}
                      filter={filter}
                      loadFile={filesToLoad =>
                        this.handleLoadFiles(filesToLoad)
                      }
                      selectAll={() => this.handleChangeFilesSelectedAll()}
                      selectedFiles={selectedFiles}
                    />
                    <Divider />
                    <BottomNavigation
                      disabled
                      showLabels
                      value={filter}
                      onChange={(event, newValue) =>
                        this.handleChangeFilter(newValue)
                      }
                      sx={{ width: "100%" }}
                    >
                      <Tooltip title="All" arrow>
                        <BottomNavigationAction
                          label="All"
                          sx={{
                            minWidth: "10px",
                            overflowX: "hidden"
                          }}
                        />
                      </Tooltip>
                      <Tooltip title="Troybin (Converted)" arrow>
                        <BottomNavigationAction
                          label="Troybin (Converted)"
                          sx={{
                            minWidth: "10px",
                            overflowX: "hidden"
                          }}
                        />
                      </Tooltip>
                      <Tooltip title="Bin (Migrated)" arrow>
                        <BottomNavigationAction
                          label="Bin (Migrated)"
                          sx={{
                            minWidth: "10px",
                            overflowX: "hidden"
                          }}
                        />
                      </Tooltip>
                      <Tooltip title="Bin (Converted)" arrow>
                        <BottomNavigationAction
                          label="Bin (Converted)"
                          sx={{
                            minWidth: "10px",
                            overflowX: "hidden"
                          }}
                        />
                      </Tooltip>
                    </BottomNavigation>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={9}>
                <Card sx={{ display: "flex", flexDirection: "column" }}>
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
                                  disabled: false,
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
                                  text: "Show Content (new Tab)"
                                },
                                {
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
                                  order: 2,
                                  text: "Download"
                                },
                                {
                                  disabled: activeFile?.type === "CONV_BIN",
                                  icon: <AutoFixHighIcon />,
                                  onClickFunc: () => {
                                    this.setState(
                                      {
                                        selectedFiles: [activeFile.id]
                                      },
                                      () =>
                                        this.handleChangeDialogVisible({
                                          action: "convert",
                                          open: true
                                        })
                                    );
                                  },
                                  order: 3,
                                  text: "Convert"
                                },
                                {
                                  disabled: activeFile?.type === "CONV_TROYBIN",
                                  icon: <BuildIcon />,
                                  onClickFunc: () => {
                                    this.setState(
                                      {
                                        selectedFiles: [activeFile.id]
                                      },
                                      () => this.handleChangeDrawer(true, 1)
                                    );
                                  },
                                  order: 4,
                                  text: "Apply Bin Fixes"
                                },
                                {
                                  disabled: false,
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
                                  order: 5,
                                  text: "Delete"
                                }
                              ]
                            }}
                            showMenu={showMenu}
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
                        ? `Type: ${activeFile.type}`
                        : "(Click the Arrow On A File From The List To See Its Content)"
                    }
                  />
                  <CardMedia
                    component="img"
                    sx={{
                      filter: "blur(6px)"
                    }}
                    image={getSplashArt(activeFile)}
                    alt="random"
                  />
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
        />
        <DrawerComponent
          handleChange={val => this.handleChangeDrawer(val)}
          isOpen={drawerOpen}
        />
        <ConvertModal
          loading={loading}
          showModal={showModal}
          onClose={val => this.handleChangeShowModal(val)}
        />
      </>
    );
  }
}

export default React.memo(MainPage);

MainPage.propTypes = {
  lightMode: PropTypes.bool.isRequired,
  handleChangeTheme: PropTypes.func.isRequired
};
