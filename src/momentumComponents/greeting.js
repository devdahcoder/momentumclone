import React from "react";
import NameInput from "./nameInput";

const greeting = ({
    greeting, 
    nameCondition, 
    name, 
    // handleNameValue,
    handleBlur,
    handleDoubleClick
    
}) => {
  

  return (
    <div>
      <span>
        {greeting}
          <NameInput
            name={name}
            nameCondition={nameCondition}
            // handleNameValue={handleNameValue}
            handleBlur={handleBlur}
            handleDoubleClick={handleDoubleClick}
          />
      </span>
    </div>
  );
};

export default greeting;
