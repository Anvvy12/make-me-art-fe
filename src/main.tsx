import { StrictMode } from 'react';
import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from './translation/i18';

import App from './App';
import { WhiteTheme } from './mui/white-theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={WhiteTheme}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>
);
