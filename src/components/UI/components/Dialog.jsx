import React, { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const fixes = [
  {
    desc:
      'Fixes black character models caused by outdated "params" entries in material definitions',
    name: "Black character models",
    id: "listFix",
    type: "char"
  },
  {
    desc:
      'Fixes muted voices and sounds caused by outdated "bankUnits" properties in audio entries',
    name: "Muted character voices and sounds",
    id: "mutedAudioFix",
    type: "char"
  },
  {
    desc:
      'Fixes crash on movement and spell casting caused by outdated "mUpdateType" properties in animation entries',
    name: "Crash on movement and casting spells",
    id: "updaterTypeFix",
    type: "anm"
  }
];

const DialogComponent = ({
  amount,
  control,
  handleAccept,
  handleClose,
  handleSelect,
  theme
}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectFix = event => {
    const {
      target: { value }
    } = event;
    const newSelectedItems =
      typeof value === "string" ? value.split(",") : value;

    setSelectedItems(newSelectedItems);
    handleSelect(newSelectedItems);
  };

  const getDialogText = () => {
    let dialogText;

    switch (control.action) {
      case "convert":
        dialogText = [
          `You are about to convert ${amount} file${
            amount > 1 ? "s" : ""
          }. You can use the default settings or set the settings yourself.`,
          "How do you want to proceed?"
        ];

        break;
      case "download":
        dialogText = [
          `You are about to download ${amount} file${
            amount > 1 ? "s" : ""
          }. Each file will be downloaded individually.`,
          "Do you want to proceed?"
        ];

        break;
      case "delete":
        dialogText = [
          `You are about to delete ${amount} file${
            amount > 1 ? "s" : ""
          }. Files can not be restored once they have been deleted.`,
          "Are you sure you want to proceed?"
        ];

        break;
      case "fix":
        dialogText = [
          `You are about to apply fixes to ${
            amount > 1 ? amount : "a"
          } bin file${amount > 1 ? "s" : ""}!`,
          "These are used to update outdated bin files. Names are based on the bugs they are trying to fix.",
          "Please select what fixes you want to apply!"
        ];

        break;
      default:
        dialogText = ["How did we end up here?"];
        break;
    }

    return (
      <DialogContent>
        {dialogText.map((line, index) => {
          const indexKey = index * 2;

          return (
            <Typography gutterBottom key={indexKey}>
              {line}
            </Typography>
          );
        })}
      </DialogContent>
    );
  };

  const getDialogTitle = () => {
    let dialogTitle = "";

    switch (control.action) {
      case "convert":
        dialogTitle = "Convert Files?";
        break;
      case "download":
        dialogTitle = "Download Files?";
        break;
      case "delete":
        dialogTitle = "Delete Files?";
        break;
      case "fix":
        dialogTitle = "Fix Outdated Bin Files?";
        break;
      default:
        dialogTitle = "You should never be able to read this";
        break;
    }

    return dialogTitle;
  };

  function getSelectDisabled(type) {
    if (!selectedItems.length) {
      return false;
    }

    const fixItem = fixes.find(fix => fix.id === selectedItems[0]);

    return fixItem.type !== type;
  }

  function getSelectItemStyle(name) {
    return {
      fontWeight:
        selectedItems.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }

  function getSelectChip(id) {
    const fixIndex = fixes.findIndex(fix => fix.id === id);

    return (
      <Tooltip
        arrow
        key={id}
        placement="top"
        title={fixIndex !== -1 ? fixes[fixIndex].desc : "Empty"}
      >
        <Chip label={fixIndex !== -1 ? fixes[fixIndex].name : "Empty"} />
      </Tooltip>
    );
  }

  function getSelectList(items) {
    function getMenuItems(filteredList) {
      return filteredList.map(fixEntry => (
        <MenuItem
          disabled={getSelectDisabled(fixEntry.type)}
          key={fixEntry.id}
          value={fixEntry.id}
          style={getSelectItemStyle(fixEntry.name)}
        >
          {fixEntry.name}
        </MenuItem>
      ));
    }

    const charFixList = fixes.filter(fix => fix.type === "char");
    const anmFixList = fixes.filter(fix => fix.type === "anm");

    return (
      <Select
        id="fixSelect"
        input={
          <OutlinedInput
            id="select-multiple-fixes"
            label="Select fix to apply"
          />
        }
        labelId="fix-select-label"
        MenuProps={MenuProps}
        multiple
        onChange={handleSelectFix}
        renderValue={selected => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map(value => getSelectChip(value))}
          </Box>
        )}
        value={items}
      >
        <ListSubheader color="primary">Character Bin Fixes</ListSubheader>
        {getMenuItems(charFixList)}
        <ListSubheader color="primary">Animation Bin Fixes</ListSubheader>
        {getMenuItems(anmFixList)}
      </Select>
    );
  }

  return (
    <Dialog
      open={control.open}
      onClose={() => handleClose({ action: "", open: false })}
    >
      <DialogTitle>{getDialogTitle()}</DialogTitle>
      {getDialogText()}
      {control.action === "fix" ? (
        <FormControl sx={{ m: 2, width: 550 }}>
          <InputLabel id="fix-select-label">Select fix to apply</InputLabel>
          {getSelectList(selectedItems)}
        </FormControl>
      ) : null}
      <DialogActions>
        {control.action === "convert" ? (
          <Button
            onClick={() =>
              handleAccept("convert_default", { action: "", open: false })
            }
          >
            Use Default Settings
          </Button>
        ) : null}
        <div style={{ flex: "1 0 0" }} />
        <Button
          autoFocus={control.action !== "delete"}
          disabled={control.action === "fix" && selectedItems.length === 0}
          onClick={() => {
            handleAccept(control.action, { action: "", open: false });
            setSelectedItems([]);
          }}
        >
          Continue
        </Button>
        <Button
          autoFocus={control.action === "delete"}
          onClick={() => handleClose({ action: "", open: false })}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(DialogComponent);

DialogComponent.propTypes = {
  amount: PropTypes.number.isRequired,
  control: PropTypes.shape({
    action: PropTypes.string,
    open: PropTypes.bool
  }).isRequired,
  handleAccept: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  theme: PropTypes.any.isRequired // eslint-disable-line
};
