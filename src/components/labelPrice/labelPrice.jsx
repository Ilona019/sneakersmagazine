import React from 'react';
import './labelPrice.css';

function LabelPrice(props) {
  return (
    <div className = "labelPrice-class">{props.c} руб.</div>
  );
}

export default LabelPrice;