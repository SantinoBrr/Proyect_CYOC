import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button } from '@mui/material';
import '../../assets/styles/styles.css';

function Navbar() {
  const location = useLocation();
  
  return (
    
    <AppBar position="fixed" className='navbar'>
      <Toolbar>
        <Box>
          <Button color='inherit' component={Link} to="/">Home</Button>
          {location.pathname === '/' && (
            <>
              <Button color='inherit' component={Link} to="/about">About us</Button>
              <Button color='inherit' component={Link} to="/login">Sign in</Button>
              <Button color='inherit' component={Link} to="/register">Sign Up</Button>
            </>
          )}
          {location.pathname === '/login' && (
            <>
              <Button color='inherit' component={Link} to="/about">About us</Button>
              <Button color='inherit' component={Link} to="/register">Sign Up</Button>
            </>
          )}
          {location.pathname === '/register' && (
            <>
              <Button color='inherit' component={Link} to="/about">About us</Button>
              <Button color='inherit' component={Link} to="/login">Sign in</Button>
            </>
          )}
          {location.pathname === '/create-car' && (
            <>
              <Button color='inherit' component={Link} to="/about">About us</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;