import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import TaskDetailsPage from "./pages/TaskDetailsPage";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the server
  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  // Add a new task
  const addTask = (task) => {
    axios
      .post("http://localhost:5000/tasks", task)
      .then((res) => setTasks([...tasks, res.data]))
      .catch((err) => console.error("Error adding task:", err));
  };

  // Update an existing task
  const updateTask = (id, updatedTask) => {
    axios
      .put(`http://localhost:5000/tasks/${id}`, updatedTask)
      .then((res) => {
        setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
      })
      .catch((err) => console.error("Error updating task:", err));
  };

  // Delete a task
  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter((task) => task._id !== id));
      })
      .catch((err) => console.error("Error deleting task:", err));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Pass addTask to HomePage */}
        <Route path="/" element={<HomePage addTask={addTask} />} />

        {/* Pass tasks, updateTask, and deleteTask to TaskDetailsPage */}
        <Route
          path="/task-details"
          element={
            <TaskDetailsPage
              tasks={tasks}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
