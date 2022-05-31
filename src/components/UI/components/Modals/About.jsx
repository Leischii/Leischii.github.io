import * as React from "react";
import PropTypes from "prop-types";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

const AboutModal = ({ onClose, open }) => {
  const isOpen = open === "about";

  return (
    <Modal
      open={isOpen}
      onClose={() => onClose("")}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Troygrade
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Troygrade is a tool created to help custom skin creators with bin
            files. Supports migrating troybin files, fixing outdated bin files
            and more to come in the future.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            If you encounter any bugs, you can let me know via the Killerskins
            Discord or by opening an issue on the Troygrade github page.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content"
            }}
          >
            <Link
              href="https://discord.gg/FVvb9gVyUF"
              rel="noopener noreferrer"
              sx={{ pr: 2 }}
              target="_blank"
              underline="hover"
            >
              Killerskins Discord
            </Link>
            <Link
              href="https://github.com/Leischii/Leischii.github.io/issues"
              rel="noopener noreferrer"
              target="_blank"
              underline="hover"
            >
              Troygrade Github Issues Page
            </Link>
          </Box>
          <Typography id="modal-modal-powered" sx={{ mt: 2 }}>
            Troybin converter is a javascript port of moonshadows troybin
            converter from lol-pytools.
          </Typography>
          <Link
            href="https://github.com/moonshadow565/lolpytools"
            rel="noopener noreferrer"
            target="_blank"
            underline="hover"
          >
            Lol-Pytools Page
          </Link>
          <Typography id="modal-modal-powered" sx={{ mt: 2 }}>
            Powered by BESEN.
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default React.memo(AboutModal);

AboutModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.string.isRequired
};
