import { useDispatch } from "react-redux";
import { Task } from "../types";

import { toggleComplete, deleteItem } from "../store/actions";

interface TaskListItemProps {
  task: Task;
  setEditTask: (editTask: Task) => void;
  // onToggleCompleted: (id: number) => void;
  // onDeleteTask: (id: number) => void;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task, setEditTask }) => {
  const dispatch = useDispatch();

  const handleToggleCompleted = () => {
    dispatch(toggleComplete(task.id));
  };

  const handleDeleteTask = () => {
    if (window.confirm("Are you sure you want to delete the task?")) {
      dispatch(deleteItem(task.id));
    }
  };

  return (
    <div className="task-list-item">
      <div className="task-list-item-title">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompleted}
        />
        <div>{task.title}</div>
      </div>
      <div className="task-list-item-actions">
        <button onClick={handleDeleteTask}>Delete</button>
        <button onClick={() => setEditTask(task)}>Edit</button>
      </div>
    </div>
  );
};

export default TaskListItem;
