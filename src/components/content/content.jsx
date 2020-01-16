import React from "react";
import "./content.css";
import CardItem from "./../card-item/card-item";
import { userIsRegistered, cartGuestIsEmpty } from "../forms/checkLocalStorage";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  addCart(id) {
    var data = { _id: id };
    fetch("https://sneakers-shop-back.herokuapp.com/cart/add/", {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!userIsRegistered()) {
      if (cartGuestIsEmpty()) {
        var cartGuest = [];
        cartGuest.push(id);
        localStorage.setItem("cartGuest", JSON.stringify(cartGuest));
      } else if (!cartGuestIsEmpty()) {
        let cartGuest = JSON.parse(localStorage.getItem("cartGuest"));
        cartGuest.push(id);
        localStorage.setItem("cartGuest", JSON.stringify(cartGuest));
      }
    }
  };

  // помогло динамической отрисовке контента
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      data: nextProps.data
    };
  }

  render() {
    return (
      <div className="content-class">
        {this.state.data.map(item => {
          return (
              <CardItem
                key = {item._id}
                image={item.img}
                cost={item.cost}
                name={item.name}
                description={item.description}
                addCart={this.addCart}
                id={item._id}
              />
          );
        })}
      </div>
    );
  }
}

export default Content;
