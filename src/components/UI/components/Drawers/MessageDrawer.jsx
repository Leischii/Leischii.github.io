import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CloseIcon from "@mui/icons-material/Close";

import Alert from "@mui/material/Alert";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  justify-content: flex-end;
`;

const MessageDrawer = ({ handleChange, isOpen }) => {
  return (
    <Drawer anchor="bottom" onClose={handleChange} open={isOpen !== 0}>
      <DrawerHeader>
        <Alert variant="outlined" severity="error" sx={{ flexGrow: 1, mr: 1 }}>
          <Typography>{`${isOpen} file${
            isOpen > 1 ? "s" : ""
          } failed!`}</Typography>
        </Alert>
        <Tooltip title="Close" arrow placement="top">
          <IconButton
            size="mediuam"
            onClick={handleChange}
            color="inherit"
            sx={{ flexGrow: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </DrawerHeader>
    </Drawer>
  );
};

export default MessageDrawer;

MessageDrawer.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isOpen: PropTypes.number.isRequired
};
