import { createTheme } from "@mui/material/styles";

export default function GetTheme(props) {
  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          body {
            background: linear-gradient(290deg, hsl(${
              props.backGroundColorValue
            }, 60%, 55%), hsl(${props.backGroundColorValue - 305}, 64%, 50%))
          }
        `
      }
    },
    palette: {
      mode: props.lightMode ? "light" : "dark"
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1700
      }
    }
  });

  return theme;
}
