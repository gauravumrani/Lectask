export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const MOVE_TASK = 'MOVE_TASK';

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

export interface ITaskDispatchProps {
 addTask: (task: Task) => void;
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

export interface MoveTaskAction {
  type: typeof MOVE_TASK;
  payload: Task;
}

export type TaskActionTypes = AddTaskAction | RemoveTaskAction | MoveTaskAction;

