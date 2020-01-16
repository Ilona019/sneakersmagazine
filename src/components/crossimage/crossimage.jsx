import React from 'react';
import './crossimage.css';
//import {NavLink} from 'react-router-dom';

function Crossimage(props) {

  return (
    // <div className = "images">
      // <NavLink to = "/cardlist">
        <img src = {props.way} className = "crossPic" alt="product"></img>
      // </NavLink>
      
    // </div>
  );
}

export default Crossimage;