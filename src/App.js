import Header from 'components/Header';
import CardFeature from 'features/Cart';
import ProductFeature from 'features/Product';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CounterFeature />}></Route>
        <Route path="/todos/*" element={<TodoFeature />}></Route>
        <Route path="/albums" element={<AlbumFeature />}></Route>
        <Route path="/product/*" element={<ProductFeature />} />
        <Route path="/cart/" element={<CardFeature />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
