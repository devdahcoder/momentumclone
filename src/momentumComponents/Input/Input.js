import React, {useState, useEffect} from 'react';
import "./input.css";

//imported packages
import {v4 as uuid} from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import store from "store";

//imported utils
import {addTodo} from "../../Actions/todoAction";


const Input = () => {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector(state => state.todo.todos);


  // handle submit for todo
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTodo = {id: uuid(), value: inputValue, completed: false};
      store.set("todo", newTodo);
    } else {
      alert("cant happen");
    }
    setInputValue("");
  }


  // useEffect(() => {
  //     const todos = store.get("todo");
  //     if (todos) {
  //         dispatch(addTodo(todos));
  //     }
  // }, [])


  //handle todo input
  const handleTodoInput = (e) => {
    setInputValue(e.target.value);
  }


  return (
    <section style={{ display: todos.length === 0 ? "block" : "none" }}>
      <form action="" onSubmit={handleTodoSubmit}>
        <div className="input-form-display">
            <label htmlFor="">What is your main Focus today?</label>
            <input
              type="text"
              name=""
              id=""
              onChange={handleTodoInput}
              value={inputValue}
            />
        </div>
      </form>
    
    </section>
  );
};

export default Input
