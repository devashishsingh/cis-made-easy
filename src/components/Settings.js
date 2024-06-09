import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const Settings = () => {
  const settings = [
    { id: 1, name: 'Setting 1', description: 'Description for setting 1' },
    { id: 2, name: 'Setting 2', description: 'Description for setting 2' },
    // Add more settings as needed
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Paper elevation={3}>
        <List>
          {settings.map((setting) => (
            <ListItem key={setting.id}>
              <ListItemText primary={setting.name} secondary={setting.description} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Settings;
