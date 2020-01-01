import React, {useEffect} from 'react';
import './card-item.css';
import Crossimage from "../crossimage/crossimage"; 
import LabelPrice from "../labelPrice/labelPrice";
import LabelName from "../labelName/labelName";
import LabelDescription from "../labelDescription/labelDescription";
import ImgBlueHeart from '../imgBlueHeart/imgBlueHeart';
import {Link} from 'react-router-dom';

function CardItem(props) {
 
  return (
      <div className = "card-item-class">
        <ImgBlueHeart addCart={props.addCart} id={props.id}/>
        <Link to="/cardlist" style = {{textDecoration: "none", color: "#222"}} >
          <Crossimage way = {props.image} />
        </Link>
        <LabelName name = {props.name}/>
        <LabelDescription description = {props.description}/>
        <LabelPrice cost = {props.cost}/>
    </div>
  );
}

export default CardItem;