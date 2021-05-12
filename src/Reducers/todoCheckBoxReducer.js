import { CHECK_TODO, UNCHECK_TODO } from "../Actions/todoCheckBoxAction";



const initialState = {
    checked: false,
}

const todoCheckBoxReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_TODO:
            return {
                ...state,
                checked: true,
            }

        case UNCHECK_TODO:
            return {
                ...state,
                checked: false,
            }
    
        default:
            return state;
    }
}


export default todoCheckBoxReducer;