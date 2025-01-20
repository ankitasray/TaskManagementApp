import { useState } from "react";

const TaskForm = ({ tasks, setTasks }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState(1);

  const handleAddTask = () => {
    if (taskTitle.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      priority,
      completed: false,
      date: new Date(),
    };
    setTasks([...tasks, newTask]);
    setTaskTitle("");
    setTaskDescription("");
    setPriority(1);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
  <input
    type="text"
    value={taskTitle}
    onChange={(e) => setTaskTitle(e.target.value)}
    className="w-full p-3 rounded border mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Task title"
  />
  <textarea
    value={taskDescription}
    onChange={(e) => setTaskDescription(e.target.value)}
    className="w-full p-3 rounded border mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Task description"
  ></textarea>
  <div className="flex items-center gap-4">
    <select
      value={priority}
      onChange={(e) => setPriority(Number(e.target.value))}
      className="p-3 rounded border w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value={1}>Low</option>
      <option value={2}>Medium</option>
      <option value={3}>High</option>
    </select>
    <button
      onClick={handleAddTask}
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded hover:scale-105 transition-transform"
    >
      Add Task
    </button>
  </div>
</div>

  );
};

export default TaskForm;
