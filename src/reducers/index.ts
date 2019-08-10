import { ADD_TASK, MainState, TaskActionTypes, Task, REMOVE_TASK } from "../interfaces/task";
import {TASK_TYPES} from '../constants';

let todoTasks: Task[] = [];
let progressTasks: Task[] = [];
let doneTasks: Task[] = [];

const localStorageData = localStorage.getItem('state')

if (localStorageData) {
  const allTasks: MainState = JSON.parse(localStorageData);
  todoTasks = allTasks.cards[TASK_TYPES.TODO].allTasks;
  progressTasks = allTasks.cards[TASK_TYPES.IN_PROGRESS].allTasks;
  doneTasks = allTasks.cards[TASK_TYPES.DONE].allTasks;
}

const initialState: MainState = {
  cards: {
    [TASK_TYPES.TODO]: {
      name: 'To Do',
      allTasks: todoTasks,
    },
    [TASK_TYPES.IN_PROGRESS]: {
      name: 'In Progress',
      allTasks: progressTasks,
    },
    [TASK_TYPES.DONE]: {
      name: 'Completed',
      allTasks: doneTasks,
    }
  }
};

const removeTask = (state: MainState, action: TaskActionTypes): MainState => {
  const typeOfTask = action.payload.type;
  const newState = state.cards[typeOfTask].allTasks.filter((val: Task): any => val.id !== action.payload.id );
  return {
    cards: {
      ...state.cards,
      [typeOfTask]: {
        ...state.cards[typeOfTask],
        allTasks: newState
      }
    }
  }
}

const rootReducer = (state = initialState, action: TaskActionTypes): MainState => {
  switch (action.type) {
    case ADD_TASK:
      return {
        cards: {
          ...state.cards,
          [TASK_TYPES.TODO]: {
            ...state.cards[TASK_TYPES.TODO],
            allTasks: [
              ...state.cards[TASK_TYPES.TODO].allTasks,
              action.payload
            ]
          }
        }
      }
    case REMOVE_TASK:
      return removeTask(state, action);
  }
  return state;
};

export default rootReducer;
