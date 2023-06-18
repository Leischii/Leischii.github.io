import React, { useState } from "react";
import PropTypes from "prop-types";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CloseIcon from "@mui/icons-material/Close";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const defaultSettings = {
  assetsPath: "Assets/Particles",
  filePath: "Shared/Particles",
  namesOnly: false,
  settingsPreset: "Default",
  updateFileTypes: true
};

const settingsPresets = [
  {
    value: "Default",
    label: "Default Settings"
  },
  {
    value: "Custom",
    label: "Custom Settings"
  }
];

const ConvertModal = ({
  loading,
  onClose,
  selectedFiles,
  showModal,
  startConverting
}) => {
  const [assetsPath, setAssetsPath] = useState(defaultSettings.assetsPath);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [filePath, setFilePath] = useState(defaultSettings.filePath);
  const [fileSettings, setFileSettings] = useState([]);
  const [namesOnly, setNamesOnly] = useState(defaultSettings.namesOnly);
  const [settingsPreset, setSettingsPreset] = useState("Custom");
  const [updateFileTypes, setUpdateFileTypes] = useState(
    defaultSettings.updateFileTypes
  );

  const handleSetDefaultValues = settings => {
    setAssetsPath(settings.assetsPath);
    setFilePath(settings.filePath);
    setNamesOnly(settings.namesOnly);
    setSettingsPreset(settings.settingsPreset);
    setUpdateFileTypes(settings.updateFileTypes);
  };

  const handleChangeInput = (event, type) => {
    switch (type) {
      case "assetsPath":
        setAssetsPath(event.target.value);
        break;
      case "filePath":
        setFilePath(event.target.value);
        break;
      case "namesOnly":
        setNamesOnly(event.target.checked);
        break;
      case "settingsPreset":
        if (event.target.value === "Default") {
          handleSetDefaultValues(defaultSettings);
        } else {
          setSettingsPreset(event.target.value);
        }
        break;
      case "updateFileTypes":
        setUpdateFileTypes(event.target.checked);
        break;
      default:
        break;
    }
  };

  const handleClickBack = () => {
    if (currentFileIndex > 0) {
      const newIndex = currentFileIndex - 1;
      const settings = fileSettings[newIndex];

      handleSetDefaultValues(settings);
      setCurrentFileIndex(newIndex);
    }
  };

  const handleClickNext = (isConvertStep, applyToAll = false) => {
    const newSettings = [...fileSettings];
    const isNewEntry =
      newSettings.findIndex(entry => entry.index === currentFileIndex) === -1;

    if (applyToAll) {
      for (let i = 0; i < selectedFiles.length; i += 1) {
        if (!newSettings[i]) {
          const currentSettingsEntry = {
            assetsPath,
            filePath,
            index: i,
            namesOnly,
            settingsPreset,
            updateFileTypes
          };

          newSettings.push(currentSettingsEntry);
        }
      }

      setFileSettings(newSettings);
    } else {
      const settingsEntry = {
        assetsPath,
        filePath,
        index: currentFileIndex,
        namesOnly,
        settingsPreset,
        updateFileTypes
      };

      if (isNewEntry) {
        newSettings.push(settingsEntry);
        setFileSettings(newSettings);
      } else {
        newSettings[currentFileIndex] = settingsEntry;
        setFileSettings(newSettings);
      }
    }

    if (isConvertStep) {
      startConverting(newSettings);

      handleSetDefaultValues(defaultSettings);
      setCurrentFileIndex(0);
    } else {
      const newIndex = currentFileIndex + 1;
      const nextSettings = newSettings[newIndex];

      if (nextSettings !== undefined) {
        handleSetDefaultValues(nextSettings);
      } else {
        handleSetDefaultValues(defaultSettings);
      }

      setCurrentFileIndex(newIndex);
    }
  };

  const isConvertReady = currentIndex => {
    const currentSetting = fileSettings.filter(
      setting => setting.index === currentIndex
    );
    const lastToAdd =
      currentSetting.length === 0 &&
      fileSettings.length === selectedFiles.length - 1;

    if (lastToAdd) {
      return true;
    }

    return false;
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={showModal !== ""}
      onClose={() => onClose("")}
      sx={{ flexGrow: 1 }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <Grid
          container
          direction="row"
          sx={{
            backgroundColor: "rgb(90, 90, 90)",
            height: "10%",
            padding: 1,
            paddingLeft: 2,
            alignItems: "center"
          }}
        >
          <Grid item xs={11.5}>
            <Typography variant="h5">Convert Files</Typography>
          </Grid>
          <Grid item xs={0.5}>
            <IconButton
              align="center"
              aria-label="Close"
              color="inherit"
              edge="start"
              onClick={() => onClose("")}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={1} sx={{ height: "70%" }}>
          <Grid item xs={7.5}>
            <Grid container sx={{ padding: 1 }}>
              <Grid item xs={12} sx={{ paddingTop: 3 }}>
                <TextField
                  fullWidth
                  helperText="Please select what settings to use"
                  id="settingsPreset"
                  label="Settings To Use"
                  margin="dense"
                  onChange={event => handleChangeInput(event, "settingsPreset")}
                  select
                  style={{ marginBottom: 2 }}
                  value={settingsPreset}
                  variant="outlined"
                >
                  {settingsPresets.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
                <Divider />
              </Grid>
              <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
                <TextField
                  disabled={settingsPreset !== "Custom"}
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Default Assets Path"
                  id="defaultAssetsPath"
                  value={assetsPath}
                  onChange={event => handleChangeInput(event, "assetsPath")}
                />
              </Grid>
              <Grid item xs={12} sx={{ paddingBottom: "2%" }}>
                <TextField
                  disabled={settingsPreset !== "Custom"}
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  label="Default File Path"
                  id="defaultFilePath"
                  value={filePath}
                  onChange={event => handleChangeInput(event, "filePath")}
                />
              </Grid>
              <Grid item xs={12} sx={{ paddingBottom: "30%" }}>
                <FormGroup sx={{ paddingLeft: 1 }}>
                  <FormControlLabel
                    disabled={settingsPreset !== "Custom"}
                    control={
                      <Checkbox
                        checked={namesOnly}
                        onChange={event =>
                          handleChangeInput(event, "namesOnly")
                        }
                      />
                    }
                    id="namesOnly"
                    label='Only Show Property Names In "Unknown Hashes" Section'
                  />
                  <FormControlLabel
                    disabled={settingsPreset !== "Custom"}
                    control={
                      <Checkbox
                        checked={updateFileTypes}
                        onChange={event =>
                          handleChangeInput(event, "updateFileTypes")
                        }
                      />
                    }
                    id="updateFileTypes"
                    label="Update File Types Used In Properties With Assets"
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4.5}>
            <Divider />
            <Grid
              align="center"
              item
              sx={{
                backgroundColor: "rgb(120, 120, 120)",
                height: "10%"
              }}
              xs={12}
            >
              <Typography variant="h5">General Information</Typography>
            </Grid>
            <Divider />
            <Grid container item sx={{ paddingTop: "4%" }} xs={12}>
              <Grid item xs={9}>
                <Typography
                  sx={{
                    padding: "2px",
                    pl: 2,
                    textDecoration: "underline"
                  }}
                >
                  Action:
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography sx={{ padding: "2px", marginLeft: "14px" }}>
                  Convert
                </Typography>
              </Grid>
            </Grid>
            <Grid container item sx={{ paddingTop: "1%" }} xs={12}>
              <Grid item xs={10}>
                <Typography
                  sx={{
                    padding: "2px",
                    pl: 2,
                    textDecoration: "underline"
                  }}
                >
                  File Amount:
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  sx={{
                    float: "right"
                  }}
                >
                  {selectedFiles.length}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={6} />
            <Divider />
            <Grid
              item
              sx={{
                backgroundColor: "rgb(120, 120, 120)",
                paddingTop: "1%"
              }}
              xs={12}
            >
              <Typography
                variant="h6"
                sx={{
                  pl: 2
                }}
              >
                Current File:
              </Typography>
            </Grid>
            <Divider />
            <Grid container item sx={{ paddingTop: "4%" }} xs={6}>
              <Grid item xs={10}>
                <Typography
                  sx={{
                    padding: "2px",
                    pl: 2,
                    textDecoration: "underline"
                  }}
                >
                  Position:
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  sx={{
                    padding: "2px",
                    marginLeft: "6px"
                  }}
                >
                  {`${currentFileIndex + 1} / ${selectedFiles.length}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item sx={{ paddingTop: "1%" }} xs={6}>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    padding: "2px",
                    pl: 2,
                    textDecoration: "underline"
                  }}
                >
                  Name:
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={6}>
              <Grid item xs={12}>
                <Tooltip
                  arrow
                  placement="right"
                  title={selectedFiles[currentFileIndex]?.fileName || "Empty"}
                >
                  <Typography
                    sx={{
                      maxWidth: 340,
                      overflowX: "hidden",
                      padding: "2px",
                      pl: 2,
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {selectedFiles[currentFileIndex]?.fileName || "Empty"}
                  </Typography>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={1} sx={{ height: "20%" }}>
          <Grid item xs={7.5} />
          <Grid item xs={4.5}>
            <Grid align="center" item xs={12}>
              <Button
                disabled={currentFileIndex === 0}
                onClick={handleClickBack}
                startIcon={<ArrowBackIcon />}
                variant="outlined"
                sx={{ margin: "12px 16px 12px 16px" }}
              >
                <Typography>Back</Typography>
              </Button>
              <Tooltip
                arrow
                placement="top"
                title="Applies the current settings to all files left and starts the converting process"
              >
                <Button
                  onClick={() => handleClickNext(true, true)}
                  variant="outlined"
                  sx={{ margin: "12px 16px 12px 16px" }}
                >
                  <Typography>All</Typography>
                </Button>
              </Tooltip>
              <Button
                disabled={currentFileIndex === selectedFiles.length - 1}
                onClick={() => handleClickNext(false)}
                endIcon={<ArrowForwardIcon />}
                variant="contained"
                sx={{ margin: "12px 16px 12px 16px" }}
              >
                <Typography>Next</Typography>
              </Button>
            </Grid>
            <Grid align="center" item xs={12}>
              <Button
                disabled={loading || !isConvertReady(currentFileIndex)}
                onClick={() => handleClickNext(true)}
                startIcon={
                  loading ? <CircularProgress size={20} /> : <AutoFixHighIcon />
                }
                sx={{ backgroundColor: "rgb(60, 60, 60)", width: "90%" }}
                variant="outlined"
              >
                <Typography>
                  {loading ? "Converting..." : "Start Converting"}
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ConvertModal;

ConvertModal.propTypes = {
  loading: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedFiles: PropTypes.any.isRequired, // eslint-disable-line
  showModal: PropTypes.string.isRequired,
  startConverting: PropTypes.func.isRequired
};
