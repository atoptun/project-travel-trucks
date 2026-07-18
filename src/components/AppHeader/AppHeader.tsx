import { AppBar, Box, SvgIcon, Toolbar } from '@mui/material';

import LogoIcon from '@/assets/logo.svg?react';

import AppNav from '../AppNav/AppNav';
import styles from './AppHeader.styles';

function AppHeader() {
  return (
    <AppBar position="sticky" elevation={0} sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <SvgIcon
            component={LogoIcon}
            inheritViewBox
            sx={{ width: 136 }}
            aria-label="Travel Truck"
          />
        </Box>
        <AppNav />
        <Box
          sx={{
            flex: 1,
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'flex-end',
          }}
        >
          // TODO: mobile buttons
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default AppHeader;

// TODO: remove

// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Box, Stack, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import FilterListIcon from '@mui/icons-material/FilterList'; // Іконка для фільтрів

// function Header({ isCatalogPage }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false); // якщо фільтри відкриваються в Drawer

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   return (
//     <AppBar
//       position="static"
//       elevation={0}
//       sx={{
//         backgroundColor: '#f7f7f7', // ваша змірна --inputs або світле тло з макету
//         borderBottom: '1px solid',
//         borderColor: 'gray.light', // --gray-light
//         px: { xs: 1, sm: 4 } // адаптивні відступи
//       }}
//     >
//       <Toolbar sx={{ justifyContent: 'space-between', p: 0 }}>

//         {/* ЛОГОТИП */}
//         <Typography
//           variant="h6"
//           component="div"
//           sx={{ fontWeight: 700, color: 'custom.main' }} // TravelTrucks
//         >
//           Travel<Box component="span" sx={{ color: 'text.secondary' }}>Trucks</Box>
//         </Typography>

//         {/* ДЕСКТОПНА НАВІГАЦІЯ (ховається на мобільних через display) */}
//         <Stack
//           direction="row"
//           spacing={4}
//           sx={{ display: { xs: 'none', sm: 'flex' } }}
//         >
//           {/* Замапте кольори під активний/неактивний стан з вашого скріншоту */}
//           <Button sx={{ color: 'grey.green', textTransform: 'none', fontWeight: 500 }}>Home</Button>
//           <Button sx={{ color: 'custom.main', textTransform: 'none', fontWeight: 500 }}>Catalog</Button>
//         </Stack>

//         {/* МОБІЛЬНІ КНОПКИ ДІЇ (показуються лише на xs) */}
//         <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 1 }}>

//           {/* Кнопка фільтрів: показується ТОК В КАТАЛОЗІ */}
//           {isCatalogPage && (
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="filter"
//               onClick={() => setMobileFiltersOpen(true)}
//               sx={{ color: 'custom.main' }}
//             >
//               <FilterListIcon />
//             </IconButton>
//           )}

//           {/* Кнопка-бургер для навігації сторінками (всюди) */}
//           <IconButton
//             edge="end"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleMobileMenu}
//             sx={{ color: 'custom.main' }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Box>

//       </Toolbar>

//       {/* МОБІЛЬНЕ МЕНЮ (НАВІГАЦІЯ В DRAWER) */}
//       <Drawer
//         anchor="right"
//         open={mobileMenuOpen}
//         onClose={toggleMobileMenu}
//         PaperProps={{ sx: { width: 250 } }}
//       >
//         <List sx={{ pt: 3 }}>
//           <ListItem disablePadding>
//             <ListItemButton onClick={toggleMobileMenu}>
//               <ListItemText primary="Home" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton onClick={toggleMobileMenu}>
//               <ListItemText primary="Catalog" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </Drawer>

//       {/* МЕНЮ ФІЛЬТРІВ ДЛЯ МОБІЛКИ (Окремий Drawer) */}
//       <Drawer
//         anchor="bottom" // для фільтрів на мобільних дуже зручно відкривати знизу вгору
//         open={mobileFiltersOpen}
//         onClose={() => setMobileFiltersOpen(false)}
//         PaperProps={{ sx: { borderTopLeftRadius: 16, borderTopRightRadius: 16, p: 3, maxHeight: '80vh' } }}
//       >
//         <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Фільтри</Typography>
//         {/* Сюди вставляєте ваш компонент з фільтрами (чекбокси, локейшн тощо) */}
//         <Button variant="pillFilled" fullWidth onClick={() => setMobileFiltersOpen(false)} sx={{ mt: 2 }}>
//           Показати результати
//         </Button>
//       </Drawer>

//     </AppBar>
//   );
// }

// export default Header;
