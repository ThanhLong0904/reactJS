import { Box, Container, Grid, Pagination, Paper } from '@mui/material';
import productsApi from 'api/productApi';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterViewer from '../component/Filters/FilterViewer';
import ProductFilters from '../component/ProductFilters';
import ProductList from '../component/ProductList';
import ProductSort from '../component/ProductSort';
import ProductSkeletonList from '../component/Skeleton';
import './styles.scss';

function ListPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 12,
    page: 1,
    total: 100,
  });
  const [filters, setfilters] = useState(() => ({
    ...queryParams,
    _limit: queryParams._limit || 10,
    _page: queryParams._page || 1,
  }));

  useEffect(() => {
    const queryParams = queryString.stringify(filters);
    navigate(`${location.pathname}?${queryParams}`, { replace: false });
  }, [filters, navigate, location.pathname, location.search]);

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
              <ProductFilters filters={filters} onChange={handleFiltersChange} getCategoryList={setCategoryList} />
            </Paper>
          </Grid>
          <Grid item sx={{ flex: '1 1 0' }}>
            <Paper elevation={0}>
              <ProductSort currentSort={filters._sortOrder} onChange={handleSortChange} />

              <FilterViewer filters={filters} onChange={handleFiltersChange} categoryList={categoryList} />
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
