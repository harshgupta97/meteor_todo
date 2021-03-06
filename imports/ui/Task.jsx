import React from "react";

export const Task = ({ task, onCheckboxClicked, onDeleteClick }) => {
  return (
    <li>
      <input
        type="checkbox"
        readOnly
        onClick={() => onCheckboxClicked(task)}
        checked={!!task.isChecked}
      />
      <span>{task.text}</span>
      <button onClick={() => onDeleteClick(task)}>Remove</button>
    </li>
  );
};
