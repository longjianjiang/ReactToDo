import { SET_FILTER } from "./action";
import { TodoFilterType } from "./action";

export default function todoFilter(state = TodoFilterType.SHOW_ALL, action) {
    switch (action.type) {
        case SET_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
}