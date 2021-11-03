import React, { useContext } from 'react'
import "./inputname.css";

//imported utils
import {GreetingContext} from "../../context/GreetingContext";

const InputName = () => {

    const { inputName, setInputName, setName, isEditingName, setIsEditingName } = useContext(GreetingContext);

    const handleName = (e) => {

        setInputName(e.target.value);

    }


    const handleTodoSubmit = (e) => {

        if (e.key === "Enter") {

            e.preventDefault();

            if (inputName.trim() !== "") {

                setName(inputName);

            } 

            else {

                alert("cant happen");

            }

            setInputName("");

            // please leave like this and don't do !isEditingName because it breaks the name input
            // when a new user enters their name.

            setIsEditingName(false);
        }
    }

    

    return (
        <span className="input-name-container">

            <input onKeyPress={handleTodoSubmit} onChange={handleName} value={inputName} spellCheck="false" data-test="name-input" className="name editing pulse" /> 
            
            <span className="name-hidden-span">{inputName}</span>
            
        </span>
    )
}

export default InputName
