import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from "./action";

export default function todoList(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(
                todo => (todo.id == action.payload.id) 
                    ? {...todo, completed: !todo.completed} 
                    : todo);
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        case EDIT_TODO:
            return state.map(
                todo => (todo.id == action.payload.id) 
                    ? {...todo, name: action.payload.name} 
                    : todo);
        default:
            return state;
    }
}