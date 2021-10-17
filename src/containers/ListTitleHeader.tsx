import { observer, inject } from "mobx-react";
import TodoListStore from "../mobx/todoListStore";
import TodoFilterStore from "../mobx/todoFilterStore";
import { TodoFilterType } from "../redux/todoFilter/todoFilter";

interface IListTitleHeader {
    todoList?: typeof TodoListStore,
    todoFilter?: typeof TodoFilterStore,
}

const ListTitleHeader = inject("todoList", "todoFilter")(observer((props: IListTitleHeader) => {
    var todos = props.todoList!.todos;
    if (props.todoFilter!.filter == TodoFilterType.SHOW_ACTIVE) {
        todos = props.todoList!.incompleteTodos;
    } else if (props.todoFilter!.filter == TodoFilterType.SHOW_COMPLETED) {
        todos = props.todoList!.completedTodos;
    }
    return <h2 id="list-heading">{todos.length} tasks remaining</h2>
}));

export default ListTitleHeader;