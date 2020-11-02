import React, { useState } from "react";
import { TasksCollection } from "../api/TasksCollection";

export const TaskForm = ({}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    TasksCollection.insert({
      text: text.trim(),
      createdAt: new Date(),
    });

    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};
