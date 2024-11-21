import { Box, Container, Grid, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductInfo from '../component/ProductInfo';
import ProductThumbnail from '../component/ProductThumbnail';
import useProductDetail from '../Hook/useProductDetail';

function DetailPage() {
  const match = useParams();

  const { product, loading } = useProductDetail(match.productId);
  if (loading) {
    return <Box>loading</Box>;
  }

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
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
