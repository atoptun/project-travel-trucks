import { Grid } from '@mui/material';
import { useState } from 'react';

// import { useFavorite } from '@/hooks';
import type { CamperIntf } from '@/types/common';

import ImageGalery from './ImageGalery';
import MainInfo from './MainInfo';
import VehicleDetails from './VehicleDetails';

interface CamperDetailProps {
  camper: CamperIntf;
}

function CamperDetail({ camper }: CamperDetailProps) {
  const [activeImage, setActiveImage] = useState(camper.gallery[0]);

  // const [isFavorite, toggleFavorite] = useFavorite(camper.id);

  // const handleToggleFav = () => {
  //   toggleFavorite();
  // };
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 1 } }}>
          <ImageGalery
            images={camper.gallery}
            activeImage={activeImage}
            onImageSelect={setActiveImage}
          ></ImageGalery>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            order: { xs: 2, md: 2 },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <MainInfo camper={camper} />
          <VehicleDetails camper={camper} />
        </Grid>
      </Grid>
    </>
  );
}
export default CamperDetail;
