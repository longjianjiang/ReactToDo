import React, {useState} from "react";
import { ITodoListItem } from "../redux/todoList/todoList";

interface ITodoProps {
  id: string;
  todoItem: ITodoListItem;
  toggleTodo: (id: number) => any;
  deleteTodo: (id: number) => any;
  editTodo: (id: number, name: string) => any;
};

export default function Todo(props: ITodoProps) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewName(e.target.value);
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!newName.trim()) { return; }

        props.editTodo(props.todoItem.id, newName);
        setNewName("");
        setEditing(false);
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="todo-label" htmlFor={props.id}>
              New name for {props.todoItem.name}
            </label>
            <input id={props.id} className="todo-text" type="text" onChange={handleChange}/>
          </div>
          <div className="btn-group">
            <button
                type="button" 
                className="btn todo-cancel"
                onClick={() => setEditing(false)}
            >
              Cancel
              <span className="visually-hidden">renaming {props.todoItem.name}</span>
            </button>
            <button type="submit" className="btn btn__primary todo-edit">
              Save
              <span className="visually-hidden">new name for {props.todoItem.name}</span>
            </button>
          </div>
        </form>
    );
    const viewTemplate = (
        <div className="stack-small">
          <div className="c-cb">
              <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.todoItem.completed}
                onChange={() => props.toggleTodo(props.todoItem.id)}
              />
              <label className="todo-label" htmlFor={props.id}>
                {props.todoItem.name}
              </label>
            </div>
            <div className="btn-group">
              <button 
                type="button" 
                className="btn"
                onClick={() => setEditing(true)}
              >
                Edit <span className="visually-hidden">{props.todoItem.name}</span>
              </button>
              <button
                type="button"
                className="btn btn__danger"
                onClick={() => props.deleteTodo(props.todoItem.id)}
              >
                Delete <span className="visually-hidden">{props.todoItem.name}</span>
              </button>
            </div>
        </div>
    );

    return (
        <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
    );
  }

