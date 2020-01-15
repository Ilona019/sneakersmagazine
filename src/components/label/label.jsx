import React from "react";
import "./label.css";

class Label extends React.Component {
  render(props) {
    let contentIconsProfile = (
      <div className="icons-block">
        <div className="iconsAuth-container">{this.props.children}</div>
      </div>
    );
    let blockIcons = this.props.content === "profile" ? contentIconsProfile : null;

    return (
      <div className={this.props.className}>
        {this.props.nameOfLabel}
        {blockIcons}
      </div>
    );
  }
}

export default Label;
