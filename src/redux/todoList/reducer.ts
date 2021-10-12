import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from "./action";
import { ITodoListAction } from "./action";
import { ITodoListItem } from "./todoList";

export interface ITodoListState {
    lists: Array<ITodoListItem>;
}

const INITIAL_DATA: ITodoListState = {
    lists: [],
};

export default function todoList(
    state = INITIAL_DATA, 
    action: ITodoListAction): ITodoListState {
    switch (action.type) {
        case ADD_TODO: {
            let arr = [
                ...state.lists,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    completed: false
                }
            ];
            return {...state, lists: arr};
        }
        case TOGGLE_TODO: {
            let arr = state.lists.map(
                todo => (todo.id == action.payload.id) 
                    ? {...todo, completed: !todo.completed} 
                    : todo);
            return {...state, lists: arr};
        }
        case DELETE_TODO: {
            let arr = state.lists.filter(todo => todo.id !== action.payload.id);
            return {...state, lists: arr};
        }
            
        case EDIT_TODO: {
            let arr = state.lists.map(
                todo => (todo.id == action.payload.id) 
                    ? {...todo, name: action.payload.name} 
                    : todo);
            return {...state, lists: arr};
        }

        default:
            return state;
    }
}