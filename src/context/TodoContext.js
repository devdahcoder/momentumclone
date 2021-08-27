import React, {useState, createContext, useEffect, useRef} from "react";
import store from "store"


export const TodoContext = createContext();


const TodoContextProvider = (props) => {

    const [todoList, setTodoList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [todoDropdown, setTodoDropdown] = useState(false);
    const [inputValue, setInputValue] = useState("");
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


    const deleteTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };
    

    const toggleTodo = (id) => {

        setTodoList(todoList.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }))
    };

    // focus todo function
    const focusTodoInput = () => {
        // focusInput.current.focus();
        // console.log(focusInput.focus());
    };


    const editTodo = (id) => {
        setIsEditing(true);
        let currentTodo = todoList.find((todo) => todo.id === id);
        setInputValue(currentTodo.value);
        console.log(currentTodo);
        deleteTodo(id);
        // focusTodoInput();
    };

    const toggleTodoDropdown = () => {
        setTodoDropdown(!todoDropdown);
    };
    
    // const editTodo = (id, newTodo) => {
    //     setTodoList(todoList.map(todo => {
    //         if (todo.id === id) {
    //             return {
    //                 ...todo,
    //                 ...newTodo
    //             }
    //         }
    //         return todo;
    //     }))
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
    };



    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>

    )
}

export default TodoContextProvider;