import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import heroDesktopAvif from '@/assets/images/hero/avif/hero-desktop.avif';
import heroDesktop2xAvif from '@/assets/images/hero/avif/hero-desktop@2x.avif';
import heroMobileAvif from '@/assets/images/hero/avif/hero-mobile.avif';
import heroMobile2xAvif from '@/assets/images/hero/avif/hero-mobile@2x.avif';
import heroDesktopJpg from '@/assets/images/hero/hero-desktop.jpg';
import heroDesktop2xJpg from '@/assets/images/hero/hero-desktop@2x.jpg';
import heroMobileJpg from '@/assets/images/hero/hero-mobile.jpg';
import heroMobile2xJpg from '@/assets/images/hero/hero-mobile@2x.jpg';
import heroDesktopWebp from '@/assets/images/hero/webp/hero-desktop.webp';
import heroDesktop2xWebp from '@/assets/images/hero/webp/hero-desktop@2x.webp';
import heroMobileWebp from '@/assets/images/hero/webp/hero-mobile.webp';
import heroMobile2xWebp from '@/assets/images/hero/webp/hero-mobile@2x.webp';

import styles from './HeroSection.styles.ts';

function HeroSection() {
  return (
    <Box sx={styles.wrapper}>
      <Box component="picture">
        {/* Desktop */}
        <source
          media="(min-width: 900px)"
          srcSet={`${heroDesktopAvif} 1x, ${heroDesktop2xAvif} 2x`}
          type="image/avif"
        />
        <source
          media="(min-width: 900px)"
          srcSet={`${heroDesktopWebp} 1x, ${heroDesktop2xWebp} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 900px)"
          srcSet={`${heroDesktopJpg} 1x, ${heroDesktop2xJpg} 2x`}
          type="image/jpeg"
        />
        {/* Mobile */}
        <source
          srcSet={`${heroMobileAvif} 1x, ${heroMobile2xAvif} 2x`}
          type="image/avif"
        />
        <source
          srcSet={`${heroMobileWebp} 1x, ${heroMobile2xWebp} 2x`}
          type="image/webp"
        />
        <Box
          component="img"
          src={heroMobileJpg}
          srcSet={`${heroMobile2xJpg} 2x`}
          alt="Campers of your dreams"
          sx={styles.backImg}
        />
      </Box>
      <Box sx={styles.titleWrapper}>
        <Typography variant="h2" component="h1" sx={styles.title}>
          Campers of your dreams
        </Typography>
        <Typography variant="h5" component="p" sx={styles.subTitle}>
          You can find everything you want in our catalog
        </Typography>
        <Button
          component={Link}
          to="/campers"
          variant="pillFilled"
          sx={styles.button}
        >
          View Now
        </Button>
      </Box>
    </Box>
  );
}
export default HeroSection;

// {
//   /* Оверлей із текстом поверх картинки */
// }
<Box
  sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    px: { xs: 3, md: 8 },
    backgroundColor: 'rgba(16, 24, 40, 0.4)', // легке затемнення, щоб текст читався
  }}
>
  <Typography
    variant="h2"
    component="h1"
    sx={{ color: '#fff', fontWeight: 700, mb: 2 }}
  >
    Campers of your dreams
  </Typography>
  <Typography variant="h5" sx={{ color: '#fff', mb: 4, fontWeight: 400 }}>
    You can find everything you want in our catalog
  </Typography>
  <Button
    variant="pillFilled"
    sx={{ selfAlign: 'flex-start', width: 'fit-content' }}
  >
    View Now
  </Button>
</Box>;
