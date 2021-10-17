import FilterButton from "../components/FilterButton";
import { TodoFilterType } from "../redux/todoFilter/todoFilter";
import { observer, inject } from "mobx-react";
import TodoListStore from "../mobx/todoListStore";
const FILTER_NAMES = Object.values(TodoFilterType);

interface IFilterList {
    todoList?: typeof TodoListStore,
}

const FilterList = inject("todoList")(observer((props: IFilterList) => {
    return (
        <div className="filters btn-group stack-exception">
        {FILTER_NAMES.map(name => 
            <FilterButton
                key={name}
                name={name}
                isPressed={name == props.todoList!.filter}
                setFilter={props.todoList!.setFilter}
            />
        )}
    </div>
    )
}));

export default FilterList;