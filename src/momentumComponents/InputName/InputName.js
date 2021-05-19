import React, {useState} from 'react'
import "./inputname.css";

//imported packages
import { useDispatch } from 'react-redux';

//imported utils
import {addName} from "../../Actions/nameAction";



const InputName = () => {
    const dispatch = useDispatch();
    const [inputName, setInputName] = useState("");


    // handle submit for todo
    const handleTodoSubmit = (e) => {
        
        if (e.key === "Enter") {
            e.preventDefault();
            if (inputName !== "") {
                dispatch(addName(inputName));
            } 
            else {
                alert("cant happen");
                // setInputName("");
            }
            setInputName("");
        }
        else {
            setInputName(e.target.value);
        }
        

    }


    

    return (
        <span data-v-4e331ed7="" className="input-name-container">
            <input onKeyPress={handleTodoSubmit} data-v-4e331ed7="" onChange={handleTodoSubmit} value={inputName} spellcheck="false" data-test="name-input" class="name editing pulse" /> 
            <span data-v-4e331ed7="" className="name-hidden-span">Olam</span>
        </span>
    )
}

export default InputName
