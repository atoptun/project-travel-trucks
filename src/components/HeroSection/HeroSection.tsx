import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import heroDesktopAvif from '@/assets/images/hero-desktop.jpg?as=srcset&w=1440;2880&format=avif';
import heroDesktopJpg from '@/assets/images/hero-desktop.jpg?as=srcset&w=1440;2880&format=jpeg';
import heroDesktopWebp from '@/assets/images/hero-desktop.jpg?as=srcset&w=1440;2880&format=webp';
import heroMobileAvif from '@/assets/images/hero-mobile.jpg?as=srcset&w=375;750&format=avif';
import heroMobileWebp from '@/assets/images/hero-mobile.jpg?as=srcset&w=375;750&format=webp';
import heroMobileFallback from '@/assets/images/hero-mobile.jpg?w=750';

import styles from './HeroSection.styles.ts';

function HeroSection() {
  return (
    <Box sx={styles.wrapper}>
      <Box component="picture">
        {/* Desktop Sources */}
        <source
          media="(min-width: 900px)"
          srcSet={heroDesktopAvif}
          type="image/avif"
        />
        <source
          media="(min-width: 900px)"
          srcSet={heroDesktopWebp}
          type="image/webp"
        />
        <source
          media="(min-width: 900px)"
          srcSet={heroDesktopJpg}
          type="image/jpeg"
        />

        {/* Mobile Sources */}
        <source srcSet={heroMobileAvif} type="image/avif" />
        <source srcSet={heroMobileWebp} type="image/webp" />

        <Box
          component="img"
          src={heroMobileFallback}
          alt="Campers of your dreams"
          loading="eager"
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
