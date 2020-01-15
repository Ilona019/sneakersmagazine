import React from "react";
import Label from "../label/label";
import Icon from "../icon/icon";
import PopUpWindows from "../modal/popUpWindows";
import LoginForm from "../forms/loginForm";
import RegistrationForm from "../forms/registrationForm";
import Tooltip from "../tooltip/tooltip";
import {userIsRegistered} from "../forms/checkLocalStorage";

class Logger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName")
    };
    this.signOut = this.signOut.bind(this);
  }

  async signOut() {
    localStorage.clear();
    this.setState({ firstName: null });
    this.setState({ lastName: null });
    var url = "https://sneakers-shop-back.herokuapp.com/auth/logout/";
    await fetch(url, { credentials: "include" });
    window.location.reload();
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
            sizeIcon={2}
          />
        </Tooltip>
        <Tooltip position="bottom" content="Зарегистрироваться">
          <PopUpWindows
            content={<RegistrationForm />}
            title="Регистрация"
            classHeightContainer="longContainer"
            nameIcon="fas fa-user-plus"
            sizeIcon={2}
          />
        </Tooltip>
      </>
    );
    let contentUser;
    if (userIsRegistered()) {
      contentUser = (
        <Label
          nameOfLabel={this.state.firstName + " " + this.state.lastName}
          className="labelProfile-class"
          content="profile"
        >
          <Tooltip position="bottom" content="Выйти">
            <Icon
              size={2}
              className="fas fa-sign-out-alt"
              onClick={this.signOut}
            />
          </Tooltip>
        </Label>
      );
    } else {
      contentUser = (
        <Label
          nameOfLabel="Профиль"
          className="labelProfile-class"
          content="profile"
        >
          {blockIcons}
        </Label>
      );
    }
    return <div>{contentUser}</div>;
  }
}

export default Logger;