import React, {useState} from "react";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import FilterList from "./containers/FilterList";
import ListTitleHeader from "./containers/ListTitleHeader";

function App() {
  return (
    <div className="todoapp stack-large">
      <h1>TodoList</h1>
      <AddTodo />
      <FilterList />
      <ListTitleHeader />
      <VisibleTodoList />
    </div>
  );
}

export default App;