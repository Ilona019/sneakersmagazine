import React from 'react';
import './price.css';

class Price extends React.Component {
  //метод который при клике на enter (13) отправляет пост запрос цены на сервер
  clickOnEnterToSendFetch(){
    let inputFrom = document.querySelector(".input-from");
    inputFrom.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        this.sendPostFetchWithPrice(inputFrom.value);
      }
    })
  }

  sendPostFetchWithPrice(v){
    const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog/?cost=' + v;
    fetch(url, {
      method: "POST"
    })
  }
  
  render(){
    return (
      <div className = "input-price">
          <input type = "number" onClick = {this.clickOnEnterToSendFetch} className = "input-from" size = "10" maxLength = "15" placeholder = "Введите желаемую стоимость"></input>
      </div>
    );
  }
}

export default Price;