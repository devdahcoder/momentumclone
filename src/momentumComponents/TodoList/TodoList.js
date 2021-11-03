import React, {useContext, useEffect}  from 'react';
import {TodoContext} from '../../context/TodoContext';
import "./todolist.css";

//imported components
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  
  const { todoList, isEditing } = useContext(TodoContext);

  return (

    <section className="todo-list-section" style={{ display: todoList.length === 0 || isEditing ? "none" : "block" }}>

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
