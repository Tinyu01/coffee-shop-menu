import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Box } from '@mui/material';
import ProductService from '../../services/ProductService';

function AddProductPage() {
  const [product, setProduct] = useState({ name: '', price: '', description: '', imageUrl: '', category: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await ProductService.createProduct(product);
    navigate('/admin/products');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Image URL"
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Add Product
        </Button>
      </form>
    </Box>
  );
}

export default AddProductPage;