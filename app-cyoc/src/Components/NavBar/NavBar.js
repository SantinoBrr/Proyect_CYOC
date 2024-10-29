import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useUser } from '../../Context/UserContext';
import '../../assets/styles/styles.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const drawerContent = (
    <Box
      sx={{ width: 200, backgroundColor: '#007bbf' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {user && (
          <ListItem>
            <ListItemText primary={`Hi, ${user.name}`} sx={{ color: 'white' }} />
          </ListItem>
        )}
        <ListItem 
          component={Link} 
          to="/search-models" 
          className="menu-option"
          sx={{
            '&:hover': {
              backgroundColor: '#4a6d8a'
            },
            marginTop: 1,
            marginBottom: 1,
          }}
        >
          <ListItemText primary="Search Models" />
        </ListItem>
        <ListItem 
          component={Link} 
          to="/my-models" 
          className="menu-option"
          sx={{
            '&:hover': {
              backgroundColor: '#4a6d8a'
            },
          }}
        >
          <ListItemText primary="See My Models" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <IconButton
            className="menu"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{ '& .MuiDrawer-paper': { backgroundColor: '#007bbf', width: 200 } }}
          >
            {drawerContent}
          </Drawer>

          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button color='inherit' component={Link} to="/" className="navbar-button">Home</Button>
            {location.pathname === '/about' ? (
              <>
                {!user ? (
                  <>
                    <Button color='inherit' component={Link} to="/login" className="navbar-button">Sign in</Button>
                    <Button color='inherit' component={Link} to="/register" className="navbar-button">Sign Up</Button>
                  </>
                ) : (
                  <Button color='inherit' onClick={handleLogout} className="navbar-button">Logout</Button>
                )}
              </>
            ) : (
              <>
                {user ? (
                  <>
                    {location.pathname !== '/about' && (
                      <Button color='inherit' component={Link} to="/about" className="navbar-button">About us</Button>
                    )}
                    <Button color='inherit' onClick={handleLogout} className="navbar-button">Logout</Button>
                  </>
                ) : (
                  <>
                    {location.pathname === '/' && (
                      <>
                        <Button color='inherit' component={Link} to="/about" className="navbar-button">About us</Button>
                        <Button color='inherit' component={Link} to="/login" className="navbar-button">Sign in</Button>
                        <Button color='inherit' component={Link} to="/register" className="navbar-button">Sign Up</Button>
                      </>
                    )}
                    {location.pathname === '/login' && (
                      <>
                        <Button color='inherit' component={Link} to="/about" className="navbar-button">About us</Button>
                        <Button color='inherit' component={Link} to="/register" className="navbar-button">Sign Up</Button>
                      </>
                    )}
                    {location.pathname === '/register' && (
                      <>
                        <Button color='inherit' component={Link} to="/about" className="navbar-button">About us</Button>
                        <Button color='inherit' component={Link} to="/login" className="navbar-button">Sign in</Button>
                      </>
                    )}
                    {location.pathname === '/create-car' && (
                      <Button color='inherit' component={Link} to="/about" className="navbar-button">About us</Button>
                    )}
                    {location.pathname === '/search-models' && (
                      <>
                        <Button color='inherit' component={Link} to="/about" className="navbar-button">About us</Button>
                        <Button color='inherit' component={Link} to="/login" className="navbar-button">Sign in</Button>
                        <Button color='inherit' component={Link} to="/register" className="navbar-button">Sign Up</Button>
                      </>
                    )}
                    {location.pathname === '/LegalPage' && (
                      <>
                        <Button color='inherit' component={Link} to="/about" className="navbar-button">About us</Button>
                        <Button color='inherit' component={Link} to="/login" className="navbar-button">Sign in</Button>
                        <Button color='inherit' component={Link} to="/register" className="navbar-button">Sign Up</Button>
                      </>
                    )}
                    {location.pathname === '/privacy-policy' && (
                      <>
                        <Button color='inherit' component={Link} to="/about" className="navbar-button">About us</Button>
                        <Button color='inherit' component={Link} to="/login" className="navbar-button">Sign in</Button>
                        <Button color='inherit' component={Link} to="/register" className="navbar-button">Sign Up</Button>
                      </>
                    )}
                    {location.pathname === '/terms-of-service' && (
                      <>
                        <Button color='inherit' component={Link} to="/about" className="navbar-button">About us</Button>
                        <Button color='inherit' component={Link} to="/login" className="navbar-button">Sign in</Button>
                        <Button color='inherit' component={Link} to="/register" className="navbar-button">Sign Up</Button>
                      </>
                    )}
                    {location.pathname === '/my-models' && (
                      <>
                        <Button color='inherit' component={Link} to="/about" className="navbar-button">About us</Button>
                        <Button color='inherit' component={Link} to="/login" className="navbar-button">Sign in</Button>
                        <Button color='inherit' component={Link} to="/register" className="navbar-button">Sign Up</Button>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
