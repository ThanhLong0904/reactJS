import { Box, Container, Grid, Paper, Skeleton } from '@mui/material';
import productsApi from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductSkeletonList from '../component/Skeleton';
import ProductList from '../component/ProductList';

function ListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // lưu ý gọi API phải đặt try catch.
    try {
      (async () => {
        const { data } = await productsApi.getAll();
        setProductList(data);
      })();
    } catch (error) {
      console.log('Failed to fetch product list', error);
    }
    setLoading(false);
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item sx={{ width: '250px' }}>
            <Paper elevation={0}>left colum</Paper>
          </Grid>
          <Grid item sx={{ flex: '1 1 0' }}>
            <Paper elevation={0}>
              {loading ? <ProductSkeletonList length={5} /> : <ProductList data={productList} />}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
