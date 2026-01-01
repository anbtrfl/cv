import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#94a3b8',
    },
    secondary: {
      main: '#64ffda',
    },
    background: {
      default: '#0b1020',
      paper: '#0f172a',
    },
    text: {
      primary: '#e2e8f0',
      secondary: '#94a3b8',
    },
    divider: 'rgba(148, 163, 184, 0.2)',
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
    fontFamily: '"Space Grotesk", "IBM Plex Sans", "Segoe UI", sans-serif',
    h1: {
      fontSize: '2.4rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '1.35rem',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    h3: {
      fontSize: '1.9rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    subtitle1: {
      fontSize: '0.95rem',
      fontWeight: 500,
    },
    body2: {
      fontSize: '0.95rem',
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
            'radial-gradient(920px circle at var(--cursor-x, 10%) var(--cursor-y, 10%), rgba(100, 255, 218, 0.055), transparent 60%)',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        },
        '::selection': {
          backgroundColor: 'rgba(100, 255, 218, 0.2)',
          color: '#e2e8f0',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(148, 163, 184, 0.25)',
          backgroundImage: 'none',
          backgroundColor: 'rgba(15, 23, 42, 0.7)',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'inherit',
          fontWeight: 500,
          transition: 'color 0.2s ease',
          '&:hover': {
            color: '#64ffda',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '0.7rem',
          letterSpacing: '0.03em',
          transition:
            'color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            color: '#64ffda',
            borderColor: '#64ffda',
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});

export default theme;
