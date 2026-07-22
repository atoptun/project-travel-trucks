import { Box, Typography } from '@mui/material';

import type { ReviewIntf } from '@/types/common';

import ReviewItem from '../ReviewItem/ReviewItem';

interface ReviewListProps {
  reviews: ReviewIntf[];
}

function ReviewList({ reviews = [] }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
        No reviews yet for this campervan.
      </Typography>
    );
  }

  return (
    <Box
      component="ul"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 2, sm: 3 },
        width: '100%',
      }}
    >
      {reviews.map((review, index) => (
        <Box component="li" key={index}>
          <ReviewItem review={review} />
        </Box>
      ))}
    </Box>
  );
}
export default ReviewList;
