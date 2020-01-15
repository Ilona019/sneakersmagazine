import React from "react";
import Logo from "./../logo/logo";
import Search from "./../search/search";
import "./header.css";

import heart from './../../images/heart.svg';
import ImgHeart from './../imgHeart/imgHeart';
import shoppingCart from './../../images/shopping-cart.svg';
import ImgShoppingCart from './../imgShoppingCart/imgShoppingCart';
import ButtonCount from './../button-count/button-count';
import Logger from './../logger/logger';

class Header extends React.Component {
  render(){
    return (
      <div className = "header-class" >
        <Logo />
        <Search dataSearch = {this.props.dataSearch}/>
        <div className = "image-heart">
          <ImgHeart way = {heart}/>
          <ButtonCount />
        </div>
       <div className = "shop-cart">
        <ImgShoppingCart way = {shoppingCart} url  = "/cart"/>
        <ButtonCount />
       </div>
      <Logger/>
    </div>
  );
  }
}

export default Header;
