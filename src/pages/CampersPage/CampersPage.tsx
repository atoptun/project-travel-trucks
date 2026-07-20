import { Box, Button, Container, Grid } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

import CamperList from '@/components/CamperList/CamperList';
import FilterForm from '@/components/FilterForm/FilterForm';
import FullPageLoader from '@/components/FullPageLoader/FullPageLoader';
import NotFound from '@/components/NotFound/NotFound';
import { useFilters } from '@/hooks';
import { useGetCampersQuery } from '@/redux/campers/apis';

import styles from './CampersPage.styles.ts';

function CampersPage() {
  const { enqueueSnackbar } = useSnackbar();
  const { filters, loadMore } = useFilters();

  const { campers, hasMore, isFetching, isError } = useGetCampersQuery(
    filters,
    {
      selectFromResult: ({ data, isFetching, isError, error }) => ({
        campers: data?.items ?? [],
        hasMore: (data?.total ?? 0) > (data?.items ?? []).length,
        isFetching,
        isError,
        error,
      }),
    },
  );

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
        <Grid container spacing={8}>
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
            {isFetching && campers.length === 0 ? null : campers.length > 0 ? (
              <>
                <CamperList campers={campers} />
                {hasMore && (
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', my: 2 }}
                  >
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
              </>
            ) : (
              <NotFound />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CampersPage;
