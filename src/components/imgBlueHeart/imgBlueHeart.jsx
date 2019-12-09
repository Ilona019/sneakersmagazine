import React from 'react';
import './imgBlueHeart.css';

function ImgBlueHeart(props) {

  // let imgHeart = document.querySelector(".imgheart");
  // let clicks = 0;

  // function checkIconBlueHeart(){
  //   if(imgheart){
  //     imgHeart.addEventListener("click", changeColorAndClick);
  //   }
  // }

  // function changeColorAndClick(){
  //   if(imgHeart.style.fill === "dodgerblue"){
  //     imgHeart.style.fill = "white";
  //   }
  //   else {
  //     imgHeart.style.fill = "dodgerblue";
  //   }
  // }
  


  return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src = {props.way} className = "imgheart"></img>
  );
}

export default ImgBlueHeart;