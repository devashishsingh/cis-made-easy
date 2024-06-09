import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import checklists from '../data/checklists';

const ChecklistViewer = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        CIS Benchmarks
      </Typography>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <List>
          {checklists.map((checklist, index) => (
            <ListItem key={index}>
              <ListItemText primary={checklist} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default ChecklistViewer;
