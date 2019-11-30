import React, { Component, Fragment } from 'react';
import Modal from './modal';
import Icon from '../icon/icon';
import LoginForm from '../forms/loginForm';
import RegistrationForm from '../forms/registrationForm';

class SandBox extends Component {
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
bhb
  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Fragment>
                <Icon size={2} name="user" onClick={this.openModal} />
        <Modal
          title="Войти"
          isOpen={this.state.isOpen}
          onSubmit={this.handleSubmit}
          classHeightContainer="shortContainer"
        >
      <LoginForm/>
        </Modal>
      <Icon size={2} name="user" onClick={this.openModal} />
         <Modal
          title="Регистрация"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
          classHeightContainer="longContainer"
        >
        <RegistrationForm/>
        </Modal>
        </Fragment>
    );
  }
}

export default SandBox;