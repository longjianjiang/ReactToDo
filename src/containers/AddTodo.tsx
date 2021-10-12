import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { addTodo } from "../redux/todoList/action";
import { store } from "../redux";

interface IAddTodoProps {
  name: string;
  isPressed: boolean;
};

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

function AddTodo(props: DispatchProps) {
    const [name, setName] = useState("");

    function handleSubmit(e: React.FormEvent) {
        // const tmp = store.getState();
        // console.log(tmp);
        e.preventDefault();
        if (!name.trim()) { return; }
        props.addTodo(name);
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
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: (name: string) => dispatch(addTodo(name)),
});

// null is necessary.
export default connect(null, mapDispatchToProps)(AddTodo)