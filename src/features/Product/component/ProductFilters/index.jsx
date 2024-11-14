import { Box } from '@mui/material';
import React from 'react';
import FilterByCategory from '../Filters/FilterByCategory';
import FilterByPrice from '../Filters/FilterByPrice';
import FilterByService from '../Filters/FilterByService';

function ProductFilters({ filters, onChange, getCategoryList }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      _categoryId: newCategoryId,
    };
    onChange(newFilters);
  };

  const handleChange = (value) => {
    if (!onChange) return;
    onChange(value);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} getCategoryList={getCategoryList} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
