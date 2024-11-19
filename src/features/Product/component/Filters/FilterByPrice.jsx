import './styles.scss';
import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    _minPrice: '',
    _maxPrice: '',
  });
  const [isDisabled, setIsdisabled] = useState(true);

  const formatCurrency = (value) => {
    if (!value) return '';
    return new Intl.NumberFormat('vi-VN', {
      currency: 'VND',
    }).format(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, '');
    setValues((prevValues) => ({
      ...prevValues,
      [name]: numericValue,
    }));
  };

  const handleSubmit = () => {
    if (!onChange) return;

    onChange({
      _minPrice: values._minPrice,
      _maxPrice: values._maxPrice,
    });
  };

  const handleRest = () => {
    setValues({
      _minPrice: '',
      _maxPrice: '',
    });
  };

  useEffect(() => {
    if (values._minPrice !== '' || values._maxPrice !== '') {
      setIsdisabled(false);
    } else {
      setIsdisabled(true);
    }
  }, [values]);

  return (
    <Box className="root-Filter-price">
      <Typography variant="subtitle2" marginBottom={1}>
        CHỌN KHOẢN GIÁ
      </Typography>
      <Box className="form-Filter-Price">
        <TextField
          size="small"
          name="_minPrice"
          value={formatCurrency(values._minPrice)}
          onChange={handleChange}
          placeholder="Giá thấp nhất"
          className="textFieldCustom"
        />
        <span>-</span>
        <TextField
          size="small"
          name="_maxPrice"
          value={formatCurrency(values._maxPrice)}
          onChange={handleChange}
          placeholder="Giá cao nhất"
        />
      </Box>
      <Box className="btn-Price">
        <Button variant="outlined" size="small" onClick={handleSubmit} disabled={isDisabled}>
          Áp dụng
        </Button>
        <Button variant="outlined" size="small" onClick={handleRest}>
          Đặt lại
        </Button>
      </Box>
    </Box>
  );
}

export default FilterByPrice;
