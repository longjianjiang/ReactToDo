import { connect } from "react-redux";
import { Dispatch } from "redux";
import TodoList from "../components/TodoList";
import { toggleTodo, deleteTodo, editTodo } from "../redux/todoList/action";
import { TodoFilterType } from "../redux/todoFilter/todoFilter";
import { IStoreState } from "../redux/reducer";
import { ITodoListItem } from "../redux/todoList/todoList";

const getVisibleTodos = (todos: Array<ITodoListItem>, filter: TodoFilterType) => {    
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

const mapStateToProps = ({todoFilter, todoList}: IStoreState) => ({
    todoList: getVisibleTodos(todoList.lists, todoFilter.filter)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
  deleteTodo: (id: number) => dispatch(deleteTodo(id)),
  editTodo: (id: number, name: string) => dispatch(editTodo(id, name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
