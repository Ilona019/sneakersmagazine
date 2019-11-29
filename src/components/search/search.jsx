import React from 'react';
import './search.css';

function Search() {

  function handleChange(e){
    // console.log(e.target.value)
    const wrapper = document.querySelector(".input-wrapper");
    const textInput = document.querySelector("input[type='text']");

    textInput.addEventListener("keyup", event => {
      wrapper.setAttribute("data-text", event.target.value);
    });
  }

  return (
    <div className = "input-wrapper" data-text = "">
      <input type = "text" onChange = {handleChange} placeholder = "Поиск..."></input>
    </div>
  );
}

export default Search;