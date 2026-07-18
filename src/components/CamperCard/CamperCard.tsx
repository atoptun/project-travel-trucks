import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useFavorite } from '@/hooks';
import type { CamperIntf } from '@/types/common';

// import styles from './CamperCard.styles';

interface CamperCardProps {
  camper: CamperIntf;
}

function CamperCard({ camper }: CamperCardProps) {
  const [isFavorite, toggleFav] = useFavorite(camper.id);

  return (
    <Box>
      <Link to={`/campers/${camper.id}`}>
        {camper.name} -- {camper.location}
      </Link>
      <Button type="button" onClick={toggleFav}>
        // TODO: spec button
        {isFavorite ? 'fav' : 'not fav'}
      </Button>
    </Box>
  );
}
export default CamperCard;

// TODO: remove after implementation

/**
import { Card, CardMedia, CardContent, Typography, Box, Button, Stack, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // або ваш кастомний ікон-пак

function VehicleCard() {
  return (
    <Card 
      variant="outlined" 
      component="article" // Семантично вся картка — це незалежна стаття/картка товару
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, // адаптивно: на мобілках вертикально, далі горизонтально
        p: 3, 
        borderRadius: 4, 
        borderColor: 'gray.light', // ваша змірна --gray-light
        gap: 3 
      }}
    >
      {/* 1. Зображення зліва /}
      <CardMedia
        component="img"
        image="/path-to-van-image.jpg"
        alt="Mavericks panel truck"
        sx={{ 
          width: { xs: '100%', sm: 290 }, 
          height: 240, 
          borderRadius: 3,
          objectFit: 'cover'
        }}
      />

      {/* 2. Контентна частина справа /}
      <CardContent sx={{ flex: 1, p: 0, '&:last-child': { pb: 0 } }}>
        
        {/* Рядок: Назва + Ціна /}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 1 }}>
          <Typography component="h2" variant="h5" sx={{ fontWeight: 600, color: 'custom.main' }}>
            Mavericks
          </Typography>
          <Typography component="span" variant="h5" sx={{ fontWeight: 600, color: 'custom.main' }}>
            €8000
          </Typography>
        </Box>

        {/* Рядок: Рейтинг та Локація /}
        <Stack direction="row" spacing={2} sx={{ mb: 3, alignItems: 'center' }}>
          {/* Рейтинг /}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <StarIcon sx={{ color: 'custom.rating', fontSize: 18 }} />
            <Typography variant="body2" color="text.primary">4.4 (2 Reviews)</Typography>
          </Box>
          {/* Локація /}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOnIcon sx={{ color: 'custom.main', fontSize: 18 }} />
            <Typography variant="body2" color="text.primary">Kyiv, Ukraine</Typography>
          </Box>
        </Stack>

        {/* Опис /}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </Typography>

        {/* Беджі (Характеристики) /}
        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
          <Chip label="Petrol" variant="customBadge" /> 
          <Chip label="Automatic" variant="customBadge" />
          <Chip label="Alcove" variant="customBadge" />
        </Stack>

        {/* Кнопка дії /}
        <Button variant="pillFilled">
          Show more
        </Button>

      </CardContent>
    </Card>
  );
} 
*/

// =====================

// import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

// function ResponsiveVehicleCard() {
//   return (
//     <Card
//       variant="outlined"
//       component="article"
//       sx={{
//         display: 'flex',
//         // Mobile-first: за замовчуванням (xs) — стовпчик. Від sm і вище — рядок.
//         flexDirection: { xs: 'column', sm: 'row' },
//         p: 3,
//         borderRadius: 4,
//         gap: 3,
//         // Адаптивна максимальна ширина для всієї картки
//         maxWidth: { xs: '100%', sm: 800 },
//       }}
//     >
//       {/* 1. Зображення */}
//       <CardMedia
//         component="img"
//         image="/path-to-van-image.jpg"
//         alt="Mavericks panel truck"
//         sx={{
//           // На мобілках займає всю ширину, на десктопі — фіксовану
//           width: { xs: '100%', sm: 290 },
//           // На мобілках робимо трохи нижчим, щоб не перекривало екран
//           height: { xs: 180, sm: 240 },
//           borderRadius: 3,
//           objectFit: 'cover',
//         }}
//       />

//       {/* 2. Контент */}
//       <CardContent
//         sx={{
//           flex: 1,
//           p: 0,
//           '&:last-child': { pb: 0 },
//           // Можна навіть міняти внутрішнє вирівнювання тексту
//           textAlign: { xs: 'center', sm: 'left' },
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             // На мобілці назва і ціна можуть бути один під одним, на sm — в один рядок
//             flexDirection: { xs: 'column', sm: 'row' },
//             justifyContent: 'space-between',
//             alignItems: { xs: 'center', sm: 'baseline' },
//             mb: 1,
//           }}
//         >
//           <Typography component="h2" variant="h5" sx={{ fontWeight: 600 }}>
//             Mavericks
//           </Typography>
//           <Typography component="span" variant="h5" sx={{ fontWeight: 600 }}>
//             €8000
//           </Typography>
//         </Box>

//         {/* Решта контенту */}
//       </CardContent>
//     </Card>
//   );
// }
