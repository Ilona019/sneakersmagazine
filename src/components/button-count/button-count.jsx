import React from "react";
import "./button-count.css";

// import ImgBlueHeart from './../imgBlueHeart/imgBlueHeart';

class ButtonCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <span className="button-count-class">
        {this.state.count}
      </span>
    );
  }
}

export default ButtonCount;
