import React from 'react';
import { Link, Route, Routes, useMatch, useResolvedPath } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

function TodoFeature() {
  const match = useMatch('/todos/');

  return (
    <div>
      <h1>1</h1>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path=":todoId" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default TodoFeature;
