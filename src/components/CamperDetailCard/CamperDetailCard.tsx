import { Button } from '@mui/material';

import { useFavorite } from '@/hooks';
import type { CamperIntf } from '@/types/common';

interface CamperDetailCardProps {
  camper: CamperIntf;
}

function CamperDetailCard({ camper }: CamperDetailCardProps) {
  const [isFavorite, toggleFavorite] = useFavorite(camper.id);

  // const handleToggleFav = () => {
  //   toggleFavorite();
  // };
  return (
    <>
      <div>CamperDetailCard</div>
      <p>{camper.id}</p>
      <p>{camper.name}</p>
      <Button type="button" onClick={toggleFavorite}>
        // TODO: spec button
        {isFavorite ? 'fav' : 'not fav'}
      </Button>
    </>
  );
}
export default CamperDetailCard;
