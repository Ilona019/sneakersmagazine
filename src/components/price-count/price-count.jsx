import React from "react";

class PriceCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.currentCount
    };
  }

  changeScore(status) {
    if (status === "Minus" && this.state.counter === 1) return null;

    this.setState((state)=> {
      return {counter: state.counter + (status === "Plus" ? 1 : -1)}
    });
  }

  componentDidUpdate(prevProps) {
    this.updateDataCart();
    //id товара, у которого меняется количество.
    //console.log(this.props.id);
    //замедлить fetch
  }

  updateDataCart = () => {
    //console.log(this.state.counter);
    //fetch count change products
  };

  render() {
    return (
      <>
        <div className="cart-count">
          <div
            className="cart-count__minus"
            onClick={() => this.changeScore("Minus")}
          >
            <span>-</span>
          </div>
          <div className="cart-count__current">
            <input
              className="count-products-input"
              type="text"
              value={this.state.counter}
              readOnly
            />
          </div>
          <div
            className="cart-count__plus"
            onClick={() => this.changeScore("Plus")}
          >
            <span>+</span>
          </div>
        </div>
      </>
    );
  }
}

export default PriceCount;
