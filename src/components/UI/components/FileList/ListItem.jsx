import React from "react";
import PropTypes from "prop-types";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FolderIcon from "@mui/icons-material/Folder";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";

import getSplashArt from "../SplashArt/Main";

const FileListItem = ({
  clickFile,
  clickFileActive,
  file,
  filter,
  getTypeName,
  selectedFiles
}) => {
  const selectedIndex = selectedFiles.findIndex(
    element => element === file.fileId
  );
  const splashArt = getSplashArt(file);

  return (
    <ListItem
      key={file.fileId}
      secondaryAction={
        <IconButton
          onClick={event => {
            event.stopPropagation();
            clickFileActive();
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      }      
      selected={selectedIndex !== -1}
      sx={{
        width: "100%",
        textOverflow: "ellipsis",
        overflow: "hidden"
      }}
    >
      <ListItemButton onClick={() => clickFile(file.fileId, selectedIndex)}>
        <ImageList sx={{ width: 120, height: 50, mr: 2 }} cols={1} rowHeight={50}>
          <ImageListItem key={file.fileId}>
            <img
              src={splashArt}
              srcSet={splashArt}
              alt={file.fileName}
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Tooltip title={file.fileName} arrow placement="top">
          <ListItemText
            primary={file.fileName}
            secondary={filter ? null : getTypeName(file.fileType)}
            sx={{
              width: "100%",
              maxWidth: 280,
              textOverflow: "ellipsis",
              overflow: "hidden"
            }}
          />
        </Tooltip>
      </ListItemButton>
    </ListItem>
  );
};

export default FileListItem;

FileListItem.propTypes = {
  clickFile: PropTypes.func.isRequired,
  clickFileActive: PropTypes.func.isRequired,
  file: PropTypes.shape({
    besen: PropTypes.number.isRequired,
    fileId: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    fileType: PropTypes.string.isRequired
  }).isRequired,
  filter: PropTypes.number.isRequired,
  getTypeName: PropTypes.func.isRequired,
  selectedFiles: PropTypes.arrayOf(PropTypes.string).isRequired
};
