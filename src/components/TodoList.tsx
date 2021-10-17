import Todo from "./Todo";
import { inject, observer } from "mobx-react";
import TodoListStore from "../mobx/todoListStore";

interface ITodoListProps {
    todoList?: typeof TodoListStore,
};

const TodoList = inject("todoList")(observer((props: ITodoListProps) => {
    return (
    <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
    >
        {props.todoList!.filterTodos.map(task =>
            <Todo
                key={task.id}
                id={""+task.id}
                todoItem={task}
                toggleTodo={props.todoList!.toggleTodo}
                deleteTodo={props.todoList!.deleteTodo}
                editTodo={props.todoList!.editTodo}
            />
        )}
    </ul>
    )
}));

export default TodoList;