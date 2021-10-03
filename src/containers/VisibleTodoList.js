import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../redux/list/action";

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
