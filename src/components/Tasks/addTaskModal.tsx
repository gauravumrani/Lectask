import * as React from 'react';
import {
  Button, Modal, ModalHeader,
  ModalBody, ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';

import {ITaskModalState, ITaskModalProps} from './interface';

class AddTasksModalComponent extends React.Component<ITaskModalProps, ITaskModalState> {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        title: '',
        description: '',
      }
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => {
      let task = Object.assign({}, prevState.task);
      task[name] = value;
      return {task};
    })
  }

  addTask() {
    this.props.addTask(this.state.task);
    console.log('ok');
    this.setState(prevState => {
      return {
        task: {
          title: '',
          description: '',
        }
      };
    })
  }

  toggleModal() {
    this.props.toggleModal();
  }
  render() {
    return (
      <div>
      <Modal isOpen={this.props.isOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Enter Title</Label>
              <Input type="title" name="title" value={this.state.task.title} id="title" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="description">Enter Description</Label>
              <Input type="textarea" name="description" value={this.state.task.description} id="description" onChange={this.handleChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addTask}>Save</Button>{' '}
          <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    );
  }
};

export default AddTasksModalComponent;
