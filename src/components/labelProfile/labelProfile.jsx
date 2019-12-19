import React from "react";
import "./labelProfile.css";
import PopUpWindows from "../modal/popUpWindows";
import LoginForm from "../forms/loginForm";
import RegistrationForm from "../forms/registrationForm";
import Tooltip from "../tooltip/tooltip";

class LabelProfile extends React.Component {
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

    return (
      <div className="labelProfile-class">
        Профиль
        <div className="icons-block">
          <div className="iconsAuth-container">{blockIcons}</div>
        </div>
      </div>
    );
  }
}

export default LabelProfile;
