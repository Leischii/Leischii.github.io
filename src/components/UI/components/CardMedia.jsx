import * as React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity")
}));

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 700,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15
    },
    "& .MuiImageMarked-root": {
      opacity: 0
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor"
    }
  }
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%"
});

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity")
}));

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
      sx={{
        display: "flex",
        flexWrap: "wrap",
        height: "100%",
        minWidth: 300,
        width: "100%"
      }}
    >
      <ImageButton
        disableRipple={showEditor}
        focusRipple
        onClick={() => handleClickImage(true)}
        style={{
          width: "100%"
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${image})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          {showEditor ? (
            <TextareaAutosize
              onChange={e => handleSaveDirty(e)}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderColor: "rgba(0, 0, 0, 0)",
                color: "white",
                height: "100%",
                overflow: "scroll",
                width: "100%"
              }}
              value={fileContentDirty}
              wrap="off"
            />
          ) : (
            <Typography
              color="inherit"
              component="span"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: theme => `calc(${theme.spacing(1)} + 6px)`
              }}
              variant="h4"
            >
              {activeFile
                ? "Click here to show the file in the editor"
                : "Select A File For More Options. Select One By Clicking The Arrow On A File In The List"}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          )}
        </Image>
      </ImageButton>
    </Box>
  );
};

export default React.memo(CardMediaComponent);

CardMediaComponent.propTypes = {
  activeFile: PropTypes.any, // eslint-disable-line
  fileContentDirty: PropTypes.string,
  handleClickImage: PropTypes.func.isRequired,
  handleSaveDirty: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  showEditor: PropTypes.bool
};

CardMediaComponent.defaultProps = {
  activeFile: undefined,
  fileContentDirty: "",
  showEditor: false
};
