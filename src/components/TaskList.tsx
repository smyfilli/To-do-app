import React, { useState } from "react";
import TaskListItem from "./TaskListItem";
import { Task } from "../types";
import Form from "../components/form";
import { useSelector } from "react-redux";

// interface TaskListProps {
//   tasks: Task[];
// onToggleCompleted: (id: number) => void;
// onDeleteTask: (id: number) => void;
//}

const TaskList = () => {
  const [showForm, setShowForm] = useState(false);
  const [editTask, setEditTask] = useState<Task | undefined>(undefined);

  const tasks: Task[] = useSelector((state: any) => state.tasks);

  const handleEditTask = (task: Task) => {
    setEditTask(task);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setEditTask(undefined);
    setShowForm(false);
  };

  return (
    <>
      <header className="App-header">
        <h1>To Do List</h1>
        <button onClick={() => setShowForm(true)}>Add Task</button>
      </header>
      {showForm && (
        <Form
          initialValues={editTask}
          setActive={setShowForm}
          onCancel={handleCancelForm}
        />
      )}
      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskListItem
              key={task.id}
              task={task}
              setEditTask={handleEditTask}
            />
          ))
        ) : (
          <div>No tasks found.</div>
        )}
      </div>
    </>
  );
};

export default TaskList;
