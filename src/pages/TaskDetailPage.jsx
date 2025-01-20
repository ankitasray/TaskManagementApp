import { useParams } from "react-router-dom";

const TaskDetailPage = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks.find((task) => task.id.toString() === id);

  if (!task) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold text-red-600">Task not found</h2>
      </div>
    );
  }
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h1 className="text-4xl font-extrabold mb-4">{task.title}</h1>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">Description: </span>
          {task.description || "No description provided."}
        </p>
        <p className="text-lg mb-4">
          <span className="font-semibold">Priority: </span>
          <span
            className={`${
              task.priority === 3
                ? "text-red-600"
                : task.priority === 2
                ? "text-yellow-600"
                : "text-green-600"
            } font-bold`}
          >
            {task.priority === 3
              ? "High"
              : task.priority === 2
              ? "Medium"
              : "Low"}
          </span>
        </p>
        <p className="text-lg">
          <span className="font-semibold">Status: </span>
          {task.completed ? "Completed" : "Incomplete"}
        </p>
      </div>
  );
};

export default TaskDetailPage;
