import FilterButton from "../components/FilterButton";
import { TodoFilterType } from "../redux/todoFilter/todoFilter";
import { observer, inject } from "mobx-react";
import TodoFilterStore from "../mobx/todoFilterStore";

const FILTER_NAMES = Object.values(TodoFilterType);

interface IFilterList {
    todoFilter?: typeof TodoFilterStore,
}

const FilterList = inject("todoFilter")(observer((props: IFilterList) => {
    return (
        <div className="filters btn-group stack-exception">
        {FILTER_NAMES.map(name => 
            <FilterButton
                key={name}
                name={name}
                isPressed={name == props.todoFilter!.filter}
                setFilter={props.todoFilter!.setFilter}
            />
        )}
    </div>
    )
}));

export default FilterList;