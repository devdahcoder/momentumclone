import React, {useState, useContext} from 'react';
import "./input.css";

//imported packages
import {v4 as uuid} from "uuid";

// imported utils
import {TodoContext} from "../../context/TodoContext"



const Input = () => {

  // const [inputValue, setInputValue] = useState("");
  const {todoList, setTodoList, isEditing, setIsEditing, inputValue, setInputValue} = useContext(TodoContext);

  // const handleEdit = () => {
  //   if (isEditing) {
  //     setInputValue(input);
  //   }
  // }

  // isEditing ? setInputValue(input) : null;


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
    <section style={{ display: todoList.length > 0 ? "none" : "block" }}>
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
