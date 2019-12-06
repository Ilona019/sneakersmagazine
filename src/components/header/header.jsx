import React from 'react';
import LabelProfile from "./../labelProfile/labelProfile";
import Logo from './../logo/logo';
import Search from './../search/search';
import './header.css';
import heart from './../../images/heart.svg';
import ImgHeart from './../imgHeart/imgHeart';
import shoppingCart from './../../images/shopping-cart.svg';
import ImgShoppingCart from './../imgShoppingCart/imgShoppingCart';

function Header() {
  return (
      <div className = "header-class">
        <Logo />
        <Search />
        <div className = "image-heart">
          <ImgHeart way = {heart}/>
        </div>
       <div className = "shop-cart">
        <ImgShoppingCart way = {shoppingCart}/>
       </div>
        <LabelProfile />
      </div>
  );
}

export default Header;
