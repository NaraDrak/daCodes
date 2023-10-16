import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './components/MainLayout/MainLayout';
import theme from './styles/theme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import { MovieGrid } from './components/MovieGrid/MovieGrid';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <MainLayout >
          <Routes>
            <Route  index element={<Login />}></Route>
            <Route path="movies" element={
            <ProtectedRoutes redirectTo='/movies'>
              <MovieGrid/>
            </ProtectedRoutes>}>
            </Route>
            <Route path="*"  element={<Navigate to="/" />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
