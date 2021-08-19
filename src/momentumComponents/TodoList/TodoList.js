import React, {useState, useEffect} from 'react';
import "./todolist.css";
import store from "store"

//imported components
import TodoItem from "../TodoItem/TodoItem";

import { useSelector } from 'react-redux';

const TodoList = () => {

  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const getTodo = store.get("todo");
  //   if (getTodo) {
  //       // dispatch(addTodo(todos));
  //       setTodos(getTodo);
  //   }
  // }, [])

  const todos = useSelector(state => state.todo.todos);

  return (
    <section className="todo-list-section" style={{ display: todos.length === 0 ? "none" : "block" }}>
      <div className="todo-list-section-display">

        <div data-v-20431cdb="" className="todo-list-fake-input-prompt">
          <h3 data-v-20431cdb="">What is your main focus for today?</h3> 
          <input data-v-20431cdb="" />
        </div>
        
        <div className="todo-focus-container">
          <div className="todo-title" >Today</div>
            {todos && todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList
