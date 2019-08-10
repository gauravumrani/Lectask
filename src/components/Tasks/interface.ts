import {Task} from '../../interfaces/task';


export interface TaskState {
  modal: boolean;
}

export interface TaskModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  addTask: (task: Task) => void;
}
