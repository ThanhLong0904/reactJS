import { Route, Routes, useLocation, useMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import { Box } from '@mui/material';
import DetailPage from './pages/DetailPage';

function ProductFeature() {
  return (
    <Box pt={4}>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:productId" element={<DetailPage />} />
      </Routes>
    </Box>
  );
}

export default ProductFeature;
