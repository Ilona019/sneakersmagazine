import React from 'react';
import './btn-size.css';


function BtnSize(props) {

  return (
      <div className = "size-class">{props.size}</div>
  );
}

export default BtnSize;