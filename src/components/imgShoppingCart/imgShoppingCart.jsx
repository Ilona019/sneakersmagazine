import React from 'react';
import './imgShoppingCart.css';

function ImgShoppingCart(props) {

  return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <a href={props.url}><img src = {props.way} className = "img-shopping-cart"></img></a>
  );
}

export default ImgShoppingCart;