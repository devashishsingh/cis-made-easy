import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab, Box, Container, Typography, List, ListItem, ListItemText, Paper, Accordion, AccordionSummary, AccordionDetails, TextField, Button, IconButton, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@emotion/styled';
import checklists from '../data/checklists';
import { windowsDesktopVersions } from '../data/checklists';

const StyledTab = styled(Tab)`
  transition: transform 0.2s, background-color 0.2s;
  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.palette.action.hover};
  }
`;

const Title = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
  margin: 20px 0;
`;

const SearchField = styled(TextField)`
  margin-bottom: 16px;
`;

const PaperContainer = styled(Paper)`
  padding: 16px;
`;

const NoResultsText = styled(Typography)`
  text-align: center;
  padding: 16px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const ChecklistTabs = () => {
  const [value, setValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentVersion, setCurrentVersion] = useState('');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSearchQuery(''); // Reset search when tab changes
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMenuClick = (event, version) => {
    setAnchorEl(event.currentTarget);
    setCurrentVersion(version);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentVersion('');
  };

  const handleMenuOptionClick = (option) => {
    handleMenuClose();
    const fileName = currentVersion.replace(/\s+/g, '_').replace(/[()]/g, '');
    if (option === 'Open') {
      navigate(`/checklist/${fileName}`);
    } else if (option === 'Modify') {
      navigate(`/create-version/${fileName}`);
    } else if (option === 'Download') {
      // Handle download logic here
      console.log(`Download ${fileName}`);
    }
  };

  const handleDownloadAll = () => {
    // Handle download all action
    console.log('Download all clicked');
  };

  const categories = [
    'See All',
    'Cloud Providers',
    'Desktop Software',
    'DevSecOps Tools',
    'Mobile Devices',
    'Multi Function Print Devices',
    'Network Devices',
    'Operating Systems',
    'Server Software',
  ];

  const categorizedChecklists = {
    'See All': checklists,
    'Cloud Providers': checklists.filter(c =>
      ['Alibaba Cloud', 'Amazon Web Services', 'Google Cloud Computing Platform', 'Google Workspace', 'IBM Cloud Foundations', 'Microsoft 365', 'Microsoft Azure', 'Microsoft Dynamics 365 Power Platform', 'Oracle Cloud Infrastructure', 'Snowflake'].includes(c)),
    'Desktop Software': checklists.filter(c =>
      ['Microsoft Exchange Server', 'Microsoft Office', 'Microsoft Web Browser', 'Mozilla Firefox', 'Safari Browser', 'Zoom'].includes(c)
    ),
    'DevSecOps Tools': checklists.filter(c => 
      ['Software Supply Chain Security'].includes(c)),
    'Mobile Devices': checklists.filter(c => 
      ['Apple iOS', 'Google Android'].includes(c)),
    'Multi Function Print Devices': checklists.filter(c => 
      ['Print Devices'].includes(c)),
    'Network Devices': checklists.filter(c =>
      ['Check Point Firewall', 'Cisco', 'F5', 'Fortinet', 'Juniper', 'Palo Alto Networks', 'pfSense Firewall', 'Sophos'].includes(c)),
    'Operating Systems': checklists.filter(c =>
      ['Amazon Linux', 'Apple macOS', 'Azure Linux', 'Bottlerocket', 'CentOS Linux', 'Debian Family Linux', 'Debian Linux', 'Distribution Independent Linux', 'Fedora Family Linux', 'IBM AIX', 'IBM i', 'IBM Z System', 'LXD', 'Microsoft Intune for Microsoft Windows', 'Microsoft Windows Desktop', 'Microsoft Windows Server', 'Oracle Linux', 'Oracle Solaris', 'Red Hat Enterprise Linux', 'Robot Operating System (ROS)', 'Rocky Linux', 'SUSE Linux Enterprise Server', 'Ubuntu Linux'].includes(c)),
    'Server Software': checklists.filter(c =>
      ['Apache Cassandra', 'Apache HTTP Server', 'Apache Tomcat', 'BIND', 'Docker', 'IBM Db2', 'IBM WebSphere', 'Kubernetes', 'MariaDB', 'Microsoft IIS', 'Microsoft SharePoint', 'Microsoft SQL Server', 'MIT Kerberos', 'MongoDB', 'NGINX', 'Oracle Database', 'Oracle MySQL', 'PostgreSQL', 'VMware', 'YugabyteDB'].includes(c)),
  };

  const filteredChecklists = categorizedChecklists[categories[value]].filter((checklist) =>
    checklist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Title variant="h4">
          Find your checklist here
        </Title>
        <SearchField
          variant="outlined"
          placeholder="Search..."
          size="small"
          fullWidth
          margin="normal"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth" // Change this to fullWidth to stretch the tabs
        aria-label="full width tabs example"
      >
        {categories.map((category, index) => (
          <StyledTab key={index} label={category} />
        ))}
      </Tabs>
      <PaperContainer>
        <Button variant="contained" color="primary" onClick={handleDownloadAll} style={{ marginBottom: '16px' }}>Download All</Button>
        <List>
          {filteredChecklists.length > 0 ? (
            filteredChecklists.map((checklist, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{checklist}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {windowsDesktopVersions.map((version, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={version} />
                        <IconButton edge="end" aria-label="more" onClick={(event) => handleMenuClick(event, version)}>
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl) && currentVersion === version}
                          onClose={handleMenuClose}
                        >
                          <MenuItem onClick={() => handleMenuOptionClick('Open')}>Open</MenuItem>
                          <MenuItem onClick={() => handleMenuOptionClick('Modify')}>Modify</MenuItem>
                          <MenuItem onClick={() => handleMenuOptionClick('Download')}>Download</MenuItem>
                        </Menu>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <NoResultsText variant="body2">No matching results</NoResultsText>
          )}
        </List>
      </PaperContainer>
    </Container>
  );
};

export default ChecklistTabs;
