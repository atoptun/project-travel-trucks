import { Box } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// import AppFooter from '../AppFooter/AppFooter';
import AppHeader from '../AppHeader/AppHeader';
import * as styles from './AppLayout.styles';

function AppLayout() {
  return (
    <Box sx={styles.baseBox}>
      <AppHeader />

      <Box sx={{ flexGrow: 1 }}>
        <Suspense fallback={'loading...'}>
          <Outlet />
        </Suspense>
      </Box>

      {/* <AppFooter /> */}
    </Box>
  );
}
export default AppLayout;
