import * as React from 'react';

import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Cardone = (props) => {
  return (
    <div className="tasks-column">
      <div className="title">{props.card.name}</div>
      <div className="wrapper">
        {
          props.card.allTasks.map(el => (
            <Card draggable="true" key={el.id}>
              <CardBody>
                <CardTitle>{el.title}</CardTitle>
                <CardText>{el.description}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          ))
        }
      </div>
    </div>
  );
};

export default Cardone;