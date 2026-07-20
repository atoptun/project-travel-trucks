import { Box, Button, SvgIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import CloseIcon from '@/assets/icons/close.svg?react';
import NotFoundSrcSet from '@/assets/images/not-found.png?as=srcset&w=300;600;1200&format=avif;webp;png';
import { useFilters } from '@/hooks.ts';

import styles from './NotFound.styles.ts';

interface NotFoundProps {
  isPage404?: boolean;
}

function NotFound({ isPage404 = false }: NotFoundProps) {
  const { setFilters } = useFilters();

  const messageContent = isPage404 ? (
    <>
      We couldn't find the campervan you're looking for.
      <br />
      It might have been moved, deleted, or the link is incorrect.
    </>
  ) : (
    <>
      We couldn't find any campers that match your filters.
      <br />
      Try adjusting your search or clearing some filters.
    </>
  );
  return (
    <Box sx={styles.wrapper}>
      <Box
        component="img"
        srcSet={NotFoundSrcSet}
        sizes="(max-width: 767px) 240px, 488px"
        alt="No campers found"
        loading="eager"
        sx={styles.image}
      />
      <Box>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          {isPage404 ? 'Camper van not found' : 'No campers found'}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ fontWeight: 500, mb: 5 }}
        >
          {messageContent}
        </Typography>
      </Box>
      <Box sx={styles.actions}>
        {!isPage404 && (
          <Button
            variant="pillOutlined"
            startIcon={<SvgIcon component={CloseIcon} />}
            onClick={() => setFilters({})}
          >
            Clear fiilters
          </Button>
        )}
        <Button variant="pillFilled" component={Link} to="/campers">
          View all campers
        </Button>
      </Box>
    </Box>
  );
}

export default NotFound;
