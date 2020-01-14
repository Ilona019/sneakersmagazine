import React from 'react';
import Header from './../header/header';
import Menu from './../menu/menu';
import Content from './../content/content';
import Footer from './../footer/footer';
import './main.css';
import {Route, Switch} from 'react-router-dom';
import Cart from './../../pages/cart/cart';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      dataPrice: [],
      dataMenu: []
    };
    this.getServerData();
    this.postServerDataPrice = this.postServerDataPrice.bind(this); //приязка к контексту...
    this.postServerMenuItems = this.postServerMenuItems.bind(this);
  }

   getServerData(){
    const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog';
    fetch(url
    //   , {
    //   credentials: 'same-origin'
    // }
    )
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => this.setState({data: response}))
      // .then(response => console.log(this.state.data))
  }

  postServerDataPrice(paramChosenPrice){
      const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog/?cost=' + paramChosenPrice;
      fetch(url, {
        method: "POST"
      })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => this.setState({dataPrice: response}))
      // .then(response => console.log(this.state.dataPrice))
      // console.log(url);
  }

  postServerMenuItems(v){
    const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog/?' + v;
    fetch(url, {
        method: 'POST'
    })
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => this.setState({dataMenu: response}))
    // .then(response => console.log(this.state.dataMenu))
    // console.log(url);
}

  render(){
    return (
      <div className = "container">
          <Header />
          <Menu dataMenu = {this.postServerMenuItems} try = {this.postServerDataPrice}/>
          <div className="content-class">
            <Switch>
              <Route path='/cart' component={Cart}/>
              {/* написали вместо component = Content для того чтобы можно было передавать пропсы */}
              <Route path='/' render = {() => <Content dataMenu = {this.state.dataMenu} dataPrice = {this.state.dataPrice} data = {this.state.data}/>}  />
            </Switch>
          </div>
          <Footer />
      </div>
    );
  }
}

export default Main;