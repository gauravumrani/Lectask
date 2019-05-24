import * as React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { connect } from "react-redux";

import {CardOne, CardTwo, CardThree} from '../../pages/Cards';
import {AllTaskState} from '../../interfaces/task';
import { AppState } from '../../store'

import './style.scss';

const mapStateToProps = (state: AppState) => {
  return { tasks: state.tasks };
};

class TasksComponent extends React.Component<{tasks:AllTaskState}, {}> {
  render() {
    const {tasks} = this.props;
    return (
      <Container fluid>
        <Row className="mt-5">
          <Col md="4">
            <CardOne card={tasks.cardOne}/>
          </Col>
          <Col md="4">
            <CardTwo />
          </Col>
          <Col md="4">
            <CardThree card={tasks.cardThree}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

const Task = connect(mapStateToProps)(TasksComponent);
export default Task;