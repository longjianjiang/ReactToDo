import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/todoList/action";
import { store } from "../redux";

function AddTodo({ dispatch }) {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        const tmp = store.getState();
        console.log(tmp);
        e.preventDefault();
        if (!name.trim()) { return; }
        dispatch(addTodo(name));
        setName("");
    }

    function handleChange(e) {
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
}

export default connect()(AddTodo)