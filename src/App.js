import React, {useState} from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import FilterButton from "./components/FilterButton";

const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
    const [filter, setFilter] = useState('All');
    const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
    )
  );
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
    if (id === task.id) {
        return {...task, completed: !task.completed};
    }
    return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
  }

  function editTask(id, newName) {
      const updatedTasks = tasks.map(task => {
          if (id == task.id) {
              return {...task, name: newName};
          }
          return task;
      });
      setTasks(updatedTasks);
  }

  return (
    <div className="todoapp stack-large">
      <h1>Todo</h1>
      <AddTodo />
      <div className="filters btn-group stack-exception">
          {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;