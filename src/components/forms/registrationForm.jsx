import React from "react";
import Button from "../button/button";
import Input from "../input/input";
import {ValidateControlLogin} from "./validateControlLogin";
import is from "is_js";

class RegistrationForm extends React.Component {
  state = {
    isFormValid: false,
    formControls: {
      firstName: {
        value: "",
        type: "text",
        label: "Имя/First name",
        errorMessage: "Имя может содержать только буквы.",
        valid: false,
        touched: false,
        validation: {
          required: true,
          isName: true
        }
      },
      lastName: {
        value: "",
        type: "text",
        label: "Фамилия/Last name",
        errorMessage: "Фамилия может содержать только буквы.",
        valid: false,
        touched: false,
        validation: {
          required: true,
          isName: true
        }
      },
      birthday: {
        value: "",
        type: "date",
        label: "Дата рождения/Date of birth",
        errorMessage: "Введённая дата некорректна.",
        valid: false,
        touched: false,
        validation: {
          required: true,
          isDate: true
        }
      },
      telephone: {
        value: "",
        type: "tel",
        label: "Телефон/Mobile phone +7",
        errorMessage: "Неправильный формат номера.",
        valid: false,
        touched: false,
        validation: {
          required: true,
          isTel: true
        }
      },
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
        label: "Пароль/Password",
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
    console.log("hi")
  };

  validateControl(value, validation) {

    let isValid = ValidateControlLogin(value, validation);

    if (validation.isName) {
      isValid = (value.match(/^[А-Яа-я]+$/) || value.match(/^[A-Za-z]+$/)) && isValid;
    }

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (validation.isDate) {
      var year = value.substr(0, 4);
      var mon = value.substr(5, 2);
      var day = value.substr(-2);
      var newDate = [mon, day, year];
      isValid = is.dateString(newDate.join("/"));
    }

    if (validation.isTel) {
      isValid = is.nanpPhone(value) && isValid;
    }

    return isValid;
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = {
      ...formControls[controlName]
    };

    control.value = event.target.value
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

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
      <form onSubmit={this.submitHandler} action="#" method="post">
        {this.renderInputs()}
        <br></br>
        <Button
          className = "align-center-btn"
          type="submit"
          onClick={this.registrationHandler}
          disabled={!this.state.isFormValid}
        >
          Зарегистрироваться
        </Button>
      </form>
    );
  }
}

export default RegistrationForm;
