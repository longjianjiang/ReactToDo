import { connect } from "react-redux";
import { Dispatch } from "redux";
import FilterButton from "../components/FilterButton";
import { IStoreState } from "../redux/reducer";
import { setFilter } from "../redux/todoFilter/action";
import { TodoFilterType } from "../redux/todoFilter/todoFilter";

const FILTER_NAMES = Object.values(TodoFilterType);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type IFilterListProps = StateProps & DispatchProps;

const InnerFilterList = (props: IFilterListProps) => (
    <div className="filters btn-group stack-exception">
        {FILTER_NAMES.map(name => 
            <FilterButton
                key={name}
                name={name}
                isPressed={name == props.currentFilter}
                setFilter={props.setFilter}
            />
        )}
    </div>
);

const mapStateToProps = ( {todoFilter}: IStoreState) => ({
    currentFilter: todoFilter.filter,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setFilter: (filter: TodoFilterType) => dispatch(setFilter(filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerFilterList);