import { Box, Button, SvgIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import CloseIcon from '@/assets/icons/close.svg?react';
import NotFoundSrcSet from '@/assets/images/not-found.png?as=srcset&w=300;600;1200&format=avif;webp;png';
import { useFilters } from '@/hooks.ts';

import styles from './NotFound.styles.ts';

function NotFound() {
  const { setFilters } = useFilters();

  return (
    <Box sx={styles.wrapper}>
      <Box
        component="img"
        srcSet={NotFoundSrcSet}
        sizes="(max-width: 767px) 240px, 488px"
        alt="Campers of your dreams"
        sx={styles.image}
      />
      <Box>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          No campers found
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ fontWeight: 500, mb: 5 }}
        >
          We couldn`t find any campers that match your filters.
          <br />
          Try adjusting your search or clearing some filters.
        </Typography>
      </Box>
      <Box sx={styles.actions}>
        <Button
          variant="pillOutlined"
          startIcon={<SvgIcon component={CloseIcon} />}
          onClick={() => setFilters({})}
        >
          Clear fiilters
        </Button>
        <Button variant="pillFilled" component={Link} to="/campers">
          View all campers
        </Button>
      </Box>
    </Box>
  );
}

export default NotFound;
