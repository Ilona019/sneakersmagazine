import React from "react";
import LabelProfile from "../labelProfile/labelProfile";
import Icon from "../icon/icon";
import PopUpWindows from "../modal/popUpWindows";
import LoginForm from "../forms/loginForm";
import RegistrationForm from "../forms/registrationForm";
import Tooltip from "../tooltip/tooltip";

class Logger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName")
    };
    this.isEmpty = this.isEmpty.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  isEmpty(str) {
    return typeof str === "undefined" || str === null || str === "";
  }

  signOut() {
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    this.setState({ firstName: null });
    this.setState({ lastName: null });
  }

  render() {
    let blockIcons;
    blockIcons = (
      <>
        <Tooltip position="right" content="Войти">
          <PopUpWindows
            content={<LoginForm />}
            title="Войти"
            classHeightContainer="shortContainer"
            nameIcon="fas fa-sign-in-alt"
          />
        </Tooltip>
        <Tooltip position="bottom" content="Зарегистрироваться">
          <PopUpWindows
            content={<RegistrationForm />}
            title="Регистрация"
            classHeightContainer="longContainer"
            nameIcon="fas fa-user-plus"
          />
        </Tooltip>
      </>
    );
    let contentUser;
    if (!this.isEmpty(this.state.firstName)) {
      contentUser = (
        <LabelProfile label={this.state.firstName + " " + this.state.lastName}>
          <Tooltip position="bottom" content="Выйти">
            <Icon
              size={2}
              className="fas fa-sign-out-alt"
              onClick={this.signOut}
            />
          </Tooltip>
        </LabelProfile>
      );
    } else {
      contentUser = <LabelProfile label="Профиль">{blockIcons}</LabelProfile>;
    }
    return <div>{contentUser}</div>;
  }
}

export default Logger;
