import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
interface Props {}

const Header:React.FC<Props> = () => {
  const navigate = useNavigate();
  const handleGuestLogout = (): void => {
    localStorage.removeItem('guest_session_id');
    navigate('/login');
  }

  return (
    <AppBar position="static" className={styles.AppBar}>
      <Toolbar className={styles.Toolbar}>
        
        <Typography variant="h6">
          <WebStoriesIcon/>
           DaCodes.
        </Typography>
        
        <IconButton color="inherit" onClick={handleGuestLogout}>
          <AccountCircleOutlinedIcon fontSize='large'/>
        </IconButton>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
