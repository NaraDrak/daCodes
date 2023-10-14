import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ background: '#5141EA' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        
        <Typography variant="h6">
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
