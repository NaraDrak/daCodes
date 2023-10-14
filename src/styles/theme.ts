import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#03067B',
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          backgroundColor: '#5141ea',
          color: '#fff',
          borderRadius: '20px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '20px',  
        },
        notchedOutline: {
          borderRadius: '20px',  
        },
        input: {
          borderRadius: '20px',
        },
      },
    },
  },
});

export default theme;
