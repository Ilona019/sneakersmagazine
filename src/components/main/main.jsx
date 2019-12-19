import React from 'react';
import Header from './../header/header';
import Menu from './../menu/menu';
import Content from './../content/content';
import Footer from './../footer/footer';
import './main.css';
import {BrowserRouter, Route} from 'react-router-dom';

function Main() {
  return (
    // <div className="app-wrapper">
    <div className = "container">
        <Header />
        <Menu />
        <Content />
        <Footer />
    </div>
  );
}

export default Main;