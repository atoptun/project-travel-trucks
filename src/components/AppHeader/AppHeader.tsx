import FilterListIcon from '@mui/icons-material/FilterList';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  SvgIcon,
  Toolbar,
} from '@mui/material';
import { useState } from 'react';
import { Link as LinkDom, useLocation } from 'react-router-dom';

import LogoIcon from '@/assets/logo.svg?react';

import AppNav from '../AppNav/AppNav';
import AppNavMobile from '../AppNavMobile/AppNavMobile';
import FilterForm from '../FilterForm/FilterForm';
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
          <LogoLink />
        </Box>

        <AppNav />

        <Box sx={styles.rightBlock}>
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 1 }}>
            {isCatalogPage && (
              <FiltersIcon onClick={() => setMobileFiltersOpen(true)} />
            )}

            <MobileMenuIcon onClick={toggleMobileMenu} />
          </Box>
        </Box>
      </Toolbar>

      <MobileMenuWrapper isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />

      <MobileFiltersWrapper
        isOpen={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
      />
    </AppBar>
  );
}
export default AppHeader;

// Logo

function LogoLink() {
  return (
    <Link component={LinkDom} to="/" sx={{ display: 'block' }}>
      <SvgIcon
        component={LogoIcon}
        inheritViewBox
        sx={{ width: 136 }}
        aria-label="Travel Truck"
      />
    </Link>
  );
}

// Filter icon

function FiltersIcon(props: { onClick: VoidFunction }) {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="filter"
      onClick={props.onClick}
      sx={{ color: 'custom.main' }}
    >
      <FilterListIcon />
    </IconButton>
  );
}

// Mobile menu icon

function MobileMenuIcon(props: { onClick: VoidFunction }) {
  return (
    <IconButton
      edge="end"
      color="inherit"
      aria-label="menu"
      onClick={props.onClick}
      sx={{ color: 'custom.main' }}
    >
      <MenuIcon />
    </IconButton>
  );
}

// Mobile menu drawer

function MobileMenuWrapper(props: { isOpen: boolean; onToggle: VoidFunction }) {
  return (
    <Drawer
      anchor="right"
      open={props.isOpen}
      onClose={props.onToggle}
      slotProps={{
        paper: {
          sx: { width: 250 },
        },
      }}
      ModalProps={{
        disableRestoreFocus: true,
      }}
    >
      <AppNavMobile onClose={props.onToggle} />
    </Drawer>
  );
}

// Mobile filters drawer

function MobileFiltersWrapper(props: {
  isOpen: boolean;
  onClose: VoidFunction;
}) {
  return (
    <Drawer
      anchor="bottom"
      open={props.isOpen}
      onClose={props.onClose}
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
      ModalProps={{
        disableRestoreFocus: true,
      }}
    >
      <FilterForm onClose={props.onClose} />
    </Drawer>
  );
}
