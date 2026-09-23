import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const CardMediaComponent = ({
  activeFile,
  fileContentDirty,
  handleClickImage,
  handleSaveDirty,
  image,
  showEditor
}) => {
  return (
    <Box
      onClick={!showEditor ? () => handleClickImage(true) : undefined}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 300,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        cursor: !showEditor ? "pointer" : "default",
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          display: "flex",
          flexDirection: "column",
          p: 3,
          boxSizing: "border-box"
        }}
      >
        {showEditor ? (
          <textarea
            onChange={e => handleSaveDirty(e)}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "4px",
              padding: "16px",
              boxSizing: "border-box",
              resize: "none",
              overflowY: "auto",
              overflowX: "auto",
              fontFamily: "monospace",
              fontSize: "14px",
              lineHeight: "1.5",
              outline: "none"
            }}
            value={fileContentDirty}
            wrap="off"
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflowY: "auto"
            }}
          >
            <Typography
              color="#ffffff"
              component="span"
              variant="h5"
              align="center"
              sx={{
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.8)",
                maxWidth: "80%"
              }}
            >
              {activeFile
                ? "Click here to show the file in the editor"
                : "Select A File For More Options. Select One By Clicking The Arrow On A File In The List"}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default React.memo(CardMediaComponent);

CardMediaComponent.propTypes = {
  activeFile: PropTypes.any, // eslint-disable-line
  fileContentDirty: PropTypes.string.isRequired,
  handleClickImage: PropTypes.func.isRequired,
  handleSaveDirty: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  showEditor: PropTypes.bool.isRequired
};
