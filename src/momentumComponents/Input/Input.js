import React from 'react';
import "./input.css";


const Input = ({ inputValue, handleTodoInput, handleTodoSubmit, todo }) => {
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
