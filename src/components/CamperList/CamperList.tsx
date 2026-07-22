import { Grid } from '@mui/material';

import { useCampers } from '@/hooks';

import CamperCard from '../CamperCard/CamperCard';
import NotFound from '../NotFound/NotFound';

function CamperList() {
  const { campers, isFetching } = useCampers();

  if (isFetching && campers.length === 0) return null;

  return (
    <Grid container spacing={4} component="ul">
      {campers.length > 0 ? (
        <>
          {campers.map(item => (
            <Grid key={item.id} size={12} component="li">
              <CamperCard camper={item} />
            </Grid>
          ))}
        </>
      ) : (
        <NotFound />
      )}
    </Grid>
  );
}
export default CamperList;
