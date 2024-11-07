import { Box } from '@mui/material';
import React from 'react';
import FilterByCategory from '../Filters/FilterByCategory';
import FilterByPrice from '../Filters/FilterByPrice';

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      // ...filters,
      _categoryId: newCategoryId,
    };
    onChange(newFilters);
  };

  const handlePriceChange = (value) => {
    if (!onChange) return;
    onChange(value);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handlePriceChange} />
    </Box>
  );
}

export default ProductFilters;
