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
        <div className="basket-count">
          <div className="basket-count__minus">
            <span onClick={() => this.changeScore("Minus")}>-</span>
          </div>
          <div className="basket-count__current">
            <input
              className="count-products-input"
              type="text"
              value={this.state.counter}
            />
          </div>
          <div className="basket-count__plus">
            <span onClick={() => this.changeScore("Plus")}>+</span>
          </div>
        </div>
      </>
    );
  }
}

export default PriceCount;
