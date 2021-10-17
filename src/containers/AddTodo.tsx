import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import TodoListStore from "../mobx/todoListStore";

interface IAddTodo {
  todoList?: typeof TodoListStore,
}

const AddTodo = inject("todoList")(observer((props: IAddTodo) => {
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      if (!name.trim()) { return; }
      props.todoList!.addTodo(name);
      setName("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  
  return (
      <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}));

export default AddTodo;