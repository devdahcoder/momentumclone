import React, {useState, useEffect} from 'react'
import "./inputname.css";

//imported packages
import { useDispatch, useSelector } from 'react-redux';


//imported utils
import {addName} from "../../Actions/nameAction";



const InputName = () => {
    const name = useSelector(state => state.name.name)
    const dispatch = useDispatch();
    const [inputName, setInputName] = useState("");

    const handleName = (e) => {
        setInputName(e.target.value);
    }


    const handleTodoSubmit = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (inputName !== "") {
                dispatch(addName(inputName));
                localStorage.setItem("name", inputName);
                // setState(inputName)
            } 
            else {
                alert("cant happen");
            }
            setInputName("");
        }
    }


    useEffect(() => {
        // JSON.parse(localStorage.getItem("name"))
        const storageName = localStorage.getItem("name");
        if (storageName) {
            dispatch(addName(storageName));
        }
    }, [])

    


    return (
        <span data-v-4e331ed7="" className="input-name-container">
            <input onKeyPress={handleTodoSubmit} data-v-4e331ed7="" onChange={handleName} value={inputName} spellcheck="false" data-test="name-input" class="name editing pulse" /> 
            <span data-v-4e331ed7="" className="name-hidden-span">{name && name}</span>
        </span>
    )
}

export default InputName
