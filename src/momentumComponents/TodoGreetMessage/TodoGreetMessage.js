import React, { useContext } from 'react';
import "./todogreetmessage.css";


// imported utils
import { TodoContext } from "../../context/TodoContext"

const TodoGreetMessage = () => {

    const { todoMessage, activeTodoMessage } = useContext(TodoContext);

    return (

        <div data-v-1463c36e="" className={`todo-greet-message-wrapper ${activeTodoMessage ? "show-todo-greet-message" : ""}`}>

            <div data-v-1463c36e="" data-test="focus-message" className="message todo-greet-focus-message">

                <span data-v-1463c36e="">{todoMessage ? todoMessage : "&nbsp;"}</span>

            </div>

        </div>
        
    )
}

export default TodoGreetMessage
