import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './components/MainLayout/MainLayout';
import theme from './styles/theme';
import ChipButton from './components/ChipButton/ChipButton';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout/>
      <ChipButton />
    </ThemeProvider>
  );
}

export default App;
