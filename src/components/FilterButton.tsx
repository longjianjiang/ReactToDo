import React from "react";
import { TodoFilterType } from "../redux/todoFilter/todoFilter";

interface IFilterButtonProps {
    name: string;
    isPressed: boolean;
    setFilter: (filter: TodoFilterType) => any
};

function FilterButton(props: IFilterButtonProps) {
  return (
    <button 
        type="button" 
        className="btn toggle-btn" 
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.name as unknown as TodoFilterType)} // TODO: Fix covert
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name} </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;