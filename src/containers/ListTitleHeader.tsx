import { observer, inject } from "mobx-react";
import TodoListStore from "../mobx/todoListStore";

interface IListTitleHeader {
    todoList?: typeof TodoListStore,
}

const ListTitleHeader = inject("todoList")(observer((props: IListTitleHeader) => {
    return <h2 id="list-heading">{props.todoList!.filterTodos.length} tasks remaining</h2>
}));

export default ListTitleHeader;