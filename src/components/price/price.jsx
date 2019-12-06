import React from 'react';
import './price.css';

function Price(props) {
  return (
    <div className = "input-price">
        <input type = "text" className = "input-from" size = "5" maxLength = "10" placeholder = "от"></input>
        <input type = "text" className = "input-to" size = "5" maxLength = "10" placeholder = "до"></input>
    </div>
  );
}

export default Price;