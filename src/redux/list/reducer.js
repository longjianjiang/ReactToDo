import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./action";

export default function list(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            console.log(state)
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo => (todo.id == action.payload.id) ? {...todo, completed: !todo.completed} : todo)
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state
    }
}