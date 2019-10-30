import {Task, TaskActionTypes} from "../interfaces/task";
import {TASK_ACTIONS} from '../constants';

export const addTask = (task: Task): TaskActionTypes => ({
  type: TASK_ACTIONS.ADD_TASK,
  payload: task
});

export const editTask = (task: Task): TaskActionTypes => ({
  type: TASK_ACTIONS.EDIT_TASK,
  payload: task
});

export const deleteTask = (task: Task): TaskActionTypes => ({
  type: TASK_ACTIONS.REMOVE_TASK,
  payload: task
});

export const moveTask = (task: Task, moveTo: string): TaskActionTypes => ({
  type: TASK_ACTIONS.MOVE_TASK,
  payload: task,
  moveTo
});
