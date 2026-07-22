import { Link, List, ListItem, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

import styles from './AppNav.styles';

function AppNav() {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={4}
      sx={{ display: { xs: 'none', sm: 'flex' } }}
    >
      <List sx={{ display: 'flex' }}>
        <ListItem>
          <Link component={NavLink} to="/" sx={styles.link}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link component={NavLink} to="/campers" sx={styles.link}>
            Campers
          </Link>
        </ListItem>
      </List>
    </Stack>
  );
}
export default AppNav;
