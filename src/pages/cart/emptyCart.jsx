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
      <div className="basket-empty">
        <h2 className="label-empty-basket">В вашей корзине пока ничего нет</h2>
        <Button className="btn-back-in-catalog" href="/">
          Начать покупки
        </Button>
      </div>
    );
  }
}

export default EmptyCart;
