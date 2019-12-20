import React from "react";
import "./labelProfile.css";

class LabelProfile extends React.Component {
  render(props) {
    return (
      <div className="labelProfile-class">
        {this.props.label}
        <div className="icons-block">
          <div className="iconsAuth-container">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default LabelProfile;
