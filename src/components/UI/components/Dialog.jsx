import React from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DialogComponent = ({ amount, control, handleAccept, handleClose }) => {
  const getDialogText = () => {
    let dialogText = "";

    switch (control.action) {
      case "auto_convert":
        dialogText = `Some of your files seem to be Troybin files.
          The only action available for Troybin files is convert.

          Troybin Files will therefore be converted automatically.`;
        break;
      case "convert":
        dialogText = `You are about to convert ${amount} file${
          amount > 1 ? "s" : ""
        }.
          Troybin files will be converted automatically.

          Do you want to proceed?`;
        break;
      case "download":
        dialogText = `You are about to download ${amount} file${
          amount > 1 ? "s" : ""
        }.
          Each file will be downloaded individually.

          Do you want to proceed?`;
        break;
      case "delete":
        dialogText = `You are about to delete ${amount} file${
          amount > 1 ? "s" : ""
        }.
          Files can not be restored once they have been deleted.

          Are you sure you want to proceed?`;
        break;
      default:
        dialogText = "How did we end up here?";
        break;
    }

    return dialogText;
  };

  const getDialogTitle = () => {
    let dialogTitle = "";

    switch (control.action) {
      case "auto_convert":
        dialogTitle = "Upload Info!";
        break;
      case "convert":
        dialogTitle = "Convert Files?";
        break;
      case "download":
        dialogTitle = "Download Files?";
        break;
      case "delete":
        dialogTitle = "Delete Files?";
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
      <DialogContent>
        <DialogContentText>{getDialogText()}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus={control.action !== "delete"}
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

export default DialogComponent;

DialogComponent.propTypes = {
  amount: PropTypes.number.isRequired,
  control: PropTypes.shape({
    action: PropTypes.string,
    open: PropTypes.bool
  }).isRequired,
  handleAccept: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};
