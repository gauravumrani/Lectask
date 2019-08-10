import * as React from 'react';
import { connect } from "react-redux";
import {
  Container, Row, Col, Card, CardText, CardBody, CardTitle, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import {addTask} from '../../actions/index';
import {MainState, Task, TaskDispatchProps} from '../../interfaces/task';
import AddTasksModalComponent from './addTaskModal';
import {TaskState} from './interface';
import CardWrapper from '../Cards/CardWrapper';

import './style.scss';

const mapStateToProps = (state: MainState): MainState => state;

const mapDispatchToProps = (dispatch: any): any => ({
  addTask: (task: Task): any => dispatch(addTask(task)),
});

const CardContainer = (props: {card: any}): JSX.Element => {
  const allTasks = props.card.allTasks;
  return (
    <div className="tasks-column">
      <div className="title">{props.card.name}</div>
      <div className="wrapper">
        {!allTasks.length && <span>No Task Available</span>}
        {
          allTasks && (allTasks.map((el: Task): JSX.Element => <CardWrapper {...el} key={el.id} />))
        }
      </div>
    </div>
  );
};

type Props = ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>


class TasksComponent extends React.Component<Props, TaskState> {
  constructor(props: Props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      modal: false,
    }
  }

  addTask(taskData: Task): void {
    const task = taskData;
    task.id = (new Date).getTime().toString();
    this.props.addTask(task);
    this.toggleModal();
  }

  toggleModal(): void {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render(): React.ReactNode {
    const {cards} = this.props;
    return (
      <Container fluid>
        <Row className="mt-5">
          <Col md="12" className="mb-3">
            <Button color="primary" className="dark" onClick={this.toggleModal}>Add Task</Button>
          </Col>
          {
            Object.keys(cards).map((value, i): JSX.Element => (
              <Col md="4" key={i}>
                <CardContainer card={cards[value]}/>
              </Col>
            ))
          }
          <AddTasksModalComponent addTask={this.addTask} isOpen={this.state.modal} toggleModal={this.toggleModal}/>
        </Row>
      </Container>
    );
  }
}

const TasksC = connect<MainState, TaskDispatchProps>(mapStateToProps, mapDispatchToProps)(TasksComponent);
export default TasksC;
