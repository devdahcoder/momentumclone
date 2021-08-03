import { combineReducers } from "redux";
import timeReducer from "./timeReducer";
import timeDropDownReducer from "./timeDropDownReducer";
import todoReducer from "./todoReducer";
import locationReducer from "./locationReducer"
import nameReducer from "./nameReducer"
import backgroundReducer from "./backgroundImageReducer"


const rootReducer = combineReducers({
    time : timeReducer,
    timeDropDown : timeDropDownReducer,
    todo : todoReducer,
    location : locationReducer,
    name: nameReducer,
    background: backgroundReducer,
});


export default rootReducer;