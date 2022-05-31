import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const DialogComponent = ({
  amount,
  control,
  handleAccept,
  handleClose,
  handleSelect
}) => {
  const [selectedItem, setSelectedItem] = useState("");
  const fixes = [
    {
      name: "Fix black models",
      id: "listFix"
    },
    {
      name: "Fix crash on movement",
      id: "updaterTypeFix"
    }
  ];

  const handleSelectFix = e => {
    setSelectedItem(e.target.value);
    handleSelect(e.target.value);
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
          `You are about to apply fixes to ${amount} file${
            amount > 1 ? "s" : ""
          }.`,
          "Please select what fix you want to apply?"
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
        dialogTitle = "Fix Files?";
        break;
      default:
        dialogTitle = "You should never be able to read this";
        break;
    }

    return dialogTitle;
  };

  return (
    <Dialog
      open={control.open}
      onClose={() => handleClose({ action: "", open: false })}
    >
      <DialogTitle>{getDialogTitle()}</DialogTitle>
      {getDialogText()}
      {control.action === "fix" ? (
        <TextField
          helperText="Please select what fix to apply"
          id="fixSelect"
          label="Fix to Apply"
          margin="dense"
          onChange={event => handleSelectFix(event)}
          select
          style={{ marginBottom: 2, marginLeft: 20, marginRight: 20 }}
          value={selectedItem}
          variant="outlined"
        >
          {fixes.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
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
          disabled={control.action === "fix" && selectedItem === ""}
          onClick={() =>
            handleAccept(control.action, { action: "", open: false })
          }
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
  handleSelect: PropTypes.func.isRequired
};
