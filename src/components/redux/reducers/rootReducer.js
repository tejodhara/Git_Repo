import { combineReducers } from "redux";
import todoReducer from './todoReducer';
import usersReducer from "./usersReducer";

const rootReducer=combineReducers({
    todo:todoReducer,
    users:usersReducer
})

export default rootReducer