import React, { useState } from "react";

export const TaskForm = ({}) => {
  return (
    <div>
      <input type="text" placeholder="Enter task" />
      <button type="submit">Add task</button>
    </div>
  );
};
