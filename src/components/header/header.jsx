import React from 'react';
import LabelProfile from "./../labelProfile/labelProfile";
import Logo from './../logo/logo';
import Search from './../search/search';
/*import LoginButton from './../loginButton/loginButton';*/
import Sandbox  from './../modal/sandbox';
import './header.css';

function Header() {
  return (
      <div className = "header-class" size={20}>
        <Logo />
        <Search />
        <Sandbox />
        <LabelProfile />
      </div>
  );
}

export default Header;
