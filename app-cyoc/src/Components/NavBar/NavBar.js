import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import '../../styles/styles.css';

function Navbar() {
    return (
        <AppBar position="fixed" className="navbar">
            <Toolbar>
                <Box>
                    <Button color='inherit' component={Link} to="/">Inicio</Button>
                    <Button color='inherit' component={Link} to="/login">Login</Button>

                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;