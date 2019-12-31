import React from "react";
import Button from "./../../components/button/button";

class EmptyCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.currentCount
    };
  }

  render() {
    return (
      <div className="cart-empty">
        <h2 className="label-empty-cart">Ваша корзина пуста</h2>
        <Button className="btn-back-in-catalog" href="/">
          Начать покупки
        </Button>
      </div>
    );
  }
}

export default EmptyCart;
