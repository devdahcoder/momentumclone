import React, {useContext} from 'react';
import "./input.css";

//imported packages
import {v4 as uuid} from "uuid";

// imported utils
import {TodoContext} from "../../context/TodoContext"



const Input = () => {

  const {todoList, setTodoList, setIsEditing, inputValue, isEditing, setInputValue, focusInput} = useContext(TodoContext);


  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTodo = {id: uuid(), value: inputValue, completed: false};
      setTodoList([...todoList, newTodo]);
      setIsEditing(false);
    } else {
      alert("cant happen");
    }
    setInputValue("");
  }

  const handleTodoInput = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <section style={{ display: todoList.length < 1 || isEditing ? "block" : "none" }}>
      <form action="" onSubmit={handleTodoSubmit}>
        <div className="input-form-display">
            <label htmlFor="">What is your main Focus today?</label>
            <input
              type="text"
              name=""
              id=""
              onChange={handleTodoInput}
              value={inputValue}
              autoFocus
              // { ...( isEditing ? { autoFocus: true } : { autoFocus: false } ) }
            />
        </div>
      </form>
    
    </section>
  );
};

export default Input
