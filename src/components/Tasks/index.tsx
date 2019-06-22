import * as React from 'react';
import { connect } from "react-redux";
import {
  Container, Row, Col, Card, CardText, CardBody, CardTitle, Button
} from 'reactstrap';
import {addTask} from '../../actions/index';
import {MainState, Task, ITaskDispatchProps} from '../../interfaces/task';
import AddTasksModalComponent from './addTaskModal';
import {ITaskState} from './interface';

import './style.scss';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (task: Task) => dispatch(addTask(task)),
});

const CardWrapper= (props) => {
  return (
    <Card draggable="true">
      <CardBody>
        <CardTitle>{props.element.title}</CardTitle>
        <CardText>{props.element.description}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  )
}

const CardContainer = (props) => {
  const allTasks = props.card.allTasks;
  return (
    <div className="tasks-column">
      <div className="title">{props.card.name}</div>
      <div className="wrapper">
        {!allTasks.length && <span>No Task Available</span>}
        {
          allTasks && (allTasks.map(el => <CardWrapper element={el} key={el.id}/>))
        }
      </div>
    </div>
  );
};

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>


class TasksComponent extends React.Component<Props, ITaskState> {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      modal: false,
    }
  }

  addTask(taskData: Task) {
    const task = taskData;
    task.id = (new Date).getTime().toString();
    this.props.addTask(task);
    this.toggleModal();
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const {cards} = this.props;
    return (
      <Container fluid>
        <Row className="mt-5">
          <Col md="12" className="mb-3">
            <Button color="primary" className="dark" onClick={this.toggleModal}>Add Task</Button>
          </Col>
          {
            Object.keys(cards).map((value, i) => (
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

const Task = connect<MainState, ITaskDispatchProps>(mapStateToProps, mapDispatchToProps)(TasksComponent);
export default Task;
