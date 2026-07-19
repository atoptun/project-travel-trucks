import { Backdrop, CircularProgress, Paper, Typography } from '@mui/material';

interface FullPageLoaderProps {
  open: boolean;
}

function FullPageLoader({ open }: FullPageLoaderProps) {
  return (
    <Backdrop
      open={open}
      sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(223, 223, 223, 0.44)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
          width: '100%',
          maxWidth: 543,
          borderRadius: '16px',
          textAlign: 'center',
          mx: 2,
        }}
      >
        <CircularProgress
          size={60}
          thickness={4}
          sx={{
            color: 'custom.greenHover',
            mb: 3,
            '& .MuiCircularProgress-circle': {
              strokeLinecap: 'round',
            },
          }}
        />
        <Typography variant="h5" component="p" sx={{ fontWeight: 600, mb: 2 }}>
          Loading tracks...
        </Typography>

        <Typography
          variant="body1"
          color="textPrimary"
          sx={{ fontWeight: 500, px: 2 }}
        >
          Please wait while we fetch the best travel trucks for you
        </Typography>
      </Paper>
    </Backdrop>
  );
}
export default FullPageLoader;
