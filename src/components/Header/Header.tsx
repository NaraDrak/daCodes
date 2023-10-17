import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
interface Props { }

const Header: React.FC<Props> = () => {

  const navigate = useNavigate();

  const handleGuestLogout = (): void => {
    localStorage.removeItem('guest_session_id');
    navigate('/login');
  }

  const token = localStorage.getItem('guest_session_id')

  let validSesion: boolean;
  token !== null ? validSesion = true : validSesion = false 


  return (
    <AppBar position="static" className={styles.AppBar}>
      <Toolbar className={styles.Toolbar}>
        <Typography variant="h6">
          <WebStoriesIcon />
          DaCodes.
        </Typography>
        <IconButton  color="inherit" onClick={handleGuestLogout}>
          <Typography variant='h6' marginRight={1}>
            {validSesion ? 'Cerra sesión' : ''} 
          </Typography>
          <AccountCircleOutlinedIcon fontSize='large' />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
