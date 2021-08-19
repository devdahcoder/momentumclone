import {OTHER_TIME_DISPLAY_DROP_DOWN, OTHER_TIME_HIDE_DROP_DOWN} from '../Actions/otherTimeDropDownAction';


const initialState = {
    otherTimeDropDown: false,
}



export const otherTimeDropDownReducer = (state = initialState, action) => {
    switch (action.type) {
        case OTHER_TIME_DISPLAY_DROP_DOWN:
            return {
                ...state,
                otherTimeDropDown: true
            }
        case OTHER_TIME_HIDE_DROP_DOWN:
            return {
                ...state,
                otherTimeDropDown: false
            }
        default:
            return state;
    }
}

export default otherTimeDropDownReducer;