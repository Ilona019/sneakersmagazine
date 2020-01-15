import React, { useState } from "react";
import "./imgBlueHeart.css";

// import ButtonCount from './../button-count/button-count';

class ImgBlueHeart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false
    };
  }
  
  changeLike = () =>{
	  this.setState({isLike: !this.state.isLike});
  }

  render() {
    return (
      <svg
        className={this.state.isLike ? "img-blue-heart" : "img-white-heart"}
        onClick={this.changeLike}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1280 1024"
        enableBackground="new 0 0 1280 1024"
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M533.333,186.54c0,44.98-19.385,85.432-50.256,113.46h0.256L316.667,466.667C300,483.333,283.333,500,266.667,500
					  c-16.667,0-33.333-16.667-50-33.333L50,300h0.255C19.384,271.972,0,231.52,0,186.54C0,101.926,68.593,33.333,153.206,33.333
					  c44.98,0,85.432,19.384,113.46,50.255c28.028-30.871,68.48-50.255,113.46-50.255C464.74,33.333,533.333,101.926,533.333,186.54z"
          />
        </g>
      </svg>
    );
  }
}

export default ImgBlueHeart;