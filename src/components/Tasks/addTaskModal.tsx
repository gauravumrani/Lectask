import * as React from 'react';
import {
  Button, Modal, ModalHeader,
  ModalBody, ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';

import {TASK_TYPES} from '../../constants';
import {TaskModalProps} from './interface'
import {Task} from '../../interfaces/task';

class TasksModalComponent extends React.Component<TaskModalProps, Task> {
  constructor(props: TaskModalProps) {
    super(props);
    this.state = {
      title: '',
      description: '',
      type: TASK_TYPES.TODO,
    };
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillReceiveProps(props: TaskModalProps): void {
    this.setState({
      title: props.data ? props.data.title : '',
      description: props.data ? props.data.description : '',
      type: props.data ? props.data.type : TASK_TYPES.TODO,
      id: props.data ? props.data.id : '',
    })
  }

  onTitleChange(event: React.ChangeEvent<any>): void {
    const value = event.target.value;
    this.setState({
      title: value,
    });
  }

  onDescChange(event: React.ChangeEvent<any>): void {
    const value = event.target.value;
    this.setState({
      description: value,
    });
  }

  addTask(): void {
    this.props.addTask(this.state);
    this.setState({
      title: '',
      description: '',
    })
  }

  editTask(): void {
    let data: any = {...this.props.data};
    if (data) {
      data.title = this.state.title
      data.description = this.state.description
      this.props.editTask(data);
      this.setState({
        title: '',
        description: '',
      })
    }
  }

  toggleModal(): void {
    this.props.toggleModal();
    this.setState({
      title: '',
      description: '',
      type: TASK_TYPES.TODO,
      id: '',
    })
  }

  render(): React.ReactNode {
    const {data} = this.props;
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="title">Enter Title</Label>
                <Input type="text" name="title" value={this.state.title} id="title" onChange={this.onTitleChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="description">Enter Description</Label>
                <Input type="textarea" name="description" value={this.state.description} id="description" onChange={this.onDescChange} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            {
              data && data.id &&
              <Button color="primary" onClick={this.editTask}>Update</Button>
            }
            {
              !data &&
              <Button color="primary" onClick={this.addTask}>Save</Button>
            }
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TasksModalComponent;
