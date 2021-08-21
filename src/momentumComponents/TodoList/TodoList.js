import React, {useState, useEffect} from 'react';
import "./todolist.css";
import store from "store"
import {addTodo} from "../../Actions/todoAction"
//imported components
import TodoItem from "../TodoItem/TodoItem";

import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {

  const dispatch = useDispatch();
  const [todoList, setTodoList] = useState([]);

  

  // const todoList = useSelector(state => state.todo.todos);


  // useEffect(() => {
  //   const getTodo = store.get("todo");
  //   // dispatch(addTodo(getTodo));
  //   setTodoList(getTodo);
  //   // if (getTodo) {
  //   //     // dispatch(addTodo(todos));
  //   //     // setTodoList(getTodo);
  //   //     console.log(getTodo);
  //   //     dispatch(addTodo(getTodo));
  //   // }

  // //   // setTodos(store.get("todo"));
  // //   // console.log(store.get("todo"));
  // }, [])


  // const parent = todoList && todoList.length > 0 ? todoList.map((todo, index) => (<TodoItem key={todo.index} todo={todo}/>)) : <span>no todo</span>
  


  return (
    <section className="todo-list-section" style={{ visibility: todoList && todoList.length === 0 ? "hidden" : "visible" }}>
      <div className="todo-list-section-display">

        <div data-v-20431cdb="" className="todo-list-fake-input-prompt">
          <h3 className="fake-todo-input-label" data-v-20431cdb="">What is your main focus for today?</h3> 
          <input data-v-20431cdb="" />
        </div>
        
        <div className="todo-focus-container">
          <div className="todo-title" >Today</div>
            {/* {parent} */}
        </div>
      </div>
    </section>
  );
};

export default TodoList
