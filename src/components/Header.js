import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Box display="flex" alignItems="center" flexGrow={1}>
            <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <img src={`${process.env.PUBLIC_URL}/ensiriustech-logo.png`} alt="Ensiriustech Logo" style={{ height: '140px', marginRight: '10px' }} />
              <Typography variant="h5">
                CIS Made Easy
              </Typography>
            </RouterLink>
          </Box>
          <Box display="flex" alignItems="center">
            <Button color="inherit" component={RouterLink} to="/signin">
              Sign In
            </Button>
            <Button color="inherit" component={RouterLink} to="/register">
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
