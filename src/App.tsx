import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import ResumePage from './pages/ResumePage';
import theme from './styles/theme';

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = window.matchMedia('(max-width: 600px)').matches;

    if (prefersReducedMotion || isSmallScreen) {
      return;
    }

    let frameId = 0;
    let latestX = window.innerWidth * 0.1;
    let latestY = window.innerHeight * 0.1;

    const updateCursor = () => {
      frameId = 0;
      const { innerWidth, innerHeight } = window;
      const x = Math.max(0, Math.min(innerWidth, latestX));
      const y = Math.max(0, Math.min(innerHeight, latestY));

      root.style.setProperty('--cursor-x', `${x}px`);
      root.style.setProperty('--cursor-y', `${y}px`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== 'mouse') {
        return;
      }

      latestX = event.clientX;
      latestY = event.clientY;

      if (!frameId) {
        frameId = window.requestAnimationFrame(updateCursor);
      }
    };

    updateCursor();
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResumePage />
    </ThemeProvider>
  );
}
