import { Box, Card, CardContent, SvgIcon, Typography } from '@mui/material';

import MapIcon from '@/assets/icons/map.svg?react';
import StarIcon from '@/assets/icons/star.svg?react';
import type { CamperIntf } from '@/types/common';

import FavoriteButton from '../FavoriteButton/FavoriteButton.tsx';
import styles from './CamperDetail.styles.ts';

interface MainInfoProps {
  camper: CamperIntf;
}

function MainInfo({ camper }: MainInfoProps) {
  const ratingInfo = `${camper.rating} (${camper.reviews.length} Reviews)`;

  return (
    <Card component="section" variant="outlined" sx={styles.mainCard}>
      <CardContent sx={styles.mainContent}>
        {/* Title */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={styles.mainTitleWrapper}>
            <Typography
              component="h2"
              variant="h5"
              sx={{ fontWeight: 600, lineHeight: 1.33 }}
            >
              {camper.name}
            </Typography>
            <FavoriteButton camperId={camper.id} />
          </Box>

          {/* Rating, Location */}
          <Box sx={styles.mainSubTitle}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <SvgIcon
                component={StarIcon}
                inheritViewBox
                sx={{ color: 'custom.rating', fontSize: 18 }}
              />
              <Typography variant="body2" color="text.primary">
                {ratingInfo}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <SvgIcon
                component={MapIcon}
                inheritViewBox
                sx={{ color: 'custom.main', fontSize: 16 }}
              />
              <Typography variant="body2" color="text.primary">
                {camper.location}
              </Typography>
            </Box>
          </Box>

          <Typography
            component="span"
            variant="h5"
            sx={{ fontWeight: 600, lineHeight: 1.33 }}
          >
            {`€${camper.price.toFixed(2)}`}
          </Typography>
        </Box>

        {/* Description */}
        <Typography variant="body1" color="textSecondary">
          {camper.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default MainInfo;
