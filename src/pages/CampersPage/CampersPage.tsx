import { Box, Button, Container, Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useRef } from 'react';

import CamperList from '@/components/CamperList/CamperList';
import FilterForm from '@/components/FilterForm/FilterForm';
import FullPageLoader from '@/components/FullPageLoader/FullPageLoader';
import { useCampers, useFilters } from '@/hooks.ts';
import { useGetCampersQuery } from '@/redux/campers/apis.ts';

import styles from './CampersPage.styles.ts';

function CampersPage() {
  const listRef = useRef<HTMLDivElement>(null);
  const { enqueueSnackbar } = useSnackbar();
  const { filters, filtersHash, loadMore } = useFilters();

  const { isFetching, isError, hasMore } = useCampers();

  useGetCampersQuery(filters);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [filtersHash]);

  useEffect(() => {
    if (isError) {
      enqueueSnackbar('Something went wrong... Try later', {
        variant: 'error',
      });
    }
  }, [isError, enqueueSnackbar]);

  return (
    <>
      <FullPageLoader open={isFetching} />

      <Container>
        <Grid container spacing={8} ref={listRef}>
          {/* Filters */}
          <Grid
            component="aside"
            size={{ xs: 12, md: 4, lg: 3 }}
            sx={{
              display: { xs: 'none', md: 'block' },
              pt: { md: 6 },
            }}
          >
            <Box sx={styles.filterWrapper}>
              <FilterForm />
            </Box>
          </Grid>

          {/* Campers list */}
          <Grid
            component="main"
            size={{ xs: 12, md: 8, lg: 9 }}
            sx={{
              position: 'relative',
              pt: { xs: 2, sm: 4, md: 6 },
            }}
          >
            <CamperList />
            {hasMore && (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <Button
                  variant="pillOutlined"
                  type="button"
                  onClick={loadMore}
                  sx={{ alignSelf: 'center' }}
                >
                  Load more
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CampersPage;
