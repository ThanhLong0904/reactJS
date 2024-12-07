import { Box, Container, Grid, Paper } from '@mui/material';
import { Route, Routes, useMatch, useParams, useResolvedPath } from 'react-router-dom';
import ProductInfo from '../component/ProductInfo';
import ProductThumbnail from '../component/ProductThumbnail';
import useProductDetail from '../Hook/useProductDetail';
import AddToCardForm from '../component/AddToCardForm';
import ProductMenu from '../component/ProductMenu';
import ProductDescription from '../component/ProductDescription';
import ProductAdditional from '../component/ProductAdditional';
import ProductReviews from '../component/ProductReviews';
import Header from 'components/Header';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';

function DetailPage() {
  const match = useParams();
  const { product, loading } = useProductDetail(match.productId);
  if (loading) {
    return <Box>loading</Box>;
  }
  const handleAddToCard = (value) => {
    console.log('handleAddToCard', value);
  };
  return (
    <Box className="detail-page">
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className="thumbnail">
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className="product-info">
              <ProductInfo product={product} />
              <AddToCardForm onSubmit={handleAddToCard} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
        <Routes>
          <Route path="/" element={<ProductDescription product={product} />} />
          <Route path="/additional" element={<ProductAdditional product={product} />} />
          <Route path="/reviews" element={<ProductReviews product={product} />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default DetailPage;
