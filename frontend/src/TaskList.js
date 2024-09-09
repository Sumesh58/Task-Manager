import React from "react";
import axios from "axios";

const TaskList = ({ tasks, deleteTask }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3333/tasks/${id}`)
      .then(() => deleteTask(id))
      .catch((error) => console.log("Error deleting task:", error));
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.title}</strong>: {task.description}{" "}
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
