import { combineReducers } from "redux";
import timeReducer from "./timeReducer";
import timeDropDownReducer from "./timeDropDownReducer";
import todoCheckBoxReducer from "./todoCheckBoxReducer"


const rootReducer = combineReducers({
    time : timeReducer,
    timeDropDown : timeDropDownReducer,
    todoCheckBox : todoCheckBoxReducer,
});


export default rootReducer;