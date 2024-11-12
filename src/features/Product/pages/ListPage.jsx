import { Box, Container, Grid, Pagination, Paper, Typography } from '@mui/material';
import productsApi from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductFilters from '../component/ProductFilters';
import ProductList from '../component/ProductList';
import ProductSort from '../component/ProductSort';
import ProductSkeletonList from '../component/Skeleton';
import './styles.scss';
function ListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 12,
    page: 1,
    total: 100,
  });
  const [filters, setfilters] = useState({
    _page: 1,
    _limit: 12,
  });
  useEffect(() => {
    // lưu ý gọi API phải đặt try catch.
    // setTimeout(() => {
    try {
      (async () => {
        const { data, pagination } = await productsApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
      })();
    } catch (error) {
      console.log('Failed to fetch product list', error);
    }
    setLoading(false);
    // }, 2000);
  }, [filters]);

  const handlePageChange = (e, page) => {
    setfilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newValue) => {
    setfilters((prevFilters) => ({
      ...prevFilters,
      _sortOrder: newValue,
    }));
  };

  const handleFiltersChange = (newFilter) => {
    setfilters((prevFilters) => ({
      ...prevFilters,
      ...newFilter,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item sx={{ width: '250px' }}>
            <Paper elevation={0}>
              <ProductFilters filters={filters} onChange={handleFiltersChange} />
            </Paper>
          </Grid>
          <Grid item sx={{ flex: '1 1 0' }}>
            <Paper elevation={0}>
              <ProductSort currentSort={filters._sortOrder} onChange={handleSortChange} />
              {loading ? <ProductSkeletonList length={12} /> : <ProductList data={productList} />}
              <Pagination
                count={Math.ceil(pagination.total / pagination.limit)}
                page={pagination.page}
                color="primary"
                className="pagination"
                onChange={handlePageChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
