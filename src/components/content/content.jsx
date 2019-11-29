import React from 'react';
import './content.css';
import CardItem from "./../card-item/card-item";
import pic from "../../images/cross/adidas-yeezy-boost-350-v2-trfrm_01-1200x800-1200x800_0.jpg";
import pic2 from "../../images/cross/krossovki-adidas-yeezy-350-boost-v2-12857-razmer-5-13414846.jpg"

function Content() {

  return (
      <div className = "content-class">
        <CardItem image = {pic}/>
        <CardItem image = {pic2}/>
        <CardItem image = {pic2}/>
        <CardItem image = {pic}/>
        <CardItem image = {pic}/>
        <CardItem image = {pic2}/>
      </div>
  );
}

export default Content;