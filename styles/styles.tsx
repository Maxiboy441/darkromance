import { createTheme, styled, Button } from '@mui/material';

export const darkRomanceTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#8b0000', light: '#dc143c', dark: '#4a0000' },
    secondary: { main: '#800080', light: '#da70d6', dark: '#4b0082' },
    background: {
      default: '#0a0a0a',
      paper: 'rgba(20, 20, 20, 0.95)'
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#d4d4d4'
    },
    error: { main: '#ff4444' },
    warning: { main: '#ff6b35' },
  },
  typography: {
    fontFamily: '"Crimson Text", "Playfair Display", "Libre Baskerville", serif',
    h1: {
      fontWeight: 700,
      fontStyle: 'italic',
      letterSpacing: '3px',
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 600,
      fontStyle: 'italic',
      letterSpacing: '2px'
    },
    body1: {
      fontFamily: '"Crimson Text", "Georgia", serif',
      lineHeight: 1.8,
      fontSize: '1.1rem'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 0,
          fontWeight: 600,
          letterSpacing: '1.5px',
          fontFamily: '"Crimson Text", serif',
          padding: '16px 40px',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            transition: 'left 0.5s',
          },
          '&:hover::before': {
            left: '100%',
          },
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: 'rgba(30, 30, 30, 0.9)',
          border: '1px solid #333',
          backdropFilter: 'blur(10px)',
        }
      }
    },
  },
});

export const cuteTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6366f1', light: '#818cf8', dark: '#4f46e5' },
    secondary: { main: '#f59e0b', light: '#fbbf24', dark: '#d97706' },
    background: {
      default: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 50%, #e0f2fe 100%)',
      paper: 'rgba(255, 255, 255, 0.9)'
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280'
    },
    error: { main: '#ef4444' },
    warning: { main: '#f59e0b' },
    info: { main: '#06b6d4' },
  },
  typography: {
    fontFamily: '"Inter", "Poppins", "Nunito Sans", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '2px',
      background: 'linear-gradient(45deg, #6366f1, #f59e0b)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '1px',
      color: '#1f2937',
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.7,
      fontSize: '1.05rem',
      color: '#374151'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '25px',
          fontWeight: 600,
          letterSpacing: '1px',
          fontFamily: '"Inter", sans-serif',
          padding: '14px 32px',
          boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)',
          },
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          border: 'none',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(20px)',
        }
      }
    },
  },
});

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.palette.mode === 'dark' ? 0 : '25px',
  fontWeight: 600,
  letterSpacing: '1.5px',
  fontFamily: theme.palette.mode === 'dark' ? '"Crimson Text", serif' : '"Inter", sans-serif',
  padding: '12px 28px',
  marginTop: theme.spacing(3),
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0%',
    height: '2px',
    backgroundColor: theme.palette.primary.light,
    transition: 'width 0.4s ease-in-out',
  },
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.light,
    transform: 'translateY(-3px)',
    '&::after': { width: '100%' },
  },
}));