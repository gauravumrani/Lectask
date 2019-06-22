import { ADD_TASK, REMOVE_TASK, MainState, TaskActionTypes } from "../interfaces/task";

const initialState: MainState = {
  cards: {
    '1': {
      name: 'To Do',
      allTasks: [
        {
          id: '1',
          title: 'This is a dummy title',
          description: 'This is a description'
        }
      ]
    },
    '2': {
      name: 'In Progress',
      allTasks: [
        {
          id: '2',
          title: 'This is a dummy title which is in progress',
          description: 'This is a description',
        }
      ]
    },
    '3': {
      name: 'Completed',
      allTasks: [

      ]
    }
  }
};

const rootReducer = (state = initialState, action: TaskActionTypes) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        cards: {
          ...state.cards,
          '1': {
            ...state.cards['1'],
            allTasks: [
              ...state.cards['1'].allTasks,
              action.payload
            ]
          }
        }
      }
  }
  return state;
};

export default rootReducer;
