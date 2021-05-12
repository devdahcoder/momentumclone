import { combineReducers } from "redux";
import timeReducer from "./timeReducer";
import timeDropDownReducer from "./timeDropDownReducer"


const rootReducer = combineReducers({
    time : timeReducer,
    timeDropDown : timeDropDownReducer,
});


export default rootReducer;