import * as React from 'react';
import { connect } from "react-redux";
import {
  Container, Row, Col, Button,
} from 'reactstrap';

import {addTask, editTask} from '../../actions/index';
import {MainState, Task, TaskDispatchProps} from '../../interfaces/task';
import TasksModalComponent from './addTaskModal';
import {TaskState} from './interface';
import CardContainer from '../CardContainers/CardContainer';
import './style.scss';

const mapStateToProps = (state: MainState): MainState => state;

const mapDispatchToProps = (dispatch: any): any => ({
  addTask: (task: Task): any => dispatch(addTask(task)),
  editTask: (task: Task): any => dispatch(editTask(task)),
});

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

  editTask(taskData: Task): void {
    const task = taskData;
    this.props.editTask(task);
    this.toggleModal();
  }

  toggleModal(task?: Task): void {
    this.setState({
      editTask: task,
      modal: !this.state.modal,
    });
  }

  render(): React.ReactNode {
    const {cards} = this.props;
    return (
      <Container fluid>
        <Row className="mt-5">
          <Col md="12" className="mb-3">
            <Button color="primary" className="dark" onClick={(): void => this.toggleModal()}>Add Task</Button>
          </Col>
          {
            Object.keys(cards).map((value, i): JSX.Element => (
              <Col md="4" key={i}>
                <CardContainer card={cards[value]} toggleModal={this.toggleModal}/>
              </Col>
            ))
          }
          <TasksModalComponent data={this.state.editTask} addTask={this.addTask} editTask={(task: Task): void => this.editTask(task)} isOpen={this.state.modal} toggleModal={(task: Task): void => this.toggleModal(task)}/>
        </Row>
      </Container>
    );
  }
}

const TasksC = connect<MainState, TaskDispatchProps>(mapStateToProps, mapDispatchToProps)(TasksComponent);
export default TasksC;
