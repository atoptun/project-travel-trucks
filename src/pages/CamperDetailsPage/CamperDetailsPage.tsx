import { Box, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import BookingForm from '@/components/BookingForm/BookingForm';
import CamperDetail from '@/components/CamperDetail/CamperDetail';
import Loader from '@/components/Loader/Loader';
import NotFound from '@/components/NotFound/NotFound';
import ReviewList from '@/components/ReviewList/ReviewList';
import { useGetCamperByIdQuery } from '@/redux/campers/apis';

function CamperDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isError, isLoading, error } = useGetCamperByIdQuery(id || '', {
    skip: !id,
  });

  if (isError && error && 'status' in error && error?.status === 404)
    return <NotFound isPage404={true} />;

  if (isError) {
    return (
      <Box component="main" sx={{ py: 8, textAlign: 'center' }}>
        <Typography color="error">Something went wrong. Try later.</Typography>
      </Box>
    );
  }

  return (
    <>
      {isLoading && <Loader />}

      {data && (
        <Box component="main" sx={{ py: { xs: 4, md: 8 } }}>
          <Container>
            <Box
              component="section"
              aria-label="Camper presentation"
              sx={{
                mb: { xs: 5, md: 11 },
              }}
            >
              <CamperDetail camper={data} />
            </Box>

            <Box component="section" aria-label="Reviews and booking">
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: 600, mb: 4 }}
              >
                Reviews
              </Typography>
              <Grid container spacing={{ xs: 4, md: 8 }}>
                <Grid size={{ xs: 12, md: 7, lg: 8 }}>
                  <ReviewList reviews={data.reviews} />
                </Grid>

                <Grid size={{ xs: 12, md: 5, lg: 4 }}>
                  {/* Форму можна зробити липкою (sticky), щоб при скролі відгуків вона не зникала */}
                  <Box sx={{ position: 'sticky', top: 100 }}>
                    <BookingForm camperId={data?.id} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}
export default CamperDetailsPage;
