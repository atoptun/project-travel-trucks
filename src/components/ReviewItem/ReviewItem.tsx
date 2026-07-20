import { Avatar, Box, Rating, SvgIcon, Typography } from '@mui/material';

import StarIcon from '@/assets/icons/star.svg?react';
import type { ReviewIntf } from '@/types/common';

interface ReviewItemProps {
  review: ReviewIntf;
}

function ReviewItem({ review }: ReviewItemProps) {
  const firstLetter = review.reviewer_name.charAt(0).toUpperCase();

  return (
    <Box
      component="article"
      sx={{
        p: 2,
        backgroundColor: 'custom.inputs',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {/* Caption */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          sx={{
            width: 60,
            height: 60,
            backgroundColor: 'custom.white',
            color: 'custom.greyGreen',
            fontWeight: 500,
            fontSize: '1.5em',
          }}
        >
          {firstLetter}
        </Avatar>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, color: 'custom.main' }}
          >
            {review.reviewer_name}
          </Typography>

          <Rating
            name="review"
            value={review.reviewer_rating}
            readOnly
            icon={<SvgIcon component={StarIcon} fontSize="inherit" />}
            emptyIcon={<SvgIcon component={StarIcon} fontSize="inherit" />}
            precision={0.5}
            size="medium"
            sx={{
              color: 'custom.rating',
              '& .MuiRating-icon': {
                mx: '2px',
              },
              '& .MuiRating-iconEmpty': {
                color: 'custom.grayLight',
              },
              '& .MuiRating-decimal': {
                width: 20,
              },
            }}
          />
        </Box>
      </Box>

      <Typography
        variant="body1"
        sx={{
          color: 'custom.text',
          lineHeight: 1.5,
          fontWeight: 400,
        }}
      >
        {review.comment}
      </Typography>
    </Box>
  );
}
export default ReviewItem;
