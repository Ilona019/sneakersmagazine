import React from 'react';
import './price.css';

class Price extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  
  
  //метод который при клике на enter (13) отправляет пост запрос цены на сервер
  clickOnEnterToSendFetch(){
    let inputFrom = document.querySelector(".input-from");
    inputFrom.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        // postServerDataPrice(inputFrom.value);
        this.props.make(inputFrom.value)
        // console.log(this.props.make);
      }
    })
  }
  
  render(){
    return (
      <div className = "input-price">
          <input type = "number" onClick = {this.clickOnEnterToSendFetch.bind(this)} className = "input-from" size = "10" maxLength = "15" placeholder = "Введите желаемую стоимость"></input>
      </div>
    );
  }
}

export default Price;