import { SET_FILTER, ITodoFilterAction } from "./action";
import { TodoFilterType } from "./todoFilter";

export interface ITodoFilterState {
    filter: TodoFilterType;
};

const INITIAL_DATA: ITodoFilterState = {
    filter: TodoFilterType.SHOW_ALL,
};

export default function todoFilter(
    state = INITIAL_DATA, 
    action: ITodoFilterAction): ITodoFilterState {
    switch (action.type) {
        case SET_FILTER:
            return {...state, filter: action.payload.filter};
        default:
            return state;
    }
}