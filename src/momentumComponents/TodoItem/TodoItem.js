import React from 'react';
import "./todoitem.css";

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleCheckTodo } from "../../Actions/todoAction";


const TodoItem = ({ todo }) => {

  const {id, value, completed} = todo;
  const dispatch = useDispatch();


  return (
    <div className="todo-list-item-container" >
      <span data-v-20431cdb="" class="side-col todo-checkbox-container">
        <span data-v-20431cdb="" style={{opacity: completed ? "1" : ""}} data-test="complete" class="control todo-checkbox">
          <input onClick={() => dispatch(toggleCheckTodo(id))} type="checkbox" name="" id="" { ...( completed ? { checked: true } : {} ) } />
          <label style={{opacity: completed ? "1" : ""}} htmlFor=""></label>
        </span>
      </span>


      <span className="today-todo" style={{textDecoration: completed ? "line-through" : "none"}}>
        {value} 
      </span>


      <span data-v-20431cdb="" className="side-col todo-delete-container">
        <span onClick={() => dispatch(deleteTodo(id))} data-v-20431cdb="" style={{opacity: completed ? "1" : ""}} data-test="delete" className="control todo-delete">
          <span data-v-20431cdb="" style={{transform: completed ? "rotate(45deg)" : ""}} className="icon-wrapper dash-icon-wrapper">
            <svg style={{opacity: completed ? "1" : ""}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.3 256L506.1 34.1c7.8-7.8 7.8-20.5 0-28.3 -7.8-7.8-20.5-7.8-28.3 0L256 227.7 34.1 5.9c-7.8-7.8-20.5-7.8-28.3 0 -7.8 7.8-7.8 20.5 0 28.3l221.9 221.9L5.9 477.9c-7.8 7.8-7.8 20.5 0 28.3 3.9 3.9 9 5.9 14.1 5.9 5.1 0 10.2-2 14.1-5.9L256 284.3l221.9 221.9c3.9 3.9 9 5.9 14.1 5.9s10.2-2 14.1-5.9c7.8-7.8 7.8-20.5 0-28.3L284.3 256z"/></svg>
          </span>
        </span>
      </span>
    </div>
  );
};

export default TodoItem
