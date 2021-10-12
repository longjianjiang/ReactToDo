import { connect } from "react-redux";
import { IStoreState } from "../redux/reducer";

const InnerTitleHeader = (props: {count: number}) => (
    <h2 id="list-heading">{props.count} tasks remaining</h2>
);

const mapStateToProps = ( {todoList}: IStoreState) => ({
    count: todoList.lists.length,
});

export default connect(
    mapStateToProps,
)(InnerTitleHeader);