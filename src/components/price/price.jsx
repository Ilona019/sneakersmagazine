import React from 'react';
import './price.css';

function Price() {
  // const inputFrom = document.getElementsByClassName('input-from');
  // const inputTo = document.getElementsByClassName('input-to');

  return (
    <div className = "input-price">
        <input type = "number" className = "input-from" size = "5" maxLength = "10" placeholder = "от"></input>
        <input type = "number" className = "input-to" size = "5" maxLength = "10" placeholder = "до"></input>
    </div>
  );
}

export default Price;