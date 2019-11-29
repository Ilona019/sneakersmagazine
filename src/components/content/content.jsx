import React from 'react';
import './content.css';
import pic from "../../images/cross/adidas-yeezy-boost-350-v2-trfrm_01-1200x800-1200x800_0.jpg"

function Content() {
  return (
    <div className="content-class">

      <div className = "card-item-class">
        <img className = "crossPic" src = {pic}></img>
        <img></img>
      </div>

      <div>
        {/* div label 1, 2, 3 */}
      </div>
    </div>
  );
}

export default Content;