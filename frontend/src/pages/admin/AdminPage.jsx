import { Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function AdminPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Button component={RouterLink} to="/admin/products" variant="contained">
        Manage Products
      </Button>
    </Box>
  );
}

export default AdminPage;