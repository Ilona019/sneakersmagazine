import React from "react";
import { bindAll } from "lodash";
import Button from "../button/button";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: { errorEmail: "", errorPassword: "" }
    };

    bindAll(
      this,
      ["onChangeEmail", "onChangePassword", "onSubmit", "_isFormValid"],
      "_isEmailValid",
      "_isPasswordValid"
    );
  }

  onSubmit(event) {
    alert(`${this.state.email}, добро пожаловать!`);
    event.preventDefault();
    if (!this._isFormValid()) return;
  }

  _isFormValid() {
    return (
      this._isEmailValid(this.state.email) &&
      this._isPasswordValid(this.state.password)
    );
  }

  _isEmailValid(email) {
    let errorEmail = "";
    if (email === "") {
      errorEmail = "Поле не может быть пустым!";
      this.setState({ errorEmail });
      return false;
    }

    this.setState({ errorEmail });
    return true;
  }

  _isPasswordValid(password) {
    let errorPassword = "";

    if (password === "") {
      errorPassword = "Поле не может быть пустым!";
      return false;
    }

    if (password.length < 3) {
      errorPassword = "Длина пароля не может быть меньше 3-х символов.";
      return false;
    }

    this.setState({ errorPassword });
    return true;
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div>
          <input
            placeholder="Почта"
            type="email"
            name="email"
            error={this.state.errorEmail}
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
        </div>
        <div>
          <input
            className="formaInput"
            type="password"
            name="password"
            placeholder="Пароль"
            onChange={this.onChangePassword}
            value={this.state.password}
            error={this.state.errorPassword}
          />
        </div>
        <br></br>
        <Button type="submit" onClick={this.onSubmit}>
          Войти
        </Button>
      </form>
    );
  }
}

export default LoginForm;
