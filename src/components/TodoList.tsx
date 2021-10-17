import Todo from "./Todo";
import { inject, observer } from "mobx-react";
import TodoListStore from "../mobx/todoListStore";
import TodoFilterStore from "../mobx/todoFilterStore";
import { TodoFilterType } from "../redux/todoFilter/todoFilter";

interface ITodoListProps {
    todoList?: typeof TodoListStore,
    todoFilter?: typeof TodoFilterStore,
};

const TodoList = inject("todoList", "todoFilter")(observer((props: ITodoListProps) => {
    var todos = props.todoList!.todos;
    if (props.todoFilter!.filter == TodoFilterType.SHOW_ACTIVE) {
        todos = props.todoList!.incompleteTodos;
    } else if (props.todoFilter!.filter == TodoFilterType.SHOW_COMPLETED) {
        todos = props.todoList!.completedTodos;
    }

    return (
    <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
    >
        {todos.map(task =>
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