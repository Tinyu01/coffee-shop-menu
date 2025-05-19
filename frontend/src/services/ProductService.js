import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

const ProductService = {
  getAllProducts: async () => {
    const response = await api.get('/products');
    return response.data;
  },
  getProductById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  createProduct: async (product) => {
    const response = await api.post('/products', product);
    return response.data;
  },
  updateProduct: async (id, product) => {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  },
  deleteProduct: async (id) => {
    await api.delete(`/products/${id}`);
    return true;
  },
  getProductsByCategory: async (category) => {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
  },
  searchProducts: async (name) => {
    const response = await api.get(`/products/search?name=${encodeURIComponent(name)}`);
    return response.data;
  },
};

export default ProductService;