import { Box, Container, Typography } from '@mui/material';

import styles from './AppFooter.styles.ts';

function AppFooter() {
  return (
    <Box component="footer" sx={styles.footerBox}>
      <Container>
        <Typography>© {new Date().getFullYear()} All right reserved</Typography>
      </Container>
    </Box>
  );
}
export default AppFooter;
