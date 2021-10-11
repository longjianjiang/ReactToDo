export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";

let nextTodoId = 0;

export const addTodo = name => ({
    type: ADD_TODO,
    payload: {
        id: nextTodoId++,
        name,
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { 
        id,
    }
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: {
        id,
    }
});

export const editTodo = (id, name) =>({
    type: EDIT_TODO,
    payload: {
        id,
        name,
    }
});