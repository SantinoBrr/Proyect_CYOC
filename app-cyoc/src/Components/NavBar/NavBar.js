import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button } from '@mui/material';

function Navbar() {
  const location = useLocation();
  
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box>
          <Button color='inherit' component={Link} to="/">Inicio</Button>
          {location.pathname === '/' && (
            <>
              <Button color='inherit' component={Link} to="/login">Login</Button>
              <Button color='inherit' component={Link} to="/register">Registrarse</Button>
            </>
          )}
          {location.pathname === '/create-car' && (
            <>
              <Button color='inherit' component={Link} to="/">Inicio</Button>
              <Button color='inherit' component={Link} to="/about">About Me</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;