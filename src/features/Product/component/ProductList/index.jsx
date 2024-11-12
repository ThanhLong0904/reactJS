import { Box, Grid, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product';

function ProductList(props) {
  const { data = [] } = props;
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    }
  }, []);
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.ProductID} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
      {data.length === 0 && !isFirstLoad && (
        <Box className="no-product">
          <Typography>không có sản phẩm </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ProductList;
