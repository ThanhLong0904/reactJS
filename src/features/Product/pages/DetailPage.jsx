import { Box, Container, Grid, Paper } from '@mui/material';
import { addToCart } from 'features/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import AddToCardForm from '../component/AddToCardForm';
import ProductAdditional from '../component/ProductAdditional';
import ProductDescription from '../component/ProductDescription';
import ProductInfo from '../component/ProductInfo';
import ProductMenu from '../component/ProductMenu';
import ProductReviews from '../component/ProductReviews';
import ProductThumbnail from '../component/ProductThumbnail';
import useProductDetail from '../Hook/useProductDetail';

function DetailPage() {
  const match = useParams();
  const { product, loading } = useProductDetail(match.productId);
  const dispatch = useDispatch();
  if (loading) {
    return <Box>loading</Box>;
  }
  const handleAddToCard = (value) => {
    console.log('value1', typeof value.quantity);

    const action = addToCart({
      id: product.id,
      product,
      quantity: Number(value.quantity),
    });
    console.log('action', action);
    dispatch(action);
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
