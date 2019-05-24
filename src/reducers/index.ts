import { ADD_TASK, REMOVE_TASK, AllTaskContainerState, TaskActionTypes } from "../interfaces/task";

const initialState: AllTaskContainerState = {
  tasks : {
    cardOne: {
      name: 'To Do',
      allTasks: [
        {
          id: '1',
          title: 'This is a dummy title',
          description: 'This is a description'
        }
      ]
    },
    cardTwo: {
      name: 'In Progress',
      allTasks: [
        {
          id: '1',
          title: 'This is a dummy title which is in progress',
          description: 'This is a description',
        }
      ]
    },
    cardThree: {
      name: 'Done',
      allTasks: [
        {
          id: '1',
          title: 'This is a dummy title which is done',
          description: 'This is a description'
        },
        {
          id: '2',
          title: 'One more done tasks',
          description: 'This is a done tasks'
        }
      ]
    }
  }
}

const rootReducer = (state = initialState, action: TaskActionTypes) => {
  return state;
};

export default rootReducer;