import React from "react";
import Header from "./../header/header";
import Menu from "./../menu/menu";
import Content from "./../content/content";
import Footer from "./../footer/footer";
import "./main.css";
import { Route, Switch } from "react-router-dom";
import Cart from "./../../pages/cart/cart";

class Main extends React.Component {

  render() {
    return (
      <div className="container">
        <Header dataSearch = {this.props.search}/>
        <Menu
          dataMenu={this.props.menu}
          try={this.props.price}
        />
        <div className="content-class">
          <Switch>
            <Route path="/cart" component={Cart} />
            {/* написали вместо component = Content для того чтобы можно было передавать пропсы */}
            <Route
              path="/"
              render={() => (
                <Content
                  dataMenu={this.props.dataMenu}
                  dataPrice={this.props.dataPrice}
                  data = {this.props.data}
                  dataSearch = {this.props.dataSearch}
                />
              )}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
