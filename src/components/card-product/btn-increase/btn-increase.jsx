import React from 'react';
import './btn-increase.css';


function BtnIncrease(props) {

  return (
      <div className = "btn-increase-class">{props.count}</div>
  );
}

export default BtnIncrease;