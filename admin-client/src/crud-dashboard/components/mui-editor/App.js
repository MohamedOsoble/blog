import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import Editor from "./Editor";

export default function App(props) {
  const systemSettingsPrefersDarkMode = useMediaQuery(
    "(prefers-color-scheme: dark)"
  );
  const [paletteMode, setPaletteMode] = useState(
    systemSettingsPrefersDarkMode ? "dark" : "light"
  );
  const togglePaletteMode = useCallback(
    () =>
      setPaletteMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: paletteMode,
          secondary: {
            main: "#42B81A",
          },
        },
      }),
    [paletteMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 3, maxWidth: 1207, margin: "0 auto" }}>
        <Editor props={props} />
      </Box>
    </ThemeProvider>
  );
}
