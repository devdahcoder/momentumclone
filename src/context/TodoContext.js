import React, {useState, createContext, useEffect, useRef} from "react";


//imported packages
import {v4 as uuid} from "uuid";
import store from "store"

export const TodoContext = createContext();


const TodoContextProvider = (props) => {

    const [todoList, setTodoList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [todoDropdown, setTodoDropdown] = useState(false);
    const [inputValue, setInputValue] = useState("");
    // const [newTodoInput, setNewTodoInput] = useState("");
    const [currentId, setCurrentId] = useState(null);
    const focusInput = useRef(null);

    useEffect(() => {
        const getTodo = store.get("todo");

        if (getTodo) {
            setTodoList(getTodo);
        }
    }, [])

    useEffect(() => {
        store.set("todo", todoList);
    }, [todoList])


    const toggleTodo = (id) => {
        setTodoList(todoList.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }))
    };

    const toggleTodoDropdown = () => {
        setTodoDropdown(!todoDropdown);
    };

    const handleTodoInput = (e) => {
        setInputValue(e.target.value);
    }

    

    const deleteTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    // edit functions
    // const handleNewTodoInput = (e) => {
    //     setNewTodoInput(e.target.value);
    // };

    const toggleEditTodo = (id) => {
        setIsEditing(true);
        let currentTodo = todoList.find((todo) => todo.id === id);
        setInputValue(currentTodo.value);
        setCurrentId(currentTodo.id);
    }

    const editTodo = (id, newTodo) => {
        setTodoList(todoList.map(todo => {
            if (todo.id === id) {
                setInputValue(todo.value);
                return {
                    ...todo,
                    value: newTodo,
                }
            }
            return todo;
        }))
    };

    // const handleEditSubmit = (e) => {
    //     e.preventDefault();
    //     editTodo(currentId, newTodoInput);
    //     // setNewTodoInput("");
    //     setInputValue("");
    //     setIsEditing(false);
    // }

    const handleTodoSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            editTodo(currentId, inputValue);
            // setNewTodoInput("");
            setInputValue("");
            setIsEditing(false);
        }
        else {
            if (inputValue.trim() !== "") {
                const newTodo = {id: uuid(), value: inputValue, completed: false};
                setTodoList([...todoList, newTodo]);
            } else {
                alert("cant happen");
            }
        }

        
        
        setInputValue("");
    }

    const focusTodoInput = () => {
        // focusInput.current.focus();
        // console.log(focusInput.focus());
    };

    



    // const editTodo = (id) => {
    //     setIsEditing(true);
    //     let currentTodo = todoList.find((todo) => todo.id === id);
    //     setInputValue(currentTodo.value);
    //     console.log(currentTodo);
    //     deleteTodo(id);
    //     // focusTodoInput();
    // };

    

    const value = {
        todoList, 
        setTodoList, 
        deleteTodo, 
        toggleTodo, 
        editTodo, 
        isEditing, 
        focusInput, 
        setIsEditing, 
        inputValue, 
        setInputValue,
        todoDropdown,
        toggleTodoDropdown,
        handleTodoSubmit,
        handleTodoInput,
        // handleEditSubmit,
        // newTodoInput,
        // handleNewTodoInput,
        toggleEditTodo,
        
    };


    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>

    )
}

export default TodoContextProvider;