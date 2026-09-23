import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ReactMarkdown from "react-markdown";
import changelogPath from "../../../../changelog.md";

const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    background: "transparent"
  },
  popupContainer: {
    position: "absolute",
    top: "60px",
    right: "20px",
    width: "350px",
    maxHeight: "450px",
    backgroundColor: "#161b22",
    color: "#e6edf3",
    borderRadius: "8px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
    border: "1px solid #30363d",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    borderBottom: "1px solid #30363d"
  },
  title: {
    fontWeight: "600",
    fontSize: "14px",
    color: "#8b949e"
  },
  closeButton: {
    background: "none",
    border: "none",
    color: "#8b949e",
    fontSize: "20px",
    cursor: "pointer",
    padding: "0",
    lineHeight: "1"
  },
  content: {
    padding: "16px",
    overflowY: "auto",
    fontSize: "13px",
    lineHeight: "1.5",
    textAlign: "left"
  }
};

const ChangelogModal = ({ open, onClose }) => {
  const [markdownContent, setMarkdownContent] = useState(
    "Loading changelog..."
  );

  useEffect(() => {
    if (open) {
      fetch(changelogPath)
        .then(response => response.text())
        .then(text => setMarkdownContent(text))
        .catch(err => setMarkdownContent(`### Fehler\n${err.message}`));
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div style={styles.backdrop} onClick={onClose} /> {/* eslint-disable-line*/}
      <div style={styles.popupContainer}>
        <div style={styles.header}>
          <span style={styles.title}>Changelog</span>
          <button type="button" style={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div style={styles.content}>
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default React.memo(ChangelogModal);

ChangelogModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
