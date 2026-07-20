import { Box, Typography } from '@mui/material';

import type { ReviewIntf } from '@/types/common';

interface ReviewItemProps {
  review: ReviewIntf;
}

function ReviewItem({ review }: ReviewItemProps) {
  return (
    <Box
      component="article"
      sx={{
        p: 3,
        backgroundColor: 'custom.inputs',
        borderRadius: '16px',
        mb: 3,
      }}
    >
      {/* Шапка: Аватар, Ім'я, Зірочки */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        {/* Аватар та Typography */}
      </Box>
      {/* Текст відгуку */}
      <Typography variant="body1">{review.comment}</Typography>
    </Box>
  );
}
export default ReviewItem;
