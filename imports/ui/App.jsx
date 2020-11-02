import React from "react";
import { Task } from "./Task";
import { useTracker } from "meteor/react-meteor-data";
import { TasksCollection } from "../api/TasksCollection";
import { TaskForm } from "./TaskForm";

// const tasks = [
//   { _id: 1, text: "First Task" },
//   { _id: 2, text: "Second Task" },
//   { _id: 3, text: "Third Task" },
// ];

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());
  return (
    <div>
      <h2>Simple todo app</h2>
      <TaskForm />
      <ul>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
};
