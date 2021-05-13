import { ADD_TODO, DELETE_TODO, TOGGLE_CHECK_TODO } from "../Actions/todoAction";



const initialState = {
    todos: [],

}


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            }
        
        case TOGGLE_CHECK_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => (todo.id === action.payload) ? {...todo, completed: !todo.completed} : todo),
            }
        default:
            return state
    }
}

export default todoReducer;