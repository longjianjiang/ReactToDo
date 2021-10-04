import { connect } from "react-redux";
import FilterButton from "../components/FilterButton";
import { setFilter } from "../redux/todoFilter/action";
import { TodoFilterType } from "../redux/todoFilter/action";

const FILTER_NAMES = Object.values(TodoFilterType);

const InnerFilterList = ({currentFilter, setFilter}) => (
    <div className="filters btn-group stack-exception">
        {FILTER_NAMES.map(name => 
            <FilterButton
                key={name}
                name={name}
                isPressed={name == currentFilter}
                setFilter={setFilter}
            />
        )}
    </div>
);

const mapStateToProps = state => ({
    currentFilter: state.todoFilter,
});

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerFilterList);