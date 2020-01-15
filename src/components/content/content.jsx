import React from "react";
import "./content.css";

import CardItem from "./../card-item/card-item";
import { element } from "prop-types";
import { userIsRegistered, cartGuestIsEmpty } from "../forms/checkLocalStorage";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  // помогло динамической отрисовке контента
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      data: nextProps.data
    };
  }
  // const addCart = id => {
  //   var data = { _id: id };
  //   fetch("https://sneakers-shop-back.herokuapp.com/cart/add/", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });

  render() {
    return (
      <div className="content-class">
        {this.state.data.map(item => {
          return (
              <CardItem
                image={item.img}
                cost={item.cost}
                name={item.name}
                description={item.text}
              />
          );
        })}
      </div>
    );
  }
}

// if (!userIsRegistered()) {
//   if (cartGuestIsEmpty()) {
//     var cartGuest = [];
//     cartGuest.push(id);
//     localStorage.setItem("cartGuest", JSON.stringify(cartGuest));
//   } else if (!cartGuestIsEmpty()) {
//     let cartGuest = JSON.parse(localStorage.getItem("cartGuest"));
//     cartGuest.push(id);
//     localStorage.setItem("cartGuest", JSON.stringify(cartGuest));
//   }
// }
// };

export default Content;
