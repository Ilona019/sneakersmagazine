import React from 'react';
import LabelProfile from "./../labelProfile/labelProfile";
import Logo from './../logo/logo';
import Search from './../search/search';
import './header.css';

function Header() {
  return (
      <div className = "header-class">
        <Logo />
        <Search />
        <LabelProfile />
      </div>
  );
}

export default Header;
