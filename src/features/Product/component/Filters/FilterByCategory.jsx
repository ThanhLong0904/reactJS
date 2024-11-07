import { Category } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import categoryApi from 'api/categoryApi';
import React, { useEffect, useState } from 'react';
import './styles.scss';

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    fetchApiCategory();
  }, []);

  const fetchApiCategory = async () => {
    try {
      const data = await categoryApi.getAll();
      setCategoryList(data);
    } catch (error) {
      console.log('Failed to fetch category');
    }
  };

  const handleCategoryClick = (category) => {
    onChange(category.id);
  };

  return (
    <Box padding={2}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <ul className="menu">
        {categoryList.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
