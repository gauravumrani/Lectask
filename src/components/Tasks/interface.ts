import {Task} from '../../interfaces/task';

export interface ITaskModalState {
  task: Task;
}

export interface ITaskState {
  modal: boolean;
}

export interface ITaskModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  addTask: (task: Task) => void;
}
