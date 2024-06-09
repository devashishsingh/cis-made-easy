import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Register = () => {
  return (
    <Container>
      <Box mt={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <TextField label="Email" variant="outlined" margin="normal" fullWidth />
        <TextField label="Password" type="password" variant="outlined" margin="normal" fullWidth />
        <TextField label="Confirm Password" type="password" variant="outlined" margin="normal" fullWidth />
        <Button variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
