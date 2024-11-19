import { Box } from '@mui/material';
import React from 'react';

function ProductThumbnail({ product }) {
  return (
    <Box>
      <img src={product.ImageURL} alt={product.ProductName} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
