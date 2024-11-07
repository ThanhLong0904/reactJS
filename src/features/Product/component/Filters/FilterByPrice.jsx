import { Box, Button, Typography } from '@mui/material';
import { TextField } from '@mui/material';

import React, { useState } from 'react';

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (!onChange) return;
    onChange(values);
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  return (
    <Box>
      <Typography variant="subtitle2">Giá</Typography>
      <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
      <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
      <Button variant="outlined" onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
