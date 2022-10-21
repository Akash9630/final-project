import { combineReducers } from "redux";
import movieReducer from "./Redux"

const rootReducer = combineReducers({ task: movieReducer });

export default rootReducer