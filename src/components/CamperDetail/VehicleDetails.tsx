import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from '@mui/material';

import { createVehicleBadgesList, createVehicleSpecsList } from '@/helpers.ts';
import type { CamperIntf, VehicleBadge, VehicleSpec } from '@/types/common';

import styles from './CamperDetail.styles.ts';

interface VehicleDetailsProps {
  camper: CamperIntf;
}

function VehicleDetails({ camper }: VehicleDetailsProps) {
  const specs = createVehicleSpecsList(camper);

  const badges = createVehicleBadgesList(camper);

  return (
    <Card variant="outlined" sx={styles.detailsCard}>
      <CardContent sx={styles.detailsContent}>
        {/* Title */}
        <Typography
          component="h2"
          variant="h5"
          sx={{ fontWeight: 600, lineHeight: 1.33 }}
        >
          Vehicle details
        </Typography>

        <BadgesList badges={badges} />

        <Divider sx={{ color: 'custom.grayLight' }} />

        <VehicleDetailsTable list={specs} />
      </CardContent>
    </Card>
  );
}
export default VehicleDetails;

// Bages

function BadgesList({ badges }: { badges: VehicleBadge[] }) {
  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {badges.map(({ key, label }) => {
        return <Badge key={key} label={label} />;
      })}
    </Box>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <Chip
      label={label}
      variant="filled"
      sx={{
        py: 2.5,
        px: 1,
        fontSize: '1em',
        fontWeight: 500,
        borderRadius: '50px',
        textTransform: 'capitalize',
        backgroundColor: 'custom.badges',
        mixBlendMode: 'multiply',
      }}
    />
  );
}

// Vehicle details

function VehicleDetailsTable({ list }: { list: VehicleSpec[] }) {
  return (
    <Box
      component="dl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        m: 0,
        width: '100%',
      }}
    >
      {list.map(item => (
        <Box
          key={item.label}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
            m: 0,
          }}
        >
          <Typography
            component="dt"
            variant="body1"
            sx={{ fontWeight: 500, color: 'text.primary' }}
          >
            {item.label}
          </Typography>

          <Typography
            component="dd"
            variant="body1"
            sx={{ fontWeight: 500, color: 'text.primary', m: 0 }}
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
