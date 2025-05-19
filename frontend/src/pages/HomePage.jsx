import { Typography, Box } from '@mui/material';

function HomePage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to Coffee Shop
      </Typography>
      <Typography variant="body1">
        Explore our delicious menu of coffee and pastries.
      </Typography>
    </Box>
  );
}

export default HomePage;