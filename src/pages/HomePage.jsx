import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import TrustedBySection from "../components/TrustedBySection";
import Navbar from "../components/Navbar";

const HomePage = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("date");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOrder === "priority") {
      return b.priority - a.priority;
    }
    return b.date - a.date;
  });
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Navbar/>
      <HeroSection/>
      <TrustedBySection/>
  {/* <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
    Task Manager
  </h1> */}
  <TaskForm tasks={tasks} setTasks={setTasks} />
  <div className="flex flex-col md:flex-row justify-between items-center mb-4">
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="border p-2 rounded w-full md:w-auto mb-2 md:mb-0"
    >
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="incomplete">Incomplete</option>
    </select>
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="border p-2 rounded w-full md:w-auto"
    >
      <option value="date">Sort by Date</option>
      <option value="priority">Sort by Priority</option>
    </select>
  </div>
  <TaskList tasks={sortedTasks} setTasks={setTasks} />
</div>

  );
};

export default HomePage;
