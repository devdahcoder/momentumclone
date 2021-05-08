import React from 'react';
import "./input.css";


const Input = ({ inputValue, handleTodoInput, handleTodoSubmit, todo }) => {
  return (
    <section className="todo-input-container" style={{display: todo.length === 4 ? "none" : "block"}}>
      <div className="todo-input-wrapper">
        <div className="todo-input-focus">
          <div className="todo-input-focus-wrapper">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Input
