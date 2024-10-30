import { Box, Skeleton, Typography } from '@mui/material';
import React from 'react';

function Product(prop) {
  const { product } = prop;
  return (
    <Box padding={1}>
      <Box padding={1}>
        <img src={product.ImageURL} alt={product.ProductName} width="100%" />
      </Box>
      <Typography variant="body2">{product.ProductName}</Typography>
      <Typography variant="body2">{product.Price} </Typography>
    </Box>
  );
}

export default Product;
