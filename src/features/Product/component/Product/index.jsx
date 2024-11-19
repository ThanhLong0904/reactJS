import { Box, Skeleton, Typography } from '@mui/material';
import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

function Product(prop) {
  const { product } = prop;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.ProductID}`);
  };
  return (
    <Box padding={1} onClick={handleClick}>
      <Box
        padding={1}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{
          minHeight: { xs: '338px', sm: '161px', md: '137px', lg: '129px' },
        }}
      >
        <img src={product.ImageURL} alt={product.ProductName} width="100%" />
      </Box>
      <Typography variant="body2" className="product-name" fontSize={'13px'}>
        {product.ProductName}
      </Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="14px" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.Price)}
        </Box>
        <Box component={'span'} color={'red'} padding={'0'}>
          {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
          {product.FreeShip ? (
            <Typography className="ship" variant="caption">
              Free Ship
            </Typography>
          ) : (
            ''
          )}
        </Box>
      </Typography>
    </Box>
  );
}

export default Product;
