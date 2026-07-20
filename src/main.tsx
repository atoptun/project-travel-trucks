import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.tsx';
import { persistor, store } from './redux/store';
import { theme } from './themes/theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <SnackbarProvider
              maxSnack={3}
              autoHideDuration={5000}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <App />
            </SnackbarProvider>
          </CssBaseline>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
