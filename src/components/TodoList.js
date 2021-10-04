import React from "react";
import Todo from "./Todo";

const TodoList = ({todoList, toggleTodo, deleteTodo, editTodo}) => (
    <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
    >
        {todoList.map(task =>
            <Todo
                key={task.id}
                {...task}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
        )}
    </ul>
);

export default TodoList;
