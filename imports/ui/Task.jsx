import React from "react";

export const Task = ({ task, onCheckboxClicked }) => {
  return (
    <li>
      <input
        type="checkbox"
        readOnly
        onClick={() => onCheckboxClicked(task)}
        checked={!!task.isChecked}
      />
      <span>{task.text}</span>
    </li>
  );
};
