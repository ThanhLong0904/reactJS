import { Route, Routes, useLocation, useMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import { Box } from '@mui/material';

function ProductFeature() {
  const location = useLocation();
  return (
    <Box pt={4}>
      <Routes>
        <Route path="/" element={<ListPage />} />
      </Routes>
    </Box>
  );
}

export default ProductFeature;
