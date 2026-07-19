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
        {/* Filters */}
        <Grid
          component="aside"
          size={{ xs: 12, md: 4, lg: 3 }}
          sx={{
            display: { xs: 'none', md: 'block' },
            pt: { md: 6 },
          }}
        >
          <Box
            sx={{
              position: 'sticky',
              top: 100,
              maxHeight: 'calc(100vh - 124px)',
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '4px',
              },
            }}
          >
            <FilterForm />
          </Box>
        </Grid>

        {/* Campers list */}
        <Grid
          component="main"
          size={{ xs: 12, md: 8, lg: 9 }}
          sx={{
            pt: { xs: 2, sm: 4, md: 6 },
          }}
        >
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
