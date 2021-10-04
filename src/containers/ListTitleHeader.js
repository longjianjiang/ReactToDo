import { connect } from "react-redux";

const InnerTitleHeader = ({count}) => (
    <h2 id="list-heading">{count} tasks remaining</h2>
);

const mapStateToProps = state => ({
    count: state.todoList.length,
});

export default connect(
    mapStateToProps,
)(InnerTitleHeader);