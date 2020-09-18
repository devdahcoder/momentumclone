import React from 'react'

const Input = ({ inputValue, handleTodoInput, handleTodoSubmit, todo }) => {
  return (
    <div style={{display: todo.length === 4 ? "none" : "block"}}>
      <form action="" onSubmit={handleTodoSubmit}>
      <label htmlFor="">What is your main Focus today</label>
        <input
          type="text"
          name=""
          id=""
          onChange={handleTodoInput}
          value={inputValue}
        />
      </form>
    </div>
  );
};

export default Input
