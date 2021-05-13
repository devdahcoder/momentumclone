import React, {useState} from 'react';
import "./input.css";

//imported packages
import {v4 as uuid} from "uuid";
import { useDispatch, useSelector } from 'react-redux';

//imported utils
import {addTodo} from "../../Actions/todoAction";


const Input = () => {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("")


  // handle submit for todo
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      const newTodo = {id: uuid(), value: inputValue, completed: false};
      dispatch(addTodo(newTodo));
    } else {
      alert("cant happen");
    }
    setInputValue("");
  }

  //handle todo input
  const handleTodoInput = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <section>
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
