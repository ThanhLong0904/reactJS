import { Box, Tab, Tabs } from '@mui/material';

function ProductSort({ currentSort = false, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={currentSort}
        onChange={handleSortChange}
        aria-label="disabled tabs example"
        sx={{ '& button': { fontSize: '13px' } }}
      >
        <Tab label="giá cao tới thấp" value={'DESC'} />
        <Tab label="Giá thấp tới cao" value={'ASC'} />
      </Tabs>
    </Box>
  );
}

export default ProductSort;
