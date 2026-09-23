import * as React from "react";
import PropTypes from "prop-types";

import InfoIcon from "@mui/icons-material/Info";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const AppBarComponent = ({ clickToolbarButton, showMenu }) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#161b22",
        borderBottom: "1px solid #30363d"
      }}
    >
      <Toolbar sx={{ height: 78, justifyContent: "space-between" }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            component="img"
            src="heimerdinger_passive.png"
            alt="heimerdinger_passive"
            sx={{
              width: 45,
              height: 45,
              borderRadius: 1,
              objectFit: "cover"
            }}
          />
          <Typography
            variant="h5"
            fontWeight="700"
            letterSpacing="-0.5px"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Troygrade
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          component="nav"
          sx={{
            pointerEvents: "auto",
            opacity: 1
          }}
        >
          <Tooltip title="View Changelog" arrow>
            <Button
              variant="text"
              startIcon={<SpeakerNotesIcon />}
              onClick={() => clickToolbarButton("changelog")}
              sx={{
                color: showMenu === "changelog" ? "#58a6ff" : "#8b949e",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  color: "#58a6ff",
                  backgroundColor: "rgba(88, 166, 255, 0.1)"
                }
              }}
            >
              Changelog
            </Button>
          </Tooltip>
          <Tooltip title="Show About Information" arrow>
            <Button
              variant="text"
              startIcon={<InfoIcon />}
              onClick={() => clickToolbarButton("about")}
              sx={{
                color: showMenu === "about" ? "#58a6ff" : "#8b949e",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  color: "#58a6ff",
                  backgroundColor: "rgba(88, 166, 255, 0.1)"
                }
              }}
            >
              About
            </Button>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(AppBarComponent);

AppBarComponent.propTypes = {
  clickToolbarButton: PropTypes.func.isRequired,
  showMenu: PropTypes.string.isRequired
};
