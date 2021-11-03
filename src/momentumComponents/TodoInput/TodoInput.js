import React, {useContext} from 'react';
import "./todoinput.css";

// imported utils
import {TodoContext} from "../../context/TodoContext"

//imported components
import TodoGreetMessage from "../TodoGreetMessage/TodoGreetMessage";
import Input from "../Input/Input";
import TodoList from "../TodoList/TodoList";
import EditInput from "../EditInput/EditInput"

const TodoInput = () => {

    const {
        isEditing, 
        
    } = useContext(TodoContext);

    return (

        <div className="todo-input-container">

            <div className="todo-input-wrapper">

                <div className="todo-input-focus">

                    {/* this div houses todo list or todo form input */}
                    <div className="todo-input-focus-wrapper">

                        <Input /> 

                        <TodoList />

                    </div>

                    <TodoGreetMessage />

                </div>

            </div>

        </div>
        
    )
}

export default TodoInput
