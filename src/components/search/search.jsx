import React from 'react';
import './search.css';

function Search() {
  // const wrapper = document.querySelector(".input-wrapper");
  // const textInput = document.querySelector("input[type='text']");

  function handleChange(e){
    const wrapper = document.querySelector(".input-wrapper");
    const textInput = document.querySelector("input[type='text']");

    textInput.addEventListener("keyup", event => {
      wrapper.setAttribute("data-text", event.target.value);
    });
  }
  
  //делаем обработку на нажатие на enter для отправки данных из строки поиска
  function clickOnEnterToSendFetch(){
    const textInput = document.querySelector("input[type='text']");
    textInput.addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        console.log(textInput.value);
        sendPostFetchWithSearch(textInput.value);
      }
    })
  }

  //отправляем пост запрос на поиск в БД
  function sendPostFetchWithSearch(v){
    const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog/search/?query=' + v;
    fetch(url, {
      method: 'POST'
    });
    console.log(url);
  }

  return (
    <div className = "input-wrapper" data-text = "">
      <input type = "text" onClick = {clickOnEnterToSendFetch} onChange = {handleChange} placeholder = "Поиск..."></input>
    </div>
  );
}

export default Search;