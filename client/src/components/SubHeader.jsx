import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import MenuIcon from '@mui/icons-material/Menu'; 

const pages = ['Face', 'Eyes', 'Lips', 'Cheek'];

const menuContent = {
    Face: ['Foundation', 'Concealer', 'Powder', 'Setting Spray', 'Primer'],
    Eyes: ['Mascara', 'Eyeliner', 'Eyeshadow', 'Eyebrow'],
    Lips: ['Lipstick', 'Lip Gloss', 'Lip Liner'],
    Cheek: ['Blush', 'Bronzer', 'Highlighter']
};

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElPage, setAnchorElPage] = React.useState(null);
    const [currentPage, setCurrentPage] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleClickPageMenu = (event, page) => {
        setAnchorElPage(event.currentTarget);
        setCurrentPage(page);
    };

    const handleClosePageMenu = () => {
        setAnchorElPage(null);
        setCurrentPage(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}> {/* Navbar color */}
            <Container maxWidth="xl">
                <Toolbar>
                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="open menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="#ed8ca1"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={(e) => handleClickPageMenu(e, page)}
                                    sx={{
                                        display: 'block',
                                        background: '#ffffff',
                                        padding: { xs: '1rem 3rem', md: '0.85rem 2.5rem' }, // Mobile padding vs Desktop padding
                                        fontSize: { xs: '0.875rem', md: '1rem' }, // Mobile font size vs Desktop font size
                                    }}
                                >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page, index) => (
                            <Button
                                key={page}
                                onClick={(e) => handleClickPageMenu(e, page)}
                                sx={{
                                    color: '#ed8ca1',
                                    fontSize: '1.1rem',
                                    fontFamily: 'Poppins, sans-serif',
                                    marginLeft: index > 0 ? 10 : 0,
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>

            {/* Popover for Desktop */}
            <Popover
                open={Boolean(anchorElPage)}
                anchorEl={anchorElPage}
                onClose={handleClosePageMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{ padding: '8px', marginTop: '5px' }}
            >
                {currentPage && (
                    <Box sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>{currentPage} Products</Typography>
                        {menuContent[currentPage].map((item) => (
                            <MenuItem 
                                key={item} 
                                onClick={handleClosePageMenu}
                                sx={{
                                    padding: { xs: '1rem 1.5rem', md: '0.85rem 2.5rem' }, // Mobile padding vs Desktop padding
                                    fontSize: { xs: '0.875rem', md: '1rem' }, // Mobile font size vs Desktop font size
                                }}
                            >
                                <Typography textAlign="center">{item}</Typography>
                            </MenuItem>
                        ))}
                    </Box>
                )}
            </Popover>
        </AppBar>
    );
}

export default ResponsiveAppBar;
