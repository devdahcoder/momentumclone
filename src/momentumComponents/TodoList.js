import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({
  todo,
  handleDeleteTodo,
  markTodo,
  todoComplete
}) => {
  return (
    <div>
      <div style={{ display: todo.length === 0 ? "none" : "block" }}>Today</div>
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
