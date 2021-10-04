import { combineReducers } from "redux";
import todoList from "./todoList/reducer";
import todoFilter from "./todoFilter/reducer";

export default combineReducers({
    todoList,
    todoFilter,
});