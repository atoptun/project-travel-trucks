import { Box, Button, Container, Grid } from '@mui/material';

import CamperList from '@/components/CamperList/CamperList';
import FilterForm from '@/components/FilterForm/FilterForm';
import NotFound from '@/components/NotFound/NotFound';
import { useFilters } from '@/hooks';
import { useGetCampersQuery } from '@/redux/campers/apis';

function CampersPage() {
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

  return (
    <Container>
      <Grid container spacing={8}>
        <Grid
          component="aside"
          size={{ xs: 12, md: 4, lg: 3 }}
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Box sx={{ position: 'sticky', top: 100 }}>
            <FilterForm />
          </Box>
        </Grid>
        <Grid component="main" size={{ xs: 12, md: 8, lg: 9 }}>
          {isFetching && <p>Fetching ...</p>}
          {isError && <p>Something went wrong... Try later</p>}
          {campers.length > 0 ? (
            <>
              <CamperList campers={campers} />
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
            </>
          ) : (
            <NotFound />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default CampersPage;
