import React from "react";

// Change to mui icons
import { PlayArrowIcon as Play } from "@mui/icons-material/PlayArrow";
import { PauseIcon as Pause } from "@mui/icons-material/Pause";
import { FastForwardIconas as Next } from '@mui/icons-material/FastForward';
import { FastRewindIcon as Prev } from '@mui/icons-material/FastRewind';
import IconButton from "@mui/material/IconButton";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) => (
  <div className="audio-controls">
    <IconButton
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <Prev />
    </IconButton>
    {isPlaying ? (
      <IconButton
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </IconButton>
    ) : (
      <IconButton
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </IconButton>
    )}
    <IconButton
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <Next />
    </IconButton>
  </div>
);

export default AudioControls;
