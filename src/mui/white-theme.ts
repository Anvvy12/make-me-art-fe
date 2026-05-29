import { createTheme } from '@mui/material';
import { muiButton } from './themeUI/muiButton';

export const WhiteTheme = createTheme({
  typography: {
    fontFamily: 'Rubik, Poppins, sans-serif',
    fontSize: 12,
    subtitle1: {
      fontSize: 14,
    },
  },
  palette: { mode: 'light', primary: { main: '#fff' } },
  components: {
    ...muiButton,
  },
});
