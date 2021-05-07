import React from "react";
import "./greeting.css";

import NameInput from "../nameInput";

const Greeting = ({
    greeting, 
    nameCondition, 
    name, 
    // handleNameValue,
    handleBlur,
    handleDoubleClick
    
}) => {
  

  return (
    <div className="greeting-section">
      {/* <span> */}
        {/* {greeting} */}
          {/* <NameInput
            name={name}
            nameCondition={nameCondition}
            // handleNameValue={handleNameValue}
            handleBlur={handleBlur}
            handleDoubleClick={handleDoubleClick}
          /> */}
      {/* </span> */}



      <div className="greeting-display">
        <div className="side-col"></div>
        <div className="greeting-text-container">
          <span className="greeting-text-content">
            <span className="greeting-message">{greeting}</span>

            <span className="greeting-name-container">
              <span className="greeting-name-wrapper">
                <span className="greeting-user-name" data-test="name"> {name}</span>
              </span>
              <span data-test="punctuation">.</span>
            </span>
          </span>
        </div>

        <div className="greeting-menu-container side-col">
          <span className="greeting-menu-display more-dash">
            <div className="greeting-menu-wrapper icon-wrapper dash-icon-wrapper more-toggle">
              {/* <svg data-v-c8d4d4da="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="icon icon-ellipsis dash-icon more-icon">
                <path data-v-c8d4d4da="" d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path>
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432 0h-76c-44.1 0-80 35.9-80 80v76c0 44.1 35.9 80 80 80h76c44.1 0 80-35.9 80-80V80C512 35.9 476.1 0 432 0zM472 156c0 22.1-17.9 40-40 40h-76c-22.1 0-40-17.9-40-40V80c0-22.1 17.9-40 40-40h76c22.1 0 40 17.9 40 40V156z"/><path d="M156 0H80C35.9 0 0 35.9 0 80v76c0 44.1 35.9 80 80 80h76c44.1 0 80-35.9 80-80V80C236 35.9 200.1 0 156 0zM196 156c0 22.1-17.9 40-40 40H80c-22.1 0-40-17.9-40-40V80c0-22.1 17.9-40 40-40h76c22.1 0 40 17.9 40 40V156z"/><path d="M156 276H80c-44.1 0-80 35.9-80 80v76c0 44.1 35.9 80 80 80h76c44.1 0 80-35.9 80-80v-76C236 311.9 200.1 276 156 276zM196 432c0 22.1-17.9 40-40 40H80c-22.1 0-40-17.9-40-40v-76c0-22.1 17.9-40 40-40h76c22.1 0 40 17.9 40 40V432z"/><path d="M492 412c-11 0-20 9-20 20 0 22.1-17.9 40-40 40h-76c-22.1 0-40-17.9-40-40v-76c0-22.1 17.9-40 40-40h76c15.9 0 30.3 9.4 36.7 24 4.4 10.1 16.2 14.7 26.3 10.3 10.1-4.4 14.7-16.2 10.3-26.3C492.6 294.8 463.8 276 432 276h-76c-44.1 0-80 35.9-80 80v76c0 44.1 35.9 80 80 80h76c44.1 0 80-35.9 80-80C512 421 503 412 492 412z"/></svg>

            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Greeting;