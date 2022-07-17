import * as React from "react";
import PropTypes from "prop-types";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import InfoIcon from "@mui/icons-material/Info";
import LightModeIcon from "@mui/icons-material/LightMode";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MenuComponent from "./Menu";

const AppBarComponent = ({
  changeShowMenu,
  clickAboutButton,
  clickThemeButton,
  lightMode,
  menuDisabled,
  showMenu
}) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ height: 78 }}>
        <Card
          sx={{
            flexGrow: 1,
            maxWidth: 60,
            mr: 2
          }}
        >
          <CardMedia
            component="img"
            image="heimerdinger_passive.png"
            alt="heimerdinger_passive"
          />
        </Card>
        <Typography
          variant="h3"
          component="div"
          noWrap
          sx={{
            mr: 4,
            display: {
              xs: "none",
              md: "flex"
            }
          }}
        >
          Troygrade
        </Typography>
        <Box sx={{ display: { md: "flex", xs: "none" }, flexGrow: 2 }} />
        <MenuComponent
          changeShowMenu={e => changeShowMenu(e)}
          menuDisabled={menuDisabled}
          menuSettings={{
            menu: "Appbar",
            options: [
              {
                desc: "View Changelog",
                disabled: true,
                icon: <SpeakerNotesIcon />,
                onClickFunc: () => changeShowMenu({ anchor: null, menu: "" }),
                order: 1,
                text: "Changelog"
              },
              {
                desc: "Change Between Darkmode And Lightmode",
                icon: lightMode ? <DarkModeIcon /> : <LightModeIcon />,
                onClickFunc: () => clickThemeButton(),
                order: 2,
                text: lightMode ? "Darkmode" : "LightMode"
              },
              {
                desc: "Show About Information",
                icon: <InfoIcon />,
                onClickFunc: () => clickAboutButton("about"),
                order: 3,
                text: "About"
              }
            ]
          }}
          showMenu={showMenu}
        />
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(AppBarComponent);

AppBarComponent.propTypes = {
  changeShowMenu: PropTypes.func.isRequired,
  clickAboutButton: PropTypes.func.isRequired,
  clickThemeButton: PropTypes.func.isRequired,
  lightMode: PropTypes.bool.isRequired,
  menuDisabled: PropTypes.bool.isRequired,
  showMenu: PropTypes.shape({
    anchor: PropTypes.any, // eslint-disable-line
    menu: PropTypes.string.isRequired
  }).isRequired
};
