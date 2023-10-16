import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#FFFF',
    },
    background: {
      default: '#03067B',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, rgba(58,227,195,1) 0%, rgba(78,108,228,1) 98%, rgba(86,63,240,1) 100%)',
          width: '220px',
          height: '50px',
          borderRadius: '50px',
          color: 'white',
          padding: '10px 30px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
          transition: 'background 0.2s ease-out',
          '&:hover': {
            background: 'rgba(86,63,240,1)',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          backgroundColor: '#5141ea',
          color: '#fff',
          borderRadius: '50px',
          '&:focus': {
            outline: 'none',
            backgroundColor: '#5141ea', // o cualquier otro color que prefieras
            boxShadow: '0 0 0 2px rgba(58,227,195,0.3)', // Si quieres añadir un efecto glow al enfocar
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
        },
        notchedOutline: {
          borderRadius: '50px',
        },
        input: {
          borderRadius: '50px',
        },
      },
    },
  },
});

export default theme;
