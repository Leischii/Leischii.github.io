import * as React from "react";
import PropTypes from "prop-types";

import MenuIcon from "@mui/icons-material/Menu";

import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

const MenuComponent = ({
  changeShowMenu,
  menuDisabled,
  menuSettings,
  showMenu
}) => {
  return (
    <div>
      <IconButton
        color="inherit"
        disabled={menuDisabled}
        onClick={e =>
          changeShowMenu({ anchor: e.currentTarget, menu: menuSettings.menu })
        }
        size="large"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={showMenu.anchor}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom"
        }}
        id="menu-appbar"
        keepMounted
        open={showMenu.menu === menuSettings.menu}
        onClose={() => changeShowMenu({ anchor: null, menu: "" })}
        transformOrigin={{
          horizontal: "right",
          vertical: "top"
        }}
      >
        {menuSettings.options.map(option => {
          return (
            <Tooltip
              arrow
              key={option.order}
              title={option.desc}
              placement="left"
            >
              <MenuItem disabled={option.disabled} onClick={option.onClickFunc}>
                <ListItemIcon>{option.icon}</ListItemIcon>
                <ListItemText>{option.text}</ListItemText>
              </MenuItem>
            </Tooltip>
          );
        })}
      </Menu>
    </div>
  );
};

export default React.memo(MenuComponent);

MenuComponent.propTypes = {
  changeShowMenu: PropTypes.func.isRequired,
  menuDisabled: PropTypes.bool.isRequired,
  menuSettings: PropTypes.shape({
    menu: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        desc: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        icon: PropTypes.element.isRequired,
        order: PropTypes.number.isRequired,
        onClickFunc: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  showMenu: PropTypes.shape({
    anchor: PropTypes.any, // eslint-disable-line
    menu: PropTypes.string
  }).isRequired
};
