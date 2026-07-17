import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useFavorite } from '@/hooks';
import type { CamperIntf } from '@/types';

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
