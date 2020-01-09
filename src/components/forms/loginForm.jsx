import React from "react";
import Button from "../button/button";
import Input from "../input/input";
import { ValidateControlLogin } from "./validateControlLogin";
import { addProductsGuestCart } from "./checkLocalStorage";

class LoginForm extends React.Component {
  constructor(props) {
    super(props); 
    this.loginHandler = this.loginHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

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

  async loginHandler() {
    var url = "https://sneakers-shop-back.herokuapp.com/auth/login/";
    var data = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const jsonData = await response.json();
      var someProperty = { ...this.state.formControls };
      switch (jsonData.error) {
        case 0:
          localStorage.setItem("firstName", jsonData.credentials.firstName);
          localStorage.setItem("lastName", jsonData.credentials.lastName);
          this.setState({ isFormValid: true });
          addProductsGuestCart();
          window.location.reload();
          break;
        case 1:
          someProperty.email.errorMessage = decodeURIComponent(
            jsonData.messages
          );
          someProperty.email.valid = false;
          this.setState({ formControls: someProperty });
          this.setState({ isFormValid: false });
          break;
        case 2:
          someProperty.password.errorMessage = decodeURIComponent(
            jsonData.messages
          );
          someProperty.password.valid = false;
          this.setState({ formControls: someProperty });
          this.setState({ isFormValid: false });
          break;
        default:
          this.setState({ isFormValid: false });
          alert("Неизвестный код ошибки. Пожалуйста, посетите страницу позже.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

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
      <form onSubmit={this.submitHandler}>
        {this.renderInputs()}
        <br></br>
        <Button
          className="align-center-btn"
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
