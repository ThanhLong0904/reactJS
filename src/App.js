import Header from 'components/Header';
import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import productsApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const params = {
    //     _limit: 10,
    //   };
    //   const productList = await productsApi.getAll(params);
    //   console.log(productList);
    // };
    // fetchProducts();
  }, []);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<CounterFeature />}></Route>
        <Route path="/todos/*" element={<TodoFeature />}></Route>
        <Route path="/albums" element={<AlbumFeature />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
