export const SET_FILTER = "SET_FILTER";

export const TodoFilterType = {
    SHOW_ALL: 'ALL',
    SHOW_ACTIVE: 'ACTIVE',
    SHOW_COMPLETED: 'COMPLETED',
};

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: {
        filter,
    }
});