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
            <input onKeyPress={handleTodoSubmit} onChange={handleName} value={inputName} spellcheck="false" data-test="name-input" class="name editing pulse" /> 
            <span className="name-hidden-span">{inputName}</span>
        </span>
    )
}

export default InputName
