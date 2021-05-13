import { combineReducers } from "redux";
import timeReducer from "./timeReducer";
import timeDropDownReducer from "./timeDropDownReducer";
import todoReducer from "./todoReducer";


const rootReducer = combineReducers({
    time : timeReducer,
    timeDropDown : timeDropDownReducer,
    todo : todoReducer,
});


export default rootReducer;