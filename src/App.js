import React from 'react';
import Main from './../src/components/main/main';
import CardProduct from './../src/components/card-product/card-product';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  let peremennaya;
  return (
    <div className="app-wrapper">
        <BrowserRouter>
        <Switch>   
        <Route path = "/cardlist" component = {CardProduct} />
        <Route path = "/" component = {Main} />
        </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
