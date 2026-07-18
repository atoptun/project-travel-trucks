import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

import styles from './AppNavMobile.styles.ts';

interface AppNavMobileProps {
  onClose: () => void;
}

function AppNavMobile({ onClose }: AppNavMobileProps) {
  return (
    <List sx={{ pt: 3 }}>
      <ListItem disablePadding>
        <ListItemButton
          component={NavLink}
          to="/"
          autoFocus
          onClick={onClose}
          sx={styles.link}
        >
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          component={NavLink}
          to="/campers"
          onClick={onClose}
          sx={styles.link}
        >
          <ListItemText primary="Campers" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
export default AppNavMobile;
