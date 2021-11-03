import React, {useContext} from "react";
import "./greeting.css";
import "../../style/global.css"

// imported components
import GreetingDropdown from "../GreetingDropdown/GreetingDropdown"
import InputName from "../InputName/InputName";

// imported utils
import {GreetingContext} from "../../context/GreetingContext";

const Greeting = () => {

  const {name, editName, isEditingName, greeting, greetingDropdown, toggleGreetingDropdown} = useContext(GreetingContext);
  

  return (
    <div className="greeting-section">

      <div className="greeting-display">

        <div className="side-col"></div>

        <div className="greeting-text-container">

          <span className="greeting-text-content">

            <span className="greeting-message">{greeting}</span>

            <span className="greeting-name-container">

              <span className="greeting-name-wrapper">
                
                {
                  // name && name ? <span onDoubleClick={editName} className="greeting-user-name" data-test="name">{name && name}</span> : <InputName /> 
                  isEditingName || !name ?  <InputName /> : <span onDoubleClick={editName} className="greeting-user-name" data-test="name">{name}</span>
                }
                
              </span>

              <span data-test="punctuation" className="punctuation">.</span>

            </span>

          </span>

        </div>

        <div className="greeting-menu-container side-col">

          <div className="greeting-menu-display more-dash">

            <div  onClick={toggleGreetingDropdown} className="greeting-menu-wrapper icon-wrapper dash-icon-wrapper more-toggle">
              
              <svg style={{opacity: greetingDropdown ? "1" : ""}} data-v-c8d4d4da="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="icon icon-ellipsis more-icon dash-icon">
                
                <path data-v-c8d4d4da="" d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path>
              
              </svg>
            
            </div>

            <GreetingDropdown />

          </div>

        </div>

      </div>
      
    </div>
  );
};

export default Greeting;
