import {Task, ADD_TASK, REMOVE_TASK, MOVE_TASK, TaskActionTypes} from "../interfaces/task";

export const addTask = (task: Task): TaskActionTypes => ({
  type: ADD_TASK,
  payload: task
});

export const deleteTask = (task: Task): TaskActionTypes => ({
  type: REMOVE_TASK,
  payload: task
});


export const moveTask = (task: Task, action: string): TaskActionTypes => ({
  type: MOVE_TASK,
  payload: task,
  action
});
