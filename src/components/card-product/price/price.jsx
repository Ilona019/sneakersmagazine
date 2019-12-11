import React from 'react';
import './price.css';


function Price(props) {

  return (
      <div className = "price-class">{props.price}</div>
  );
}

export default Price;