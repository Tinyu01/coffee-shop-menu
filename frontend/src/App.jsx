import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AdminPage from './pages/admin/AdminPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AddProductPage from './pages/admin/AddProductPage';
import EditProductPage from './pages/admin/EditProductPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Navbar />
      <Container component="main" sx={{ py: 4, minHeight: 'calc(100vh - 140px)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/products/new" element={<AddProductPage />} />
          <Route path="/admin/products/edit/:id" element={<EditProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;