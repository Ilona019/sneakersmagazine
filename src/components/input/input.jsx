import React from "react";
import classNames from "classnames";
import "./input.css";

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = props => {
  const inputType = props.type || "text";
  var cls = classNames("Input", "input", "label", "span");
  const htmlFor = `${inputType} - ${Math.random()}`;

  if (isInvalid(props)) {
    cls = cls + " invalid";
  }

  return (
    <div className={cls}>
      <div className="labelInputContainer">
        <label htmlFor={htmlFor}>{props.label}</label>
        <input
          type={inputType}
          id={htmlFor}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      {isInvalid(props) ? (
        <span>{props.errorMessage || "Введите верное значение"}</span>
      ) : null}
    </div>
  );
};

export default Input;
