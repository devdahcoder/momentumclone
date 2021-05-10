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
    <section className="todo-list-section">
      <div className="todo-list-section-display">

        <div data-v-20431cdb="" className="todo-list-fake-input-prompt">
          <h3 data-v-20431cdb="">What is your main focus for today?</h3> 
          <input data-v-20431cdb="" />
        </div>

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
      </div>
    </section>
  );
};

export default TodoList
