import React, {useState, useEffect} from 'react'
import "./inputname.css";
import store from "store"

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
            if (inputName.trim() !== "") {
                // localStorage.setItem("name", inputName);
                store.set("name", inputName);
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
        <span className="input-name-container">
            <input onKeyPress={handleTodoSubmit} onChange={handleName} value={inputName} spellcheck="false" data-test="name-input" class="name editing pulse" /> 
            {/* <span className="name-hidden-span">{name && name}</span> */}
        </span>
    )
}

export default InputName
