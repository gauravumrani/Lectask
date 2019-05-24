import {Task, ADD_TASK, REMOVE_TASK, TaskActionTypes} from "../interfaces/task";

export const addTask = (task: Task): TaskActionTypes => ({
  type: ADD_TASK,
  payload: task
});

export const removeTodo = (task: Task): TaskActionTypes => ({
  type: REMOVE_TASK,
  payload: task
});