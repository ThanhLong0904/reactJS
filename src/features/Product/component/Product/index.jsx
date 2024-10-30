import { Box, Skeleton, Typography } from '@mui/material';
import React from 'react';

function Product(prop) {
  const { product } = prop;
  return (
    <Box padding={1}>
      <Skeleton variant="rectangular" width={'100%'} height={118} />
      <Typography variant="body2">{product.ProductName}</Typography>
      <Typography variant="body2">{product.Price} </Typography>
    </Box>
  );
}

export default Product;
