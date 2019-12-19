import React from 'react';
import LabelProfile from "./../labelProfile/labelProfile";
import Logo from './../logo/logo';
import Search from './../search/search';
import './header.css';

import heart from './../../images/heart.svg';
import ImgHeart from './../imgHeart/imgHeart';
import shoppingCart from './../../images/shopping-cart.svg';
import ImgShoppingCart from './../imgShoppingCart/imgShoppingCart';
import ButtonCount from './../button-count/button-count';

// import PopUpWindows from '../modal/popUpWindows';
// import LoginForm from '../forms/loginForm';
// import RegistrationForm from '../forms/registrationForm';

function Header() {
  return (
      <div className = "header-class" >
        <Logo />
        <Search />
        <div className = "image-heart">
          <ImgHeart way = {heart}/>
          <ButtonCount count = "0" />
        </div>
       <div className = "shop-cart">
        <ImgShoppingCart way = {shoppingCart}/>
        <ButtonCount count = "0" />
       </div>
        {/* <PopUpWindows content={<LoginForm/>}  title="Войти" classHeightContainer="shortContainer" nameIcon="fas fa-sign-in-alt"/>
        <PopUpWindows content={<RegistrationForm />} title="Регистрация" classHeightContainer="longContainer" nameIcon="fas fa-user-plus"/> */}
        <LabelProfile />
      </div>
  );
}

export default Header;
