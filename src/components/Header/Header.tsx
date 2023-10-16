import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import styles from './styles.module.css'
interface Props {}

const Header:React.FC<Props> = () => {
  return (
    <AppBar position="static" className={styles.AppBar}>
      <Toolbar className={styles.Toolbar}>
        
        <Typography variant="h6">
          <WebStoriesIcon/>
           DaCodes.
        </Typography>
        
        <IconButton color="inherit">
          <AccountCircleOutlinedIcon fontSize='large'/>
        </IconButton>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
