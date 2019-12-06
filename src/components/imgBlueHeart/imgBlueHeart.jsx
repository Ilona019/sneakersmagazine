import React from 'react';
import './imgBlueHeart.css';

function ImgBlueHeart(props) {

  return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src = {props.way} className = "imgheart"></img>
  );
}

export default ImgBlueHeart;