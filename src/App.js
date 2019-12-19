import React from 'react';
import Main from './../src/components/main/main';
// import Content from './../src/components/content/content';
// import CardItem from './../src/components/card-item/card-item';
// import Crossimage from './../src/components/crossimage/crossimage';
import CardProduct from './../src/components/card-product/card-product';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* <div className = "container"> */}
        <BrowserRouter>
        <Switch>   
        <Route path = "/cardlist" component = {CardProduct} />
        <Route path = "/" component = {Main} />
        </Switch>
        </BrowserRouter>
      
      </div>
    // </div>
    
  );
}

export default App;
