import React from "react";

import MenuIcon from "@mui/icons-material/Menu";

import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
            <MenuItem
              disabled={option.disabled}
              key={option.order}
              onClick={option.onClickFunc}
            >
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText>{option.text}</ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default MenuComponent;
