import React from 'react';
import "./todoinput.css";

//imported components
import TodoGreetMessage from "../TodoGreetMessage/TodoGreetMessage";
import Input from "../Input/Input";
import TodoList from "../TodoList/TodoList";

const TodoInput = ({
            inputValue,
            handleTodoInput,
            handleTodoSubmit,
            todo,
            handleDeleteTodo,
            markTodo,
            // todo,
        }) => {
    return (
        <section className="todo-input-container">
            <div className="todo-input-wrapper">
                <div className="todo-input-focus">

                    {/* this div houses todo list or todo form input */}
                    <div className="todo-input-focus-wrapper">
                        <Input
                            inputValue={inputValue}
                            handleTodoInput={handleTodoInput}
                            handleTodoSubmit={handleTodoSubmit}
                            todo={todo}
                        />

                        {/* <TodoList
                            todo={todo}
                            inputValue={inputValue}
                            handleTodoInput={handleTodoInput}
                            handleTodoSubmit={handleTodoSubmit}
                            handleDeleteTodo={handleDeleteTodo}
                            markTodo={markTodo}
                        /> */}
                    </div>
                    

                    <TodoGreetMessage />
                </div>
            </div>
        </section>
    )
}

export default TodoInput
