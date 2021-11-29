import React, {useState, createContext, useEffect, useRef, useCallback} from "react";

//imported packages
import {v4 as uuid} from "uuid";
import store from "store";
import debounce from "lodash.debounce";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {

    const [todoList, setTodoList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [todoDropdown, setTodoDropdown] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [currentId, setCurrentId] = useState(null);
    const focusInput = useRef(null);
    const [todoCompleteMessage] = useState(["Good job", "Awesome", "Keep it up", "You rock"]);
    const [todoMessage, setTodoMessage] = useState("");
    const [activeTodoMessage, setActiveTodoMessage] = useState(false);

    useEffect(() => {

        const getTodo = store.get("todo");

        if (getTodo) {

            setTodoList(getTodo);

        }

    }, [])

    useEffect(() => {

        store.set("todo", todoList);

    }, [todoList])

    const closeRandomMessage = () => {
        
        setTodoMessage("");

        setActiveTodoMessage(false);
    
    }

    const debouncedCloseHandler = useCallback(debounce(() => closeRandomMessage(), 3000), []);

    const getRandomMessage = () => {

        setTodoMessage(todoCompleteMessage[Math.floor(Math.random() * todoCompleteMessage.length)]);

        debouncedCloseHandler();

    }

    const debouncedChangeHandler = useCallback(debounce(() => getRandomMessage(), 1000), []);

    const toggleTodo = (id) => {

        setTodoList(todoList.map(todo => {

            if (todo.id === id) {

                todo.completed = !todo.completed;

                if (todo.completed) {
                    debouncedChangeHandler();
                    setActiveTodoMessage(true);
                }

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

    const handleTodoSubmit = (e) => {

        e.preventDefault();

        if (isEditing) {

            editTodo(currentId, inputValue);

            setInputValue("");

            setIsEditing(false);
            
            setTodoDropdown(false);

        }

        else {

            if (inputValue.trim() !== "") {

                const newTodo = {id: uuid(), value: inputValue, completed: false};

                setTodoList([...todoList, newTodo]);

                setTodoDropdown(false);

            } else {

                alert("cant happen");

            }

        }
        
        setInputValue("");

    }

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
        todoMessage,
        activeTodoMessage
        
    };


    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>

    )
}

export default TodoContextProvider;