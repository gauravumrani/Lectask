import * as React from 'react';
import { connect } from "react-redux";

import {Task, TaskContainer, TaskDispatchProps, MainState} from '../../interfaces/task';
import {moveTask} from '../../actions/index';

import CardWrapper from '../Cards/CardWrapper';

type Props = TaskDispatchProps & {
  card: any;
  toggleModal: (task: Task) => void;
}


const mapDispatchToProps = (dispatch: any): any => ({
  moveTask: (task: Task, action: string): any => dispatch(moveTask(task, action)),
});

class CardContainer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  drop(e: React.DragEvent<HTMLDivElement>, tasks: TaskContainer): void {
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    if (data) {
      const task: Task = JSON.parse(data);
      if (task.type !== tasks.type) {
        // move the task onlys when we are moving it to other type container
        // if user drag that todo task into todo container, we dont perform move
        this.props.moveTask(task, tasks.type);
      }
    }
  }

  allowDrop(e: React.DragEvent): void {
    e.preventDefault();
  }


  render(): React.ReactNode {
    const allTasks = this.props.card.allTasks;
    return (
      <div className="tasks-column" onDrop={(e): void => {this.drop(e, this.props.card)}} onDragOver={this.allowDrop}>
        <div className="title">{this.props.card.name}</div>
        <div className="wrapper">
          {!allTasks.length && <span>No Task Available</span>}
          {
            allTasks && (allTasks.map((el: Task): JSX.Element => <CardWrapper toggleModal={(task: Task): void => this.props.toggleModal(task)} {...el} key={el.id} />))
          }
        </div>
      </div>
    );
  }
}

const TasksContainer = connect<{}, TaskDispatchProps>(null, mapDispatchToProps)(CardContainer);
export default TasksContainer;
