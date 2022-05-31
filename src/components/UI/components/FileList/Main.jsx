import React from "react";
import Dropzone from "react-dropzone";
import PropTypes from "prop-types";

import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

import AddIcon from "@mui/icons-material/Add";

import FileListItem from "./ListItem";

function getTypeName(type) {
  switch (type) {
    case "TROYBIN":
      return "Troybin";
    case "CONV_TROYBIN":
      return "Troybin (Converted)";
    case "MIG_BIN":
      return "Bin (Migrated)";
    case "CONV_BIN":
      return "Bin (Converted)";
    default:
      return "UNKNOWN";
  }
}

const FileList = ({
  clickFile,
  clickFileActive,
  dataSource,
  filesLength,
  filter,
  loadFile,
  selectAll,
  selectedFiles
}) => {
  return (
    <Dropzone
      accept=".txt, .troybin"
      onDrop={acceptedFiles => loadFile(acceptedFiles)}
    >
      {({ getRootProps, getInputProps }) => (
        <>
          {dataSource.length === 0 ? (
            <List
              sx={{
                height: "100%",
                width: "100%"
              }}
              subheader={
                <ListSubheader>
                  <Stack direction="row" spacing={1}>
                    <Checkbox checked={false} disabled onChange={selectAll} />
                    No Files
                  </Stack>
                </ListSubheader>
              }
              {...getRootProps()} /* eslint-disable-line */
            >
              <input {...getInputProps()} /> {/* eslint-disable-line */}
              <ListItemButton key={0}>
                <ListItemAvatar>
                  <Avatar>
                    <AddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    filesLength > dataSource.length
                      ? "No File Matches The Filter. You Can Add Files By Clicking Here Or Per Drag&Drop"
                      : "You Can Add Files By Clicking Here Or Per Drag&Drop"
                  }
                />
              </ListItemButton>
            </List>
          ) : (
            <List
              sx={{
                height: "100%",
                width: "100%",
                overflowY: "auto"
              }}
              subheader={
                <ListSubheader>
                  <Stack direction="row" spacing={1}>
                    <Checkbox
                      checked={selectedFiles.length === dataSource.length}
                      onChange={selectAll}
                    />
                    {dataSource.length} File{dataSource.length > 1 ? "s" : ""}
                    {selectedFiles.length > 0 &&
                      ` / ${selectedFiles.length} File${
                        selectedFiles.length > 1 ? "s" : ""
                      } selected`}
                  </Stack>
                </ListSubheader>
              }
              {...getRootProps()} /* eslint-disable-line */
            >
              <input disabled {...getInputProps()} /> {/* eslint-disable-line */}
              {dataSource.map(fileEntry => (
                <FileListItem
                  clickFile={(id, selected) => clickFile(id, selected)}
                  clickFileActive={() => clickFileActive(fileEntry)}
                  file={{
                    besen: fileEntry.besen,
                    fileId: fileEntry.id,
                    fileName: fileEntry.fileName,
                    fileType: fileEntry.type
                  }}
                  filter={filter}
                  getTypeName={type => getTypeName(type)}
                  key={fileEntry.id}
                  selectedFiles={selectedFiles}
                />
              ))}
            </List>
          )}
        </>
      )}
    </Dropzone>
  );
};

export default FileList;

FileList.propTypes = {
  clickFile: PropTypes.func.isRequired,
  clickFileActive: PropTypes.func.isRequired,
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      fileName: PropTypes.string.isRequired,
      content: PropTypes.any.isRequired, // eslint-disable-line
      type: PropTypes.string.isRequired,
      besen: PropTypes.number.isRequired,
      originalFileID: PropTypes.string
    }).isRequired
  ).isRequired,
  filesLength: PropTypes.number.isRequired,
  filter: PropTypes.number.isRequired,
  loadFile: PropTypes.func.isRequired,
  selectAll: PropTypes.func.isRequired,
  selectedFiles: PropTypes.arrayOf(PropTypes.string).isRequired
};
