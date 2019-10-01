export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const MOVE_TASK = 'MOVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export interface Task {
  id?: string;
  title: string;
  description: string;
  type: string;
}

export interface MainState {
  cards: {
    [key: string]: TaskContainer;
  };
}

export interface TaskDispatchProps {
  addTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  moveTask: (task: Task, action: string) => void;
  editTask: (task: Task) => void;
}

export interface TaskContainer {
  name: string;
  allTasks: Task[];
}

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: Task;
}

export interface EditTaskAction {
  type: typeof EDIT_TASK;
  payload: Task;
}

export interface MoveTaskAction {
  type: typeof MOVE_TASK;
  payload: Task;
  action: string;
}

export type TaskActionTypes = MoveTaskAction | AddTaskAction | RemoveTaskAction | EditTaskAction;

