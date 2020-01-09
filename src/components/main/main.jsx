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
      data: []
    };
    this.getServerData();
  }

   getServerData(){
    const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog';
    fetch(url)
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => this.setState({data: response}))
      // .then(response => console.log(this.state.data))
  }

  postServerDataPrice(){
    
  }

  render(){
    // console.log(this.state.data)
    return (
      <div className = "container">
          <Header />
          <Menu />
          <div className="content-class">
            <Switch>
              <Route path='/cart' component={Cart}/>
              {/* написали вместо component = Content для того чтобы можно было передавать пропсы */}
              <Route path='/' render = {() => <Content data = {this.state.data}/>}  />
            </Switch>
          </div>
          <Footer />
      </div>
    );
  }
}

export default Main;