import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Typography,
} from '@mui/material';

function TestPage() {
  return (
    <>
      <Box>Home page</Box>
      <Button
        variant="pillFilled"
        color="primary"
        // sx={{ bgcolor: 'ButtonFace' }}
      >
        View Now
      </Button>
      <Button
        variant="pillOutlined"
        // color="secondary"
        // sx={{ bgcolor: 'ButtonFace' }}
      >
        Secondary
      </Button>

      <Typography variant="body1" color="textPrimary">
        Main text
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Main text
      </Typography>

      <Card>
        <CardHeader>
          <Typography>header</Typography>
        </CardHeader>
        <CardContent>content</CardContent>
      </Card>

      <br />
      <Paper>
        <Typography>paper text</Typography>
      </Paper>
    </>
  );
}
export default TestPage;
