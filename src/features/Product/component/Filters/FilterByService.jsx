import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';

function FilterByService({ filters = {}, onChange }) {
  const handleChange = (e) => {
    if (!onChange) return;
    const { value, checked } = e.target;
    onChange({
      [value]: checked,
    });
  };
  return (
    <Box className="root-Filter-service">
      <Typography variant="subtitle2" marginBottom={1}>
        CHỌN KHOẢN GIÁ
      </Typography>
      <ul>
        {[
          { value: '_isFreeShip', label: 'miễn phí vận chuyển' },
          { value: '_isPromotion', label: 'Khuyến mãi' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox checked={Boolean(filters[service.value])} onChange={handleChange} value={service.value} />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
