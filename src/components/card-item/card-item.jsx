import React from 'react';
import './card-item.css';
import Crossimage from "../crossimage/crossimage"; 
import LabelPrice from "../labelPrice/labelPrice";
import LabelName from "../labelName/labelName";
import LabelDescription from "../labelDescription/labelDescription";
import ImgBlueHeart from '../imgBlueHeart/imgBlueHeart';
import heartBlue from './../../images/heartBlue.svg';
import {Link} from 'react-router-dom';

function CardItem(props) {
  return (
    <Link to="/cardlist" style = {{textDecoration: "none", color: "#222"}} >
      <div className = "card-item-class">
        <ImgBlueHeart way = {heartBlue} />
        <Crossimage way = {props.image} />
        <LabelName name = {props.name}/>
        <LabelDescription description = {props.description}/>
        <LabelPrice c = {props.cost}/>
    </div>
 </Link>
  );
}

export default CardItem;