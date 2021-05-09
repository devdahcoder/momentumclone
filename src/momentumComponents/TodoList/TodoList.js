import React from 'react';
import "./todolist.css";

//imported components
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({
  todo,
  handleDeleteTodo,
  markTodo,
  todoComplete
}) => {
  return (
    <div className="todo-focus-container">
      <div className="todo-title" style={{ display: todo.length === 0 ? "none" : "block" }}>Today</div>
      {todo.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          handleDeleteTodo={handleDeleteTodo}
          markTodo={markTodo}
          todoComplete={todoComplete}
        />
      ))}
    </div>
  );
};

export default TodoList
