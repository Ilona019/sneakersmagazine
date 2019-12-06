import React from 'react';
import './imgHeart.css';

function ImgHeart(props) {

  return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src = {props.way} className = "img-heart"></img>
  );
}

export default ImgHeart;