import React, { useCallback, useEffect, useRef, useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import GetTheme from "./UI/components/Theme";
import MainPage from "./UI/MainPage";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => { // eslint-disable-line
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay); // eslint-disable-line
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Main = () => {
  const [backGroundColorValue, setBackGroundColorValue] = useState(200);
  const [backGroundColorDirection, setBackGroundColorDirection] = useState(
    "UP"
  );
  const [lightMode, setLightMode] = useState(false);
  const theme = GetTheme({ backGroundColorValue, lightMode });

  const handleChangeTheme = useCallback(() => {
    setLightMode(!lightMode);
  }, [lightMode]);

  const setBackgroundColor = () => {
    const colorValue = backGroundColorValue;
    let numberDirection = backGroundColorDirection;

    if (colorValue === 0) numberDirection = "UP";
    if (colorValue === 360) numberDirection = "DOWN";

    const value = numberDirection === "UP" ? colorValue + 1 : colorValue - 1;

    setBackGroundColorValue(value);
    setBackGroundColorDirection(numberDirection);
  };

  useInterval(() => {
    setBackgroundColor();
  }, 500);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage
        lightMode={lightMode}
        handleChangeTheme={handleChangeTheme}
        theme={theme}
      />
    </ThemeProvider>
  );
};

export default Main;
