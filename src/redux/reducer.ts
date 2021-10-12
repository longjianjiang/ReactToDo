import { combineReducers } from "redux";
import todoList from "./todoList/reducer";
import todoFilter from "./todoFilter/reducer";
import { ITodoFilterState } from "./todoFilter/reducer";
import { ITodoListState } from "./todoList/reducer";

export interface IStoreState {
    todoList: ITodoListState;
    todoFilter: ITodoFilterState;
};

// export default : https://www.jianshu.com/p/edaf43e9384f
export default combineReducers({
    todoList,
    todoFilter,
});