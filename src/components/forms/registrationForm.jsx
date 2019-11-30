import React from "react";
import Button from "../button/button";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      mobilePhone: "",
      birthday: "",
      email: "",
      password: "",
      passwordAgain: "",
      errors: { email: "", password: "" }
    };

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.onChangeMobilePhone = this.onChangeMobilePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordAgain = this.onChangePasswordAgain.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onChangeFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  onChangeLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  onChangeBirthday(event) {
    this.setState({ birthday: event.target.value });
  }

  onChangeMobilePhone(event) {
    this.setState({ mobilePhone: event.target.value });
  }

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  onChangePasswordAgain(event) {
    this.setState({ passwordAgain: event.target.value });
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div>
          <input
            required
            type="text"
            name="firstName"
            placeholder="Имя"
            value={this.state.firstName}
            onChange={this.onChangeFirstName}
            errors={this.state.errors}
          />
        </div>
        <div>
          <input
            required
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={this.state.lastName}
            onChange={this.onChangeLastName}
            errors={this.state.errors}
          />
        </div>
        <div>
          <input
            type="date"
            name="birthday"
            value={this.state.birthday}
            onChange={this.onChangeBirthday}
            errors={this.state.errors}
          />
        </div>
        <div>
          <input
            required
            type="tel"
            name="mobilePhone"
            placeholder="Телефон"
            value={this.state.mobilePhone}
            onChange={this.onChangeMobilePhone}
            errors={this.state.errors}
          />
        </div>
        <div>
          <input
            placeholder="Почта"
            name="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            errors={this.state.errors}
          />
        </div>
        <div>
          <input
            className="formaInput"
            type="password"
            name="password"
            placeholder="Пароль"
            value={this.state.password}
            onChange={this.onChangePassword}
            errors={this.state.errors}
          />
        </div>
        <div>
          {" "}
          <input
            className="formaInput"
            type="password"
            name="password"
            placeholder="Подтвердение пароля"
            value={this.state.passwordAgain}
            onChange={this.onChangePasswordAgain}
            errors={this.state.errors}
          />
        </div>
        <br></br>
        <Button type="submit" onClick={this.onSubmit}>
          Зарегистрироваться
        </Button>
      </form>
    );
  }
}

export default RegistrationForm;
