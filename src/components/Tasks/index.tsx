import * as React from 'react';
import {Container, Row, Col} from 'reactstrap';

import {CardOne, CardTwo, CardThree} from '../../pages/Cards';
import './style.scss';

export default class TasksComponent extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="mt-5">
          <Col md="4">
            <CardOne />
          </Col>
          <Col md="4">
            <CardTwo />
          </Col>
          <Col md="4">
            <CardThree />
          </Col>
        </Row>
      </Container>
    );
  }
}