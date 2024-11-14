import { Box, Chip } from '@mui/material';
import { useMemo } from 'react';

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => 'Miễn phí vận chuyển',
    isActive: (filters) => filters._isFreeShip,
    isVisible: () => true,
    isRemove: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilter = { ...filters };
      if (newFilter._isFreeShip) {
        newFilter._isFreeShip = false;
      } else {
        newFilter._isFreeShip = true;
      }
      return newFilter;
    },
  },
  {
    id: 2,
    getLabel: () => 'Khuyến mãi',
    isActive: () => true,
    isVisible: (filters) => filters._isPromotion,
    isRemove: true,
    onRemove: (filter) => {
      const newFilter = { ...filter };
      if (newFilter._isPromotion) {
        newFilter._isPromotion = false;
      }
      return newFilter;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (filters, categoryList) => {
      const newFilter = categoryList.find((x) => x.id === filters._categoryId);
      return newFilter?.name;
    },
    isActive: () => true,
    isVisible: (filters) => filters._categoryId,
    isRemove: true,
    onRemove: (filter) => {
      const newFilter = { ...filter };
      newFilter._categoryId = '';
      return newFilter;
    },
    onToggle: () => {},
  },
  {
    id: 4,
    getLabel: (filters) => {
      const formatCurrency = new Intl.NumberFormat('vi-VN', {
        currency: 'VND',
      });
      const minPrice = formatCurrency.format(filters._minPrice);
      const maxPrice = filters._maxPrice ? formatCurrency.format(filters._maxPrice) : 'giá cao nhất';
      return `Giá ${minPrice} đến ${maxPrice}`;
    },
    isActive: () => true,
    isVisible: (filters) => filters._minPrice || filters._maxPrice,
    isRemove: true,
    onRemove: (filter) => {
      const newFilter = { ...filter };
      newFilter._minPrice = '';
      newFilter._maxPrice = '';
      return newFilter;
    },
    onToggle: () => {},
  },
];

function FilterViewer({ onChange, filters, categoryList }) {
  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);
  return (
    <Box component="ul" className="filter-viewer">
      {visibleFilters.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters, categoryList)}
            color={x.isActive(filters) ? 'primary' : 'default'}
            onClick={
              !x.isRemove
                ? () => {
                    if (!onChange) return;
                    const newFilter = x.onToggle(filters);
                    onChange(newFilter);
                  }
                : null
            }
            clickable={!x.isRemove}
            onDelete={
              x.isRemove
                ? () => {
                    if (!onChange) return;
                    const newFilter = x.onRemove(filters);
                    onChange(newFilter);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
