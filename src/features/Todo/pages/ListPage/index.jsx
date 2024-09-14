import React, { useState } from 'react';
import TodoList from '../../components/TodoList';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

function ListPage() {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const location = useLocation();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const param = queryString.parse(location.search);
    return param.status || 'all';
  });

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    const newTodo = {
      ...newTodoList[idx],
      status: todo.status === 'new' ? 'completed' : 'new',
    };

    newTodoList[idx] = newTodo;

    setTodoList(newTodoList);
  };

  const handleFilterTodoList = (data) => {
    setFilterStatus(data);
  };
  const renderTodoList = todoList.filter(
    (todo) => filterStatus === 'all' || filterStatus === todo.status,
  );

  const handleTodoFormSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>What To Do</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <button onClick={() => handleFilterTodoList('all')}>Show All</button>
      <button onClick={() => handleFilterTodoList('completed')}>
        Show Completed
      </button>
      <button onClick={() => handleFilterTodoList('new')}>Show New</button>
    </div>
  );
}

export default ListPage;
