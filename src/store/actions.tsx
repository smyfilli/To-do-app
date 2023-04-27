import { Task } from "../types";

export const addItem = (payload: Task) => {
  return {
    type: "ADD_TASK",
    payload
  };
};

export const editItem = (payload: Task) => {
  return {
    type: "EDIT_TASK",
    payload
  };
};

export const deleteItem = (payload: number) => {
  return {
    type: "DELETE_TASK",
    payload
  };
};

export const toggleComplete = (payload: number) => {
  return {
    type: "TOGGLE_COMPLETED",
    payload
  };
};
