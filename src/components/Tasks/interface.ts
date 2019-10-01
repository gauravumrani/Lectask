import {Task} from '../../interfaces/task';


export interface TaskState {
  modal: boolean;
  editTask?: Task;
}

export interface TaskModalProps {
  isOpen: boolean;
  toggleModal: (task?: Task) => void;
  addTask: (task: Task) => void;
  editTask: (task: Task) => void;
  data?: Task;
}
