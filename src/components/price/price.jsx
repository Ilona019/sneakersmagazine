import React from 'react';
import './price.css';

function Price(props) {
  //метод который при клике на enter (13) отправляет пост запрос цены на сервер
  function clickOnEnterToSendFetch(){
    let inputFrom = document.querySelector(".input-from");
    inputFrom.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        props.sendPostFetchWithPrice(inputFrom.value);
      }
    })
  }

  
  return (
    <div className = "input-price">
        <input type = "number" onClick = {clickOnEnterToSendFetch} className = "input-from" size = "10" maxLength = "15" placeholder = "Введите желаемую стоимость"></input>
    </div>
  );
}

export default Price;