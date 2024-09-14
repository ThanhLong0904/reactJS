import { AccountCircle, Close } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const loggerInUser = useSelector((state) => state.user.current);
  const IsLogger = !!loggerInUser.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isRegister = mode === MODE.REGISTER;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon sx={{ marginRight: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="btnLink">
              ALong SHOP
            </Link>
          </Typography>
          <NavLink to="/todos" className="btnLink">
            <Button color="inherit">Todo</Button>
          </NavLink>
          <NavLink to="/albums" className="btnLink">
            <Button color="inherit">Albums</Button>
          </NavLink>
          {!IsLogger ? (
            <Button onClick={handleClickOpen} color="inherit">
              Login
            </Button>
          ) : (
            <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
      </Menu>
      <Dialog open={open} onClose={handleClose} disableEscapeKeyDown={false}>
        <DialogContent>
          <IconButton className="closeButton" onClick={handleClose}>
            <Close />
          </IconButton>

          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box align="center">
                <Button size="small" color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box align="center">
                <Button size="small" color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have an account. Register here
                </Button>
              </Box>
            </>
          )}
          {/* {isRegister ? <Register closeDialog={handleClose} /> : <Login closeDialog={handleClose} />}
          <Box align="center">
            <Button size="small" color="primary" onClick={() => setMode(isRegister ? MODE.Login : MODE.REGISTER)}>
              {isRegister ? 'Already have an account? Login here' : "Don't have an account? Register here"}
            </Button>
          </Box> */}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
