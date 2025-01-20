import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks , onUpdateTask}) => {
  const handleToggle = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
