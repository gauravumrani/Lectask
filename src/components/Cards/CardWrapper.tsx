import * as React from 'react';
import { connect } from "react-redux";

import {
  Card, CardText, CardBody, CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import {deleteTask} from '../../actions/index';
import {Task, TaskDispatchProps} from '../../interfaces/task';


const mapDispatchToProps = (dispatch: any): any => ({
  deleteTask: (task: Task): any => dispatch(deleteTask(task)),
});

type Props = Task & TaskDispatchProps;

class CardWrapper extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Card draggable>
        <UncontrolledDropdown>
          <DropdownToggle className="dropdownMenu float-right">
            ...
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={(): void => this.props.deleteTask(this.props)}>Delete</DropdownItem>
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
