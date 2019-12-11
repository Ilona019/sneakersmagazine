import React from 'react';
import './btn-plus-minus.css';


function BtnPlusMinus(props) {

  return (
      <div className = "btn-plus-minus-class">{props.sign}</div>
  );
}

export default BtnPlusMinus;