import React, { useState } from "react";
import { Task } from "../types";
import { useDispatch } from "react-redux";
import { addItem, editItem } from "../store/actions";

interface FormProps {
  onCancel: () => void;
  setActive: (arg0: boolean) => void;
  initialValues?: Task;
}

const Form: React.FC<FormProps> = ({ onCancel, setActive, initialValues }) => {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [completed, setCompleted] = useState(initialValues?.completed || false);
  const [startDate, setStartDate] = useState(initialValues?.startDate || "");
  const [endDate, setEndDate] = useState(initialValues?.endDate || "");
  const [description, setDescription] = useState(
    initialValues?.description || ""
  );
  //const [tasks, setTasks] = useState<Task>();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const task: Task = {
      id: initialValues?.id || Date.now(),
      title,
      completed,
      startDate,
      endDate,
      description
    };
    if (initialValues) {
      dispatch(editItem(task));
      setActive(false);
    } else {
      dispatch(addItem(task));
      {
        setActive(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="completed">Completed</label>
        <input
          id="completed"
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date</label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">{initialValues ? "Update" : "Add"}</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
