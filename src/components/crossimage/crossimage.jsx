import React from 'react';
import './crossimage.css';

function Crossimage(props) {

  return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src = {props.way} className = "crossPic"></img>
  );
}

export default Crossimage;