import React, {useContext} from "react";
import "./greetingdropdown.css";

// imported utils
import {GreetingContext} from "../../context/GreetingContext";

const GreetingDropdown = () => {

    const {editName, greetingDropdown} = useContext(GreetingContext);


    return (

        <div data-testid="greeting-more-dropdown" style={{display: greetingDropdown ? "block" : "none"}} className="dropdown greeting-more-dropdown app dash-dropdown nipple nipple-top-left">
            
            <ul data-test="dropdown-options" className="greeting-dropdown-list">
                
                <li className="" data-test="greeting-show-mantra">
                    
                    <div data-test="drop-down-wrapper" className="dropdown-list-label-wrapper">
                        
                        <span data-test="name" className="dropdown-list-label">Show today’s mantra</span>
                    
                    </div>
                
                </li>

                <li className="greeting-dropdown-line"></li>

                <li onClick={editName} className="" data-test="greeting-edit-name">
                    
                    <div data-test="drop-down-wrapper" className="dropdown-list-label-wrapper">
                        
                        <span data-test="name" className="dropdown-list-label">Edit your name</span>
                    
                    </div>
                
                </li>
            
            </ul>
        
        </div>
    )
}

export default GreetingDropdown
