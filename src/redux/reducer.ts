import { combineReducers } from "redux";
import todoList from "./todoList/reducer";
import todoFilter from "./todoFilter/reducer";

// export default : https://www.jianshu.com/p/edaf43e9384f
export default combineReducers({
    todoList,
    todoFilter,
});