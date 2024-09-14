import classNames from "classnames";
import React from "react";
import "./styles.scss";

function TodoList(props) {
  const { todoList , onTodoClick} = props;

  const handleTodoClick = (todo, idx) => {
   if(!onTodoClick) return

   onTodoClick(todo, idx) 

  }

  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classNames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={ () => handleTodoClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
