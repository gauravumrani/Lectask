import {TASK_ACTIONS} from '../constants';

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
  type: string;
  name: string;
  allTasks: Task[];
}

export interface AddTaskAction {
  type: typeof TASK_ACTIONS.ADD_TASK;
  payload: Task;
}

export interface RemoveTaskAction {
  type: typeof TASK_ACTIONS.REMOVE_TASK;
  payload: Task;
}

export interface EditTaskAction {
  type: typeof TASK_ACTIONS.EDIT_TASK;
  payload: Task;
}

export interface MoveTaskAction {
  type: typeof TASK_ACTIONS.MOVE_TASK;
  payload: Task;
  moveTo?: string;
}

export type TaskActionTypes = AddTaskAction | RemoveTaskAction | EditTaskAction | MoveTaskAction;

