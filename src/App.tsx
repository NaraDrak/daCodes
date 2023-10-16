import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './components/MainLayout/MainLayout';
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
