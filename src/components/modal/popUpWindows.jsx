import React, { Component, Fragment } from 'react';
import Modal from './modal';
import Icon from '../icon/icon';

class PopUpWindows extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    this.setState({ isOpen: false });
  }

  render() {
    return (      
      <Fragment>      
      <Icon size={2} className={this.props.nameIcon} onClick={this.openModal} />
        <Modal
          title={this.props.title}
          isOpen={this.state.isOpen}
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}          
          classHeightContainer={this.props.classHeightContainer}
        >
         {this.props.content}
        </Modal>
        </Fragment>
    );
  }
}

export default PopUpWindows;