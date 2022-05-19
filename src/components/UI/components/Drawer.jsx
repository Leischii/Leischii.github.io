import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";

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

const DrawerComponent = ({ handleChange, isOpen }) => {
  return (
    <Drawer anchor="bottom" onClose={() => handleChange(false)} open={isOpen}>
      <DrawerHeader>
        <CachedIcon sx={{ ml: 2 }} />
        <Typography component="div" variant="h6" sx={{ flexGrow: 1, ml: 2 }}>
          Converting Files
        </Typography>
        <Tooltip title="Close" arrow placement="top">
          <IconButton
            size="mediuam"
            onClick={() => handleChange(false)}
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

export default DrawerComponent;

DrawerComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};
