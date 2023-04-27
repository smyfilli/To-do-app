export interface Task {
  id: number;
  title: string;
  completed: boolean;
  startDate: Date;
  endDate: Date;
  description?: string;
}

export interface State {
  tasks: Task[];
}

export type AppAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "EDIT_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "TOGGLE_COMPLETED"; payload: number };
