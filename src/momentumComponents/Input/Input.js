import React, {useContext} from 'react';
import "./input.css";


// imported utils
import {TodoContext} from "../../context/TodoContext"



const Input = () => {

  const {
        isEditing,
        todoList, 
        inputValue, 
        handleTodoSubmit,
        handleTodoInput,
      } = useContext(TodoContext);


  return (
    <section style={{ display: todoList.length < 1 || isEditing  ? "block" : "none" }}>
      <form action="" onSubmit={ handleTodoSubmit }>
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
