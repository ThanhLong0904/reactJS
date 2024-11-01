import { Tab, Tabs } from '@mui/material';

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs
      value={currentSort}
      onChange={handleSortChange}
      aria-label="disabled tabs example"
      sx={{ '& button': { fontSize: '13px' } }}
    >
      <Tab label="giá cao tới thấp" value={'DESC'} />
      <Tab label="Giá thấp tới cao" value={'ASC'} />
    </Tabs>
  );
}

export default ProductSort;
