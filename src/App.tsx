import { CssBaseline, ThemeProvider } from '@mui/material';
import ResumePage from './pages/ResumePage';
import theme from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResumePage />
    </ThemeProvider>
  );
}
