import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";
import RotateRightIcon from "@mui/icons-material/RotateRight";

const defaultSettings = {
  assetsPath: "ASSETS/Particles",
  filePath: "Shared/Particles",
  namesOnly: false,
  settingsPreset: "Default",
  splitKeywords: false,
  updateFileTypes: true
};

const settingsPresets = [
  { value: "Default", label: "Default Settings" },
  { value: "Custom", label: "Custom Settings" }
];

const modalStyles = {
  dialog: { flexGrow: 1 },
  header: {
    backgroundColor: "rgb(90, 90, 90)",
    p: 1,
    pl: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  content: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    p: 0,
    minHeight: "400px"
  },
  leftSection: {
    flex: 1.5,
    p: 2,
    borderRight: { md: "1px solid rgb(210, 210, 210)" }
  },
  rightSection: {
    flex: 1,
    backgroundColor: "rgb(110, 110, 110)",
    p: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2
  },
  footer: {
    p: 2,
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
    borderTop: "1px solid rgb(210, 210, 210)"
  }
};

const SettingsForm = ({
  settingsPreset,
  assetsPath,
  filePath,
  namesOnly,
  updateFileTypes,
  splitKeywords,
  onChange
}) => (
  <Box sx={modalStyles.leftSection}>
    <TextField
      fullWidth
      select
      label="Settings To Use"
      value={settingsPreset}
      onChange={e => onChange(e, "settingsPreset")}
      helperText="Please select what settings to use"
      sx={{ mb: 2 }}
    >
      {settingsPresets.map(opt => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </TextField>
    <Divider sx={{ my: 2 }} />
    <Tooltip
      title="Set the path to use for assets. This should be the folder where all files are that are used in this vfx. An example could be 'ASSETS/Characters/Kalista/Skins/Base/Particles'"
      arrow
      placement="left"
    >
      <TextField
        disabled={settingsPreset !== "Custom"}
        fullWidth
        label="Default Assets Path"
        value={assetsPath}
        onChange={e => onChange(e, "assetsPath")}
        sx={{ mb: 2 }}
      />
    </Tooltip>
    <Tooltip
      title="Set the path to the bin file. An example could be 'Characters/Kalista/Skins/Skin0/Particles'"
      arrow
      placement="left"
    >
      <TextField
        disabled={settingsPreset !== "Custom"}
        fullWidth
        label="Default File Path"
        value={filePath}
        onChange={e => onChange(e, "filePath")}
        sx={{ mb: 2 }}
      />
    </Tooltip>
    <FormGroup sx={{ pl: 1 }}>
      <Tooltip
        title="Only show property names in 'Unknown Hashes' section"
        arrow
        placement="left"
      >
        <FormControlLabel
          disabled={settingsPreset !== "Custom"}
          label='Only Show Names In "Unknown Hashes"'
          control={
            <Checkbox
              checked={namesOnly}
              onChange={e => onChange(e, "namesOnly")}
            />
          }
        />
      </Tooltip>
      <Tooltip
        title="Update file types mentioned in troybin league can no longer use. An example of this would be changing all '.dds' to '.tex'"
        arrow
        placement="left"
      >
        <FormControlLabel
          disabled={settingsPreset !== "Custom"}
          label="Update File Types"
          control={
            <Checkbox
              checked={updateFileTypes}
              onChange={e => onChange(e, "updateFileTypes")}
            />
          }
        />
      </Tooltip>
      <Tooltip
        title="Split troybins files using 'keywordsRequired' or 'keywordsExcluded' into their own VfxSystemDefinitionData entries"
        arrow
        placement="left"
      >
        <FormControlLabel
          disabled={settingsPreset !== "Custom"}
          label="Split Troybins Using Keywords"
          control={
            <Checkbox
              checked={splitKeywords}
              onChange={e => onChange(e, "splitKeywords")}
            />
          }
        />
      </Tooltip>
    </FormGroup>
  </Box>
);

const InfoPanel = ({ selectedFiles }) => (
  <Box sx={modalStyles.rightSection}>
    <Typography variant="h6" align="center" sx={{ color: "#fff" }}>
      Selected Files ({selectedFiles.length})
    </Typography>
    <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 1 }} />
    <List
      sx={{
        maxHeight: 250,
        overflow: "auto",
        bgcolor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 1,
        p: 0
      }}
    >
      {selectedFiles.map((file, idx) => (
        <ListItem
          key={idx} // eslint-disable-line
          divider={idx < selectedFiles.length - 1}
          sx={{ py: 1 }}
        >
          <ListItemText
            primary={file?.fileName || `File ${idx + 1}`}
            primaryTypographyProps={{
              style: { color: "#fff", fontSize: "0.875rem" }
            }}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

const ConvertModal = ({
  loading,
  onClose,
  selectedFiles,
  showModal,
  startConverting
}) => {
  const [assetsPath, setAssetsPath] = useState(defaultSettings.assetsPath);
  const [filePath, setFilePath] = useState(defaultSettings.filePath);
  const [namesOnly, setNamesOnly] = useState(defaultSettings.namesOnly);
  const [settingsPreset, setSettingsPreset] = useState("Default");
  const [splitKeywords, setSplitKeywords] = useState(false);
  const [updateFileTypes, setUpdateFileTypes] = useState(
    defaultSettings.updateFileTypes
  );

  const handleStartConvert = () => {
    startConverting({
      assetsPath,
      filePath,
      namesOnly,
      settingsPreset,
      splitKeywords,
      updateFileTypes
    });
  };

  const handleChangeInput = (event, type) => {
    if (type === "assetsPath") setAssetsPath(event.target.value);
    if (type === "filePath") setFilePath(event.target.value);
    if (type === "namesOnly") setNamesOnly(event.target.checked);
    if (type === "updateFileTypes") setUpdateFileTypes(event.target.checked);
    if (type === "splitKeywords") setSplitKeywords(event.target.checked);
    if (type === "settingsPreset") {
      setSettingsPreset(event.target.value);

      if (event.target.value === "Default") {
        setAssetsPath(defaultSettings.assetsPath);
        setFilePath(defaultSettings.filePath);
        setNamesOnly(defaultSettings.namesOnly);
        setSplitKeywords(defaultSettings.splitKeywords);
        setUpdateFileTypes(defaultSettings.updateFileTypes);
      }
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={showModal !== ""}
      onClose={() => onClose("")}
      sx={modalStyles.dialog}
    >
      <Box sx={modalStyles.header}>
        <Typography variant="h5">Convert Files</Typography>
        <IconButton
          color="inherit"
          onClick={() => onClose("")}
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={modalStyles.content}>
        <SettingsForm
          settingsPreset={settingsPreset}
          assetsPath={assetsPath}
          filePath={filePath}
          namesOnly={namesOnly}
          updateFileTypes={updateFileTypes}
          splitKeywords={splitKeywords}
          onChange={handleChangeInput}
        />
        <InfoPanel selectedFiles={selectedFiles} currentFileIndex={0} />
      </DialogContent>
      <Box sx={modalStyles.footer}>
        <Button
          variant="contained"
          onClick={handleStartConvert}
          disabled={loading || selectedFiles.length === 0}
          startIcon={
            loading ? <CircularProgress size={20} /> : <RotateRightIcon />
          }
          sx={{ width: { xs: "100%", sm: "200px" } }}
        >
          {loading ? "Converting..." : "Convert"}
        </Button>
        <Button
          variant="outlined"
          onClick={() => onClose("")}
          disabled={loading}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        >
          Cancel
        </Button>
      </Box>
    </Dialog>
  );
};

SettingsForm.propTypes = {
  settingsPreset: PropTypes.string.isRequired,
  assetsPath: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired,
  namesOnly: PropTypes.bool.isRequired,
  updateFileTypes: PropTypes.bool.isRequired,
  splitKeywords: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

InfoPanel.propTypes = {
  selectedFiles: PropTypes.arrayOf(
    PropTypes.shape({
      fileName: PropTypes.string
    })
  ).isRequired
};

ConvertModal.propTypes = {
  loading: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedFiles: PropTypes.arrayOf(
    PropTypes.shape({
      fileName: PropTypes.string
    })
  ).isRequired,
  showModal: PropTypes.string.isRequired,
  startConverting: PropTypes.func.isRequired
};

export default ConvertModal;
