import React from "react";
import Todo from "./Todo";
import { ITodoListItem } from "../redux/todoList/todoList";

interface ITodoListProps {
    todoList: Array<ITodoListItem>;
    toggleTodo: (id: number) => any;
    deleteTodo: (id: number) => any;
    editTodo: (id: number, name: string) => any;
};

const TodoList = (props: ITodoListProps) => (
    <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
    >
        {props.todoList.map(task =>
            <Todo
                key={task.id}
                id={""+task.id}
                todoItem={task}
                toggleTodo={props.toggleTodo}
                deleteTodo={props.deleteTodo}
                editTodo={props.editTodo}
            />
        )}
    </ul>
);

export default TodoList;
