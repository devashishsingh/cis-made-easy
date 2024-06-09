import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#024861', // Change this to your desired primary color
    },
    secondary: {
      main: '#dc004e', // Change this to your desired secondary color
    },
    background: {
      default: '#D5DBDB', // Change this to your desired background color
    },
    text: {
      primary: '#A04000', // Change this to your desired text color
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
