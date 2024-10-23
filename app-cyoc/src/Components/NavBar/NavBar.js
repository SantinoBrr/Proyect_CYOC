import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import authService from '../services/authService';
import '../../assets/styles/styles.css';

function Navbar() {
  const location = useLocation();
  const isAuthenticated = authService.isAuthenticated(); 
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 200, backgroundColor: '#007bbf' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem 
          button 
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
          button 
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

          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
            <Button color='inherit' component={Link} to="/" className="navbar-button">Home</Button>
            {isAuthenticated ? (
              <Button color='inherit' component={Link} to="/about" className="navbar-button">About us</Button>
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
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
