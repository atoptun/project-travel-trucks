import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

import { useFavorite } from '@/hooks';

interface FavoriteButtonProps {
  camperId: string;
}
function FavoriteButton({ camperId }: FavoriteButtonProps) {
  const [isFavorite, toggle] = useFavorite(camperId);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggle();
  };

  return (
    <IconButton
      onClick={handleClick}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      sx={{
        color: isFavorite ? '#E44848' : '#101828',
        padding: '8px',
        transition: 'transform 0.2s ease-in-out, color 0.2s ease',

        '&:hover': {
          backgroundColor: 'rgba(228, 72, 72, 0.04)',
          transform: 'scale(1.05)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
      }}
    >
      {isFavorite ? (
        <FavoriteIcon sx={{ fontSize: '24px' }} />
      ) : (
        <FavoriteBorderIcon sx={{ fontSize: '24px' }} />
      )}
    </IconButton>
  );
}
export default FavoriteButton;
