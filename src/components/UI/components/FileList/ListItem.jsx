import React from "react";
import PropTypes from "prop-types";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

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
    <>
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
        sx={{ minHeight: 60, p: 0 }}
      >
        <ListItemButton
          onClick={() => clickFile(file.fileId, selectedIndex)}
          sx={{ width: "100%" }}
        >
          <ImageList
            sx={{
              width: "100px",
              maxWidth: 60,
              height: "40px",
              m: 0,
              mr: 2
            }}
            cols={1}
          >
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
              primary={
                <Typography
                  sx={{
                    heigth: "100%",
                    width: "95%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                >
                  {file.fileName}
                </Typography>
              }
              secondary={filter ? null : getTypeName(file.fileType)}
            />
          </Tooltip>
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
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
