import React from 'react'
import "./momentum.css"
const nameInput = ({
  name,
  nameCondition,
  handleNameValue,
  handleBlur,
  handleDoubleClick,
}) => {
  return (
    <div>
      <span
        onSubmit={handleBlur}
        value={name}
        contentEditable={nameCondition}
        onChange={handleNameValue}
        onKeyPressCapture={handleNameValue}
        onKeyDown={handleNameValue}
        onBlur={handleBlur}
        onDoubleClick={handleDoubleClick}
      >
        {name}
      </span>
    </div>
  );
};

export default nameInput
