import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo, deleteTodo, editTodo } from "../redux/todoList/action";
import { TodoFilterType } from "../redux/todoFilter/action";

const getVisibleTodos = (todos, filter) => {    
    switch (filter) {
      case TodoFilterType.SHOW_ALL:
        return todos
      case TodoFilterType.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case TodoFilterType.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        return todos
    }
}

const mapStateToProps = state => ({
    todoList: getVisibleTodos(state.todoList, state.todoFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  editTodo: (id, name) => dispatch(editTodo(id, name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
