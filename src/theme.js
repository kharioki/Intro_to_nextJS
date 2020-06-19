import { createMuiTheme } from '@material-ui/core/styles';
import { red, teal } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#19857b'
    }
  }
});

export default theme;
