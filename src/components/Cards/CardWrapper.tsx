import * as React from 'react';
import { connect } from "react-redux";

import {
  Card, CardText, CardBody, CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import {deleteTask, moveTask} from '../../actions/index';
import {Task, TaskDispatchProps} from '../../interfaces/task';
import {TASK_TYPES} from '../../constants';

const mapDispatchToProps = (dispatch: any): any => ({
  deleteTask: (task: Task): any => dispatch(deleteTask(task)),
  moveTask: (task: Task, action: string): any => dispatch(moveTask(task, action)),
});

type Props = Task & TaskDispatchProps & {
  toggleModal: (task: Task) => void;
};

class CardWrapper extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  drag(e: React.DragEvent<HTMLElement>, task: Task): void {
    e.dataTransfer.setData('transfer', JSON.stringify(task));
  }

  render(): React.ReactNode {
    return (
      <Card draggable onDragStart={(e): void => {this.drag(e, this.props)}}>
        <UncontrolledDropdown>
          <DropdownToggle className="dropdownMenu">
            ...
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={(): void => this.props.deleteTask(this.props)}>Delete</DropdownItem>
            <DropdownItem onClick={(): void => this.props.toggleModal(this.props)}>Edit</DropdownItem>
            {
              this.props.type && this.props.type === TASK_TYPES.TODO &&
              <DropdownItem onClick={(): void => this.props.moveTask(this.props , TASK_TYPES.IN_PROGRESS)}>Move to InProgress</DropdownItem>
            }
            {
              this.props.type && this.props.type === TASK_TYPES.IN_PROGRESS &&
              <div>
                <DropdownItem onClick={(): void => this.props.moveTask(this.props, TASK_TYPES.TODO)}>Move to Todo</DropdownItem>
                <DropdownItem onClick={(): void => this.props.moveTask(this.props, TASK_TYPES.DONE)}>Move to Done</DropdownItem>
              </div>
            }
            {
              this.props.type && this.props.type === TASK_TYPES.DONE &&
              <DropdownItem onClick={(): void => this.props.moveTask(this.props, TASK_TYPES.IN_PROGRESS)}>Move to In Progress</DropdownItem>
            }
          </DropdownMenu>
        </UncontrolledDropdown>
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardText>{this.props.description}</CardText>
        </CardBody>
      </Card>
    )
  }
}

const TasksC = connect<{}, TaskDispatchProps>(null, mapDispatchToProps)(CardWrapper);
export default TasksC;
