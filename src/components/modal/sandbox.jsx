import React, { Component, Fragment } from 'react';
import Modal from './modal';
import Icon from './../icon/icon';


class Sandbox extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    console.log('Submit function!');
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div className="user-menu">
      <Fragment>
                <Icon size={2} name="user" onClick={this.openModal} />
        <Modal
          title="Dialog window"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
      
        </Modal>

      </Fragment>
      </div>
    );
  }
}

export default Sandbox;