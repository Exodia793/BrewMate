import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6F4E37",
      light: "#A47B5C",
      dark: "#4A3222",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#5F7A45",
      light: "#8FA876",
      dark: "#435733",
      contrastText: "#FFFFFF",
    },
    background: { default: "#FAF6F1", paper: "#FFFFFF" },
    text: { primary: "#2B1D14", secondary: "#7A6A5E" },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: "2.25rem",
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: { root: { boxShadow: "none", padding: "10px 24px" } },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
          transition: "transform .2s",
          "&:hover": { transform: "translateY(-4px)" },
        },
      },
    },
    MuiChip: {
      styleOverrides: { root: { fontWeight: 600 } },
    },
    MuiAccordion: {
      styleOverrides: {
        root: { boxShadow: "none", "&:before": { display: "none" } },
      },
    },
  },
});

export default theme;
