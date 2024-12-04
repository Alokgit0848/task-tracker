import React, { useState } from "react";

const TaskDetailsPage = ({ tasks, updateTask, deleteTask }) => {
  const [actionMessage, setActionMessage] = useState("");

  const handleUpdateTask = (id, updatedTask) => {
    updateTask(id, updatedTask);
    setActionMessage(`Task updated successfully!`);
    setTimeout(() => setActionMessage(""), 3000); // Clear message after 3 seconds
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
    setActionMessage("Task deleted successfully!");
    setTimeout(() => setActionMessage(""), 3000); // Clear message after 3 seconds
  };

  const statuses = ["Pending", "In Progress", "Completed"];

  return (
    <div style={containerStyles}>
      <h1>Task Details</h1>
      {actionMessage && <div style={messageStyles}>{actionMessage}</div>}

      {statuses.map((status) => (
        <div key={status} style={{ marginBottom: "20px" }}>
          <h2>{status} Tasks</h2>
          <table style={tableStyles}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{new Date(task.deadline).toLocaleDateString()}</td>
                    <td>
                      {status === "Pending" && (
                        <button
                          onClick={() =>
                            handleUpdateTask(task._id, {
                              ...task,
                              status: "In Progress",
                            })
                          }
                          style={buttonStyles}
                        >
                          Mark as In Progress
                        </button>
                      )}
                      {status === "In Progress" && (
                        <button
                          onClick={() =>
                            handleUpdateTask(task._id, {
                              ...task,
                              status: "Completed",
                            })
                          }
                          style={buttonStyles}
                        >
                          Mark as Completed
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteTask(task._id)}
                        style={{ ...buttonStyles, backgroundColor: "#e63946" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

// CSS styles in JS
const containerStyles = {
  padding: "20px",
  maxWidth: "900px",
  margin: "auto",
};

const messageStyles = {
  margin: "10px 0",
  padding: "10px",
  backgroundColor: "#d4edda",
  color: "#155724",
  borderRadius: "5px",
  textAlign: "center",
};

const tableStyles = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "20px",
  border: "1px solid #ccc",
};

const buttonStyles = {
  margin: "0 5px",
  padding: "5px 10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default TaskDetailsPage;
