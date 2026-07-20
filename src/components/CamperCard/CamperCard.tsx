import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  SvgIcon,
  Typography,
} from '@mui/material';
import type { ComponentType } from 'react';
import { Link as DomLink } from 'react-router-dom';

import AlcoveIcon from '@/assets/icons/alcove.svg?react';
import AutomaticIcon from '@/assets/icons/automatic.svg?react';
import MapIcon from '@/assets/icons/map.svg?react';
import PetrolIcon from '@/assets/icons/petrol.svg?react';
import StarIcon from '@/assets/icons/star.svg?react';
// import { useFavorite } from '@/hooks';
import type { CamperIntf } from '@/types/common';

import FavoriteButton from '../FavoriteButton/FavoriteButton';
import styles from './CamperCard.styles';

interface CamperCardProps {
  camper: CamperIntf;
}

function CamperCard({ camper }: CamperCardProps) {
  // TODO: empty svg image ;
  const imgUrl =
    camper?.gallery?.length > 0 ? camper.gallery[0].thumb : 'empty';
  const ratingInfo = `${camper.rating} (${camper.reviews.length} Reviews)`;
  return (
    <Card variant="outlined" component="article" sx={styles.card}>
      {/* Image */}
      <Box sx={styles.imageWrapper}>
        <CardMedia
          component="img"
          image={imgUrl}
          alt={camper.name}
          sx={styles.image}
        />
      </Box>

      {/* Content */}
      <CardContent sx={styles.content}>
        {/* Title */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={styles.titleWrapper}>
            <Typography component="h2" variant="h5" sx={styles.title}>
              {camper.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography component="span" variant="h5" sx={styles.title}>
                {`€${camper.price.toFixed(2)}`}
              </Typography>
              <FavoriteButton camperId={camper.id} />
            </Box>
          </Box>

          {/* Rating, Location */}
          <Box sx={styles.subTitleWrapper}>
            <Box sx={styles.subTitle}>
              <SvgIcon
                component={StarIcon}
                inheritViewBox
                sx={{ color: 'custom.rating', fontSize: 18 }}
              />
              <Typography variant="body2" color="text.primary">
                {ratingInfo}
              </Typography>
            </Box>
            <Box sx={styles.subTitle}>
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
        </Box>

        {/* Description */}
        <Typography variant="body1" color="textSecondary">
          {camper.description}
        </Typography>

        {/* Badges */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Badge label={camper.engine} Icon={PetrolIcon}></Badge>
          <Badge label={camper.transmission} Icon={AutomaticIcon}></Badge>
          <Badge label={camper.form} Icon={AlcoveIcon}></Badge>
        </Box>

        {/* Actions */}
        <Box>
          <Button
            component={DomLink}
            to={`/campers/${camper.id}`}
            variant="pillFilled"
          >
            Show more
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
export default CamperCard;

// Badge

interface BadgeProps {
  label: string;
  Icon: ComponentType;
}

function Badge({ label, Icon }: BadgeProps) {
  return (
    <Chip
      label={label}
      variant="filled"
      icon={<SvgIcon component={Icon} sx={{ fontSize: '1.3em' }} />}
      sx={{
        fontSize: '1em',
        fontWeight: 500,
        pl: 2,
        pr: 2,
        py: 3,
        borderRadius: '50px',
        textTransform: 'capitalize',
      }}
    />
  );
}
