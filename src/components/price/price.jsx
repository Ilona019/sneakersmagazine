import React from 'react';
import './price.css';

function Price() {

    let inputFrom = document.getElementsByClassName('input-from').value;
    console.log(inputFrom);

  return (
    <div className = "input-price">
        <input type = "number" className = "input-from" size = "10" maxLength = "15" placeholder = "Введите желаемую стоимость"></input>
    </div>
  );
}

export default Price;