import {ADD_NAME} from "../Actions/nameAction";


const initialState = {
    name: "",
}


export const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NAME:
            return {
                ...state,
                name: action.payload
            }
            
        default:
            return state;
    }
}

export default nameReducer;