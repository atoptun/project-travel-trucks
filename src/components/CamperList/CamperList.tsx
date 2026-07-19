import { Grid } from '@mui/material';

import type { CamperIntf } from '@/types/common';

import CamperCard from '../CamperCard/CamperCard';
// import styles from './CamperList.styles'

interface CamperListProps {
  campers: CamperIntf[];
}

function CamperList({ campers }: CamperListProps) {
  return (
    <Grid container spacing={4}>
      {campers.map(item => (
        <Grid key={item.id} size={12}>
          <CamperCard camper={item} />
        </Grid>
      ))}
    </Grid>
  );
}
export default CamperList;
