import React from 'react';
import './button-count.css';

function ButtonCount(props) {
  return (
      <span className = "button-count-class">
          {props.count}
      </span>
  );
}

export default ButtonCount;