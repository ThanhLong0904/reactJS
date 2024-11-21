import { Box, Typography } from '@mui/material';
import React from 'react';
import { formatPrice } from 'utils';
import './styles.scss';
function ProductInfo({ product }) {
  const { ProductName, Description, Price, OriginalPrice, promotionPercent } = product;
  return (
    <Box className="product-info-box">
      <Typography component="h1" variant="h4" className="product-name">
        {ProductName}
      </Typography>
      <Typography variant="body2">{Description}</Typography>
      <Box className="price-box">
        <Box component="span" className="price">
          {formatPrice(Price)}
        </Box>
        {OriginalPrice !== Price && (
          <>
            <Box component="span" className="OriginalPrice">
              {formatPrice(OriginalPrice)}
            </Box>
            <Box component="span" className="promotion-percent">
              {promotionPercent > 0 ? `-${promotionPercent}%` : ''}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
