import { StrictMode } from 'react';
import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from './translation/i18';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import { WhiteTheme } from './mui/white-theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: Number(import.meta.env.VITE_DEFAULT_CACHE_EXPIRATION),
      // cacheTime: Number(process.env.REACT_APP_DEFAULT_CACHE_EXPIRATION),
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={WhiteTheme}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <App />
            <ToastContainer />
          </I18nextProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>
);
