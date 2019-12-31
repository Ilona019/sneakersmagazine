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

    this.setState({
      counter: this.state.counter + (status === "Plus" ? 1 : -1)
    });
  }

  render() {
    return (
      <>
        <div className="cart-count">
          <div className="cart-count__minus" onClick={() => this.changeScore("Minus")}>
            <span>-</span>
          </div>
          <div className="cart-count__current">
            <input
              className="count-products-input"
              type="text"
              value={this.state.counter}
            />
          </div>
          <div className="cart-count__plus" onClick={() => this.changeScore("Plus")}>
            <span>+</span>
          </div>
        </div>
      </>
    );
  }
}

export default PriceCount;
