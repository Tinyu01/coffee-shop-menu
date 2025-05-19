import { useEffect, useState } from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProductService from '../services/ProductService';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getAllProducts().then((data) => setProducts(data));
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Menu
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.imageUrl || 'https://via.placeholder.com/140'}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.price.toFixed(2)}
                </Typography>
                <Typography variant="body2">{product.description}</Typography>
              </CardContent>
              <CardActions>
                <Button component={RouterLink} to={`/products/${product.id}`}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsPage;