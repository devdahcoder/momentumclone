import React, {useContext, useEffect}  from 'react';
import {TodoContext} from '../../context/TodoContext';
import "./todolist.css";
// import store from "store"
// import {addTodo} from "../../Actions/todoAction"
//imported components
import TodoItem from "../TodoItem/TodoItem";
import store from "store";
// import { useSelector } from 'react-redux';

const TodoList = () => {

  // const todoList = useSelector(state => state.todo.todos);
  const { todoList } = useContext(TodoContext);


  return (
    <section className="todo-list-section" style={{ display: todoList && todoList.length === 0 ? "none" : "block" }}>
      <div className="todo-list-section-display">

        {/* <div className="todo-list-fake-input-prompt">
          <h3 className="fake-todo-input-label">What is your main focus for today?!!!!</h3> 
          <input />
        </div>
         */}
        <div className="todo-focus-container">
          <div className="todo-title" >Today</div>
            {todoList && todoList.map((todo) => (<TodoItem key={todo.id} todo={todo}/>))}
        </div>
      </div>
    </section>
  );
};

export default TodoList
