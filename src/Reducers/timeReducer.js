import {TIME_DISPLAY_24_HOURS, TIME_HIDE_24_HOURS} from "../Actions/timeAction";


const initialState = {
    display24Hours : false,
}

export const timeReducer = (state = initialState, action) => {
    switch(action.type) {
        case TIME_DISPLAY_24_HOURS:
            return {
                ...state,
                display24Hours: true
            }
        case TIME_HIDE_24_HOURS:
            return {
                ...state,
                display24Hours: false
            }
        default:
            return state;
    }
}

export default timeReducer;