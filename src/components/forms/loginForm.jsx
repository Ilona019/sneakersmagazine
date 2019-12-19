import React from "react";
import Button from "../button/button";
import Input from "../input/input";
import {ValidateControlLogin} from "./validateControlLogin";

class LoginForm extends React.Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Введите корректный email.",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: "",
        type: "password",
        label: "Пароль",
        errorMessage: "Введите корректный пароль. Длина больше 6 символов.",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  };

  submitHandler = event => {
    event.preventDefault();
  };

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = {
      ...formControls[controlName]
    };

    control.value = event.target.value;
    control.touched = true;
    control.valid = ValidateControlLogin(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({
      formControls,
      isFormValid
    });
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      );
    });
  }

  render() {
    return (
      <form action="#" method="post">
        {this.renderInputs()}
        <br></br>
        <Button
          className = "align-center-btn"
          type="submit"
          onClick={this.loginHandler}
          disabled={!this.state.isFormValid}     
        >
          Войти
        </Button>
      </form>
    );
  }
}

export default LoginForm;
