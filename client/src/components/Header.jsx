import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';

const MenuAppBar = () => {
    const [auth, setAuth] = useState(true);
    const [setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#ed8ca1' }}>
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <Typography variant="h4" component="div" sx={{ fontFamily: 'Cursive' }}> {/* Change the font family */}
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Glamora
                        </Link>
                    </Typography>
                    {auth && (
                        <IconButton
                            size="large"
                            aria-label="shopping bag"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            sx={{ position: 'absolute', right: 16 }}
                        >
                            <ShoppingBag />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
        </Box>

    );
}

export default MenuAppBar;
