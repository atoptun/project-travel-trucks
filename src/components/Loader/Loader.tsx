import { Box, CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress
        size={60}
        thickness={4}
        sx={{
          color: 'custom.greenHover',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          },
        }}
      />
    </Box>
  );
}
export default Loader;
