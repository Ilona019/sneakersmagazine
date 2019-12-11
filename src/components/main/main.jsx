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
      
      <BrowserRouter>

        <Header />
        <Menu />
        <Content />
        <Footer />
        
      </BrowserRouter> 
    </div>
  );
}

export default Main;