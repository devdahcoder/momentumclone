import React from 'react';
import "./todoinput.css";

//imported components
import TodoGreetMessage from "../TodoGreetMessage/TodoGreetMessage";
import Input from "../Input/Input";
import TodoList from "../TodoList/TodoList";

const TodoInput = () => {

    return (

        <div data-testid="todo-input-container" className="todo-input-container">

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
