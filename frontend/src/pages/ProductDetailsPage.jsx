import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import ProductService from '../services/ProductService';

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    ProductService.getProductById(id).then((data) => setProduct(data));
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {product.name}
      </Typography>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={product.imageUrl || 'https://via.placeholder.com/300'}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6">${product.price.toFixed(2)}</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {product.category}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductDetailsPage;