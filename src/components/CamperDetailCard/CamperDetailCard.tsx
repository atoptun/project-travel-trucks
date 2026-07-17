import { Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectIsFavourite } from '@/redux/favorites/selectors';
import { toggleFavorite } from '@/redux/favorites/slice';
import type { CamperIntf } from '@/types';

interface CamperDetailCardProps {
  camper: CamperIntf;
}

function CamperDetailCard({ camper }: CamperDetailCardProps) {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector(selectIsFavourite(camper.id));

  const handleToggleFav = () => {
    dispatch(toggleFavorite(camper.id));
  };
  return (
    <>
      <div>CamperDetailCard</div>
      <p>{camper.id}</p>
      <p>{camper.name}</p>
      <Button type="button" onClick={handleToggleFav}>
        {isFavorite ? 'fav' : 'not fav'}
      </Button>
    </>
  );
}
export default CamperDetailCard;
