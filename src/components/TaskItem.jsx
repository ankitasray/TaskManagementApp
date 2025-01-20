import { Link } from "react-router-dom";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`flex items-center justify-between p-3 border rounded-md ${
        task.completed ? "bg-green-100 border-green-300" : "bg-white border-gray-300"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-2"
        />
        <Link
          to={`/task/${task.id}`}
          className={`${
            task.completed ? "line-through text-gray-500" : "text-blue-500"
          } font-medium`}
        >
          {task.title}
        </Link>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
