import {TIME_DISPLAY_DROP_DOWN, TIME_HIDE_DROP_DOWN} from "../Actions/timeDropDownAction";

const initialState = {
    timeDropDown : false,
}

export const timeDropDownReducer = (state = initialState, action) => {
    switch (action.type) {
        case TIME_DISPLAY_DROP_DOWN:
            return {
                ...state,
                timeDropDown: true
            }
        case TIME_HIDE_DROP_DOWN:
            return {
                ...state,
                timeDropDown: false
            }
        default:
            return state
    }
}

export default timeDropDownReducer;