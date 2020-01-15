import React from 'react';
import './search.css';

class Search extends React.Component {

  handleChange(e){
    const wrapper = document.querySelector(".input-wrapper");
    const textInput = document.querySelector("input[type='text']");
    textInput.addEventListener("keyup", event => {
      wrapper.setAttribute("data-text", event.target.value);
    });
  }
  
  //делаем обработку на нажатие на enter для отправки данных из строки поиска
  clickOnEnterToSendFetch(){
    let textInput = document.querySelector(".input-on");
    textInput.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        this.props.dataSearch(textInput.value);
      }
    })
  }

  render(){
    return (
      <div className = "input-wrapper" data-text = "">
        <input className = "input-on" type = "text" onClick = {this.clickOnEnterToSendFetch.bind(this)} onChange = {this.handleChange} placeholder = "Поиск..."></input>
      </div>
    );
  }
}

export default Search;