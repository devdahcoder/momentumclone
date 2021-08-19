export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_CHECK_TODO = "TOGGLE_CHECK_TODO";



export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    }
}

export const toggleCheckTodo = (id) => {
    return {
        type: TOGGLE_CHECK_TODO,
        payload: id
    };
}


