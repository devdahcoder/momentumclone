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
            setIsEditingName(!isEditingName);
        }
    }

    

    return (
        <span className="input-name-container">
            <input onKeyPress={handleTodoSubmit} onChange={handleName} value={inputName} spellCheck="false" data-test="name-input" className="name editing pulse" /> 
            <span className="name-hidden-span" contentEditable="true">{inputName}</span>
        </span>
    )
}

export default InputName
