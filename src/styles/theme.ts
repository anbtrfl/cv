import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#94a3b8",
    },
    secondary: {
      main: "#64ffda",
    },
    background: {
      default: "#0b1020",
      paper: "#0f172a",
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#94a3b8",
    },
    divider: "rgba(148, 163, 184, 0.2)",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1024,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "2.4rem",
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "1.35rem",
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "1.9rem",
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    subtitle1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    overline: {
      fontFamily: '"Montserrat", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "1.8rem",
    },
    caption: {
      fontFamily: '"Montserrat", sans-serif',
    },
    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            "radial-gradient(920px circle at var(--cursor-x, 10%) var(--cursor-y, 10%), rgba(100, 255, 218, 0.055), transparent 60%)",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        },
        "::selection": {
          backgroundColor: "rgba(100, 255, 218, 0.2)",
          color: "#e2e8f0",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          position: "relative",
          overflow: "hidden",
          borderColor: "transparent",
          backgroundImage: "none",
          backgroundColor: "transparent",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: "1px",
            background:
              "radial-gradient(260px circle at var(--cursor-x, 0px) var(--cursor-y, 0px), rgba(100, 255, 218, 0.9), transparent 65%), linear-gradient(rgba(148, 163, 184, 0.35), rgba(148, 163, 184, 0.35))",
            backgroundAttachment: "fixed",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "inherit",
          fontWeight: 500,
          transition: "color 0.2s ease",
          "&:hover": {
            color: "#64ffda",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "0.7rem",
          letterSpacing: "0.03em",
          transition:
            "color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            color: "inherit",
            borderColor: "rgba(148, 163, 184, 0.35)",
            backgroundColor: "rgba(148, 163, 184, 0.12)",
          },
        },
      },
    },
  },
});

export default theme;
