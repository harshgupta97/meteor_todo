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
  const tasks = useTracker(() =>
    TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  const toggleChecked = ({ _id, isChecked }) => {
    TasksCollection.update(_id, {
      $set: {
        isChecked: !isChecked,
      },
    });
  };

  const onRemoveTask = ({ _id }) => {
    TasksCollection.remove(_id);
  };

  return (
    <div>
      <h2>Simple todo application</h2>
      <TaskForm />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            onCheckboxClicked={toggleChecked}
            onDeleteClick={onRemoveTask}
          />
        ))}
      </ul>
    </div>
  );
};
