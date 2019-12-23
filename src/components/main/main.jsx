import React from 'react';
import Header from './../header/header';
import Menu from './../menu/menu';
import Content from './../content/content';
import Footer from './../footer/footer';
import './main.css';
import {Route, Switch} from 'react-router-dom';
import Cart from './../../pages/cart/cart';

function Main() {
  return (
    // <div className="app-wrapper">
    <div className = "container">
        <Header />
        <Menu />
        <div className="content-class">
          <Switch>
            <Route path='/cart' component={Cart}/>
            <Route path='/' component={Content}/>
          </Switch>
        </div>
        <Footer />
    </div>
  );
}

export default Main;