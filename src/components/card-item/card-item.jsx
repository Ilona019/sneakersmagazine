import React from 'react';
import './card-item.css';
import Crossimage from "../crossimage/crossimage"; 

function CardItem(props) {
  return (
    <div className = "card-item-class">
        <Crossimage way = {props.image}/>
    </div>
  );
}

export default CardItem;