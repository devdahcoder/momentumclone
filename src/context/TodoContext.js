import React, {useState, createContext, useEffect} from "react";
import store from "store"


export const TodoContext = createContext();


const TodoContextProvider = (props) => {

    const [todoList, setTodoList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState("");

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



    // const editTodo = (id) => {
    //     let newTodo = todoList.find((todo) => todo.id === id);
    //     let {value} = newTodo;
    //     setIsEditing(!isEditing);
    //     setTodoList(value);
    //     console.log(value);
    // }


    const editTodo = (id) => {
        setIsEditing(true);
        let currentTodo = todoList.find((todo) => todo.id === id);
        // newTodo.value = value;
        // setTodoList(todoList);
        setInputValue(currentTodo.value);
        console.log(currentTodo);
        deleteTodo(id);
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

    const value = {todoList, setTodoList, deleteTodo, toggleTodo, editTodo, isEditing, setIsEditing, inputValue, setInputValue};



    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>

    )
}

export default TodoContextProvider;