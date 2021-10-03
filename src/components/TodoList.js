import React from "react";
import Todo from "./Todo";

const TodoList = ({list, toggleTodo}) => (
    <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
    >
        {list.map(task =>
            <Todo
                key={task.id}
                {...task}
                toggleTaskCompleted={toggleTodo}
            />
        )}
    </ul>
);

export default TodoList;
