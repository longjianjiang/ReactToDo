import AddTodo from "./containers/AddTodo";
import FilterList from "./containers/FilterList";
import ListTitleHeader from "./containers/ListTitleHeader";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todoapp stack-large">
      <h1>TodoList</h1>
      <AddTodo />
      <FilterList />
      <ListTitleHeader />
      <TodoList />
    </div>
  );
}

export default App;