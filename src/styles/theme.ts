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
            'radial-gradient(800px circle at 10% 10%, rgba(100, 255, 218, 0.08), transparent 40%), radial-gradient(900px circle at 90% 0%, rgba(56, 189, 248, 0.08), transparent 45%)',
          backgroundAttachment: 'fixed',
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
        },
      },
    },
  },
});

export default theme;
