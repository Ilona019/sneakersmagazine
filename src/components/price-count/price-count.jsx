import React from "react";

class PriceCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.currentCount
    };
  }

  changeScore(status) {
    if (status === "Minus" && this.state.counter === 1) return 1;
    this.setState(state => {
      return { counter: state.counter + (status === "Plus" ? 1 : -1) };
    });

    return this.state.counter + (status === "Plus" ? 1 : -1);
  }

  render() {
    return (
      <>
        <div className="cart-count">
          <div
            className="cart-count__minus"
            onClick={(e) =>{
             // console.log(e.target.value);
              this.props.updateCart(this.props.id, this.changeScore("Minus"))
            }
            }
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
            onClick={() =>
              this.props.updateCart(this.props.id, this.changeScore("Plus"))
            }
          >
            <span>+</span>
          </div>
        </div>
      </>
    );
  }
}

export default PriceCount;
