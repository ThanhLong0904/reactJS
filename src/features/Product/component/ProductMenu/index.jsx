import { Box, Link } from '@mui/material';
import { NavLink, useResolvedPath } from 'react-router-dom';
import './styles.scss';

function ProductMenu() {
  const basePath = useResolvedPath('').pathname;
  const getNavLinkClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <Box component="ul" className="ProductMenu">
      <li>
        <NavLink to={basePath} end className={getNavLinkClass}>
          Description
        </NavLink>
      </li>
      <li>
        <NavLink to={`${basePath}/additional`} end className={getNavLinkClass}>
          Additional
        </NavLink>
      </li>
      <li>
        <NavLink to={`${basePath}/reviews`} end className={getNavLinkClass}>
          reviews
        </NavLink>
      </li>
    </Box>
  );
}

export default ProductMenu;
