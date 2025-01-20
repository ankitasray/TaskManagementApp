import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskDetailPage from "./pages/TaskDetailPage";
import { loadFromLocalStorage, saveToLocalStorage } from "./utils/localStorage.js";
import HeroSection from "./components/HeroSection.jsx";

const App = () => {
  const [tasks, setTasks] = useState(() => loadFromLocalStorage("tasks") || []);

  const updateTasks = (newTasks) => {
    setTasks(newTasks);
    saveToLocalStorage("tasks", newTasks);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage tasks={tasks} setTasks={updateTasks} />} />
        <Route path="/task/:id" element={<TaskDetailPage tasks={tasks} />} />
      </Routes>
    </Router>
  );
};

export default App;
