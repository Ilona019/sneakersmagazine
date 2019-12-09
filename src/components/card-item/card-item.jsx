import React from 'react';
import './card-item.css';
import Crossimage from "../crossimage/crossimage"; 
import LabelPrice from "../labelPrice/labelPrice";
import LabelName from "../labelName/labelName";
import LabelDescription from "../labelDescription/labelDescription";
import ImgBlueHeart from '../imgBlueHeart/imgBlueHeart';
import heartBlue from './../../images/heartBlue.svg';
// import {BrowserRouter, Route} from 'react-router-dom';
// import CardProduct from './../card-product/card-product';

function CardItem(props) {
  return (
    // <BrowserRouter>
      <div className = "card-item-class">
        <ImgBlueHeart way = {heartBlue} />
        {/* <div> */}
          {/* <Route path = "/cardproduct" component = {CardProduct} /> */}
        {/* </div> */}
        <Crossimage way = {props.image} />
        <LabelName name = {props.name}/>
        <LabelDescription description = {props.description}/>
        <LabelPrice c = {props.cost}/>
    </div>
    // </BrowserRouter>
  );
}

export default CardItem;