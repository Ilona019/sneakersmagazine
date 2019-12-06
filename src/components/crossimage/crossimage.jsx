import React from 'react';
import './crossimage.css';

function Crossimage(props) {

  return (
    <div className = "images">
      <img src = {props.way} className = "crossPic"></img>
    </div>
  );
}

export default Crossimage;