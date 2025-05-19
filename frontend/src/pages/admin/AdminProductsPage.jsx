import { useEffect, useState } from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProductService from '../../services/ProductService';

function AdminProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getAllProducts().then((data) => setProducts(data));
  }, []);

  const handleDelete = async (id) => {
    await ProductService.deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Manage Products
      </Typography>
      <Button component={RouterLink} to="/admin/products/new" variant="contained" sx={{ mb: 2 }}>
        Add New Product
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>
                <Button component={RouterLink} to={`/admin/products/edit/${product.id}`}>
                  Edit
                </Button>
                <Button color="error" onClick={() => handleDelete(product.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default AdminProductsPage;