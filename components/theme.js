import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00ADB5",
    },
    secondary: {
      main: "#005C71",
    },
    light: {
      main: "#E6F4F1",
    },
    error: {
      main: "#882100",
    },
    success: {
      main: "#19884D",
    },
    success: {
      main: "#ff9800",
    },
  },

  typography: {
    fontFamily: "'Ubuntu', sans-serif",
  },
});

export default theme;