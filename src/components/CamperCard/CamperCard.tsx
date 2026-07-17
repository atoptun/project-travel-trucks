import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectIsFavourite } from '@/redux/favorites/selectors';
import { toggleFavorite } from '@/redux/favorites/slice';
import type { CamperIntf } from '@/types';

// import styles from './CamperCard.styles';

interface CamperCardProps {
  camper: CamperIntf;
}

function CamperCard({ camper }: CamperCardProps) {
  const isFavorite = useAppSelector(selectIsFavourite(camper.id));
  const dispatch = useAppDispatch();

  const handleToggleFav = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <Box>
      <Link to={`/campers/${camper.id}`}>
        {camper.name} -- {camper.location}
      </Link>
      <Button type="button" onClick={handleToggleFav}>
        {isFavorite ? 'fav' : 'not fav'}
      </Button>
    </Box>
  );
}
export default CamperCard;
