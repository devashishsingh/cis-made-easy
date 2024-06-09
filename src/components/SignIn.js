import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const SignIn = () => {
  return (
    <Container>
      <Box mt={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>
        <TextField label="Email" variant="outlined" margin="normal" fullWidth />
        <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
        <Button variant="contained" color="primary" fullWidth>
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default SignIn;
