import React from "react";
import "./content.css";
import { Link } from "react-router-dom";

import CardItem from "./../card-item/card-item";
import { element } from "prop-types";
import { userIsRegistered, cartGuestIsEmpty } from "../forms/checkLocalStorage";

class Content extends React.Component {
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
        {this.props.dataPrice.map(item => {
          return (
            <Link
              to="/item"
              style={{ textDecoration: "none", color: "#222" }}
            >
              <CardItem
                image={item.img}
                cost={item.cost}
                name={item.name}
                description={item.text}
              />
            </Link>
          );
        })}

        {this.props.data.map(item => {
          return (
            <Link
              to="/item"
              style={{ textDecoration: "none", color: "#222" }}
            >
              <CardItem
                image={item.img}
                cost={item.cost}
                name={item.name}
                description={item.text}
              />
            </Link>
          );
        })}

        {this.props.dataMenu.map(item => {
          return (
            <Link
              to="/item"
              style={{ textDecoration: "none", color: "#222" }}
            >
              <CardItem
                image={item.img}
                cost={item.cost}
                name={item.name}
                description={item.text}
              />
            </Link>
          );
        })}

        {this.props.dataSearch.map(item => {
          return (
            <Link
              to="/item"
              style={{ textDecoration: "none", color: "#222" }}
            >
              <CardItem
                image={item.img}
                cost={item.cost}
                name={item.name}
                description={item.text}
              />
            </Link>  
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
