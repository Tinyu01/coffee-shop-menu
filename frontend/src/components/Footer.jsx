import { Box, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Coffee Shop. All rights reserved.
          <Link component={RouterLink} to="/" color="inherit" sx={{ ml: 1 }}>
            Home
          </Link>
          {' | '}
          <Link component={RouterLink} to="/products" color="inherit">
            Menu
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;