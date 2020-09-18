import React from 'react'

const TodoItem = ({ item, handleDeleteTodo, markTodo }) => {


    

    const {id, value, completed} = item;
  return (
    <div>
      <span style={{textDecoration: completed ? "line-through" : "none"}}>
        <input type="checkbox" name="" id="" onClick={() => markTodo(id)} />
        {value} <button onClick={() => handleDeleteTodo(id)}>Delete</button>
      </span>
    </div>
  );
};

export default TodoItem
