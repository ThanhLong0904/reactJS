import { Box, Grid, Skeleton } from '@mui/material';
import React from 'react';
import Product from '../Product';

function ProductList(props) {
  const { data = [] } = props;
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.ProductID} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
