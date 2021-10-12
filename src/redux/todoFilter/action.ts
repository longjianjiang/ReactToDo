import { TodoFilterType } from "./todoFilter";

export const SET_FILTER = "SET_FILTER";

export const setFilter = (filter: TodoFilterType) => ({
    type: SET_FILTER,
    payload: {
        filter,
    }
});

export type ITodoFilterAction = ReturnType<typeof setFilter>;