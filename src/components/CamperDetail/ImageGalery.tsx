import { Box } from '@mui/material';

import camperPlaceholderUrl from '@/assets/icons/placeholder-camper.svg';
import type { GaleryImageIntf } from '@/types/common';

interface ImageGaleryProps {
  images: GaleryImageIntf[];
  activeImage: GaleryImageIntf;
  onImageSelect: (image: GaleryImageIntf) => void;
}

function ImageGalery({ images, activeImage, onImageSelect }: ImageGaleryProps) {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Box
        component="img"
        src={activeImage.original}
        alt="Active camper view"
        sx={{
          width: '100%',
          height: { xs: '260px', sm: '380px', md: '505px' },
          objectFit: 'cover',
          borderRadius: '17px',

          backgroundColor: 'custom.inputs',
          backgroundImage: `url("${camperPlaceholderUrl}")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '40px 40px',

          transition: 'all 0.3s ease',
        }}
      />

      <Box
        component="ul"
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          pb: 1,

          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',

          '&::-webkit-scrollbar': { height: '4px' },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: '4px',
          },
        }}
      >
        {images.map((img, index) => {
          const isActive = img === activeImage;
          return (
            <Box component="li">
              <Box
                key={index}
                component="img"
                src={img.thumb}
                alt={`Camper preview ${index + 1}`}
                onClick={() => onImageSelect(img)}
                sx={{
                  width: { xs: '80px', sm: '100px', md: '136px' },
                  height: { xs: '80px', sm: '100px', md: '144px' },
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  cursor: 'pointer',

                  backgroundColor: 'custom.inputs',
                  backgroundImage: `url("${camperPlaceholderUrl}")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: '40px 40px',

                  border: '3px solid',
                  borderColor: isActive ? '#4E6151' : 'transparent',
                  opacity: isActive ? 1 : 0.7,
                  transition: 'all 0.2s ease',

                  '&:hover': {
                    opacity: 1,
                  },
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
export default ImageGalery;
