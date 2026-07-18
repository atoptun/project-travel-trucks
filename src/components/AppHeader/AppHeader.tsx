import FilterListIcon from '@mui/icons-material/FilterList';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  SvgIcon,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link as LinkDom, useLocation } from 'react-router-dom';

import LogoIcon from '@/assets/logo.svg?react';

import AppNav from '../AppNav/AppNav';
import AppNavMobile from '../AppNavMobile/AppNavMobile';
import styles from './AppHeader.styles';

function AppHeader() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const isCatalogPage = location.pathname === '/campers';

  return (
    <AppBar position="sticky" elevation={0} sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.leftBlock}>
          <Link component={LinkDom} to="/" sx={{ display: 'flex' }}>
            <SvgIcon
              component={LogoIcon}
              inheritViewBox
              sx={{ width: 136 }}
              aria-label="Travel Truck"
            />
          </Link>
        </Box>

        <AppNav />

        <Box sx={styles.rightBlock}>
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 1 }}>
            {isCatalogPage && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="filter"
                onClick={() => setMobileFiltersOpen(true)}
                sx={{ color: 'custom.main' }}
              >
                <FilterListIcon />
              </IconButton>
            )}

            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMobileMenu}
              sx={{ color: 'custom.main' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>

      {/* Mobile menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        slotProps={{
          paper: {
            sx: { width: 250 },
          },
        }}
      >
        <AppNavMobile onClose={toggleMobileMenu} />
      </Drawer>

      {/* Filters */}
      <Drawer
        anchor="bottom"
        open={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        slotProps={{
          paper: {
            sx: {
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              p: 3,
              maxHeight: '80vh',
            },
          },
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Filters
        </Typography>
        {/* Filters here */}
        <Button
          variant="pillFilled"
          fullWidth
          onClick={() => setMobileFiltersOpen(false)}
          sx={{ mt: 2 }}
        ></Button>
      </Drawer>
    </AppBar>
  );
}
export default AppHeader;
