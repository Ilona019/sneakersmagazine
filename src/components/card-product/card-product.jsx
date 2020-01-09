import React from 'react';
import './card-product.css';
import PictureBigCard from './../pictureBigCard/pictureBigCard';
import Description from './../card-product/descriprion/description';
import Type from './../card-product/type/type';
import Price from './../card-product/price/price';
import LabelSizeAndCount from './../card-product/labelSizeAndCount/labelSizeAndCount';
import Btn from './../Btn/Btn';
import BtnIncrease from './../card-product/btn-increase/btn-increase';

import i from './../../images/cross/adidas-yeezy-boost-350-v2-trfrm_01-1200x800-1200x800_0.jpg';
// import i from './../../images/boot1.gif';
function CardProduct(props) {

  return (
      <div className = "container-card-project-class">
        <div className = "content">
          <PictureBigCard way = {i}/>

          <div className = "vertical-container">

            <Description desc = "Adidas Originals 3564759"/>
            <Type type = "Classics"/>
            <Price price = "12 990"/>

            <div className = "unitesizecount-container">

              <div className = "horizontal-count-container1">
                <div className = "firstcolumn-firstrow">
                  <LabelSizeAndCount lab = "Количество:" />
                </div>
              <div className = "firstcolumn-secondrow">
                <Btn className = "btn-plus-minus-class" nameOfButton = "-"/>
                <BtnIncrease count = "0" />
                <Btn className = "btn-plus-minus-class" nameOfButton = "+"/>
              </div>
              </div>
              

              <div className = "horizontal-size-container2">
                <div className = "firstcolumn-secondrow">
                  <LabelSizeAndCount lab = "Размер:" />
                </div>
                <div className = "secondcolumn-secondrow">
                  <Btn className = "size-class" nameOfButton = "36"/>
                  <Btn className = "size-class" nameOfButton = "37"/>
                  <Btn className = "size-class" nameOfButton = "38"/>
                  <Btn className = "size-class" nameOfButton = "39"/>
                  <Btn className = "size-class" nameOfButton = "40"/>
                  <Btn className = "size-class" nameOfButton = "41"/>
                  <Btn className = "size-class" nameOfButton = "42"/>
                  <Btn className = "size-class" nameOfButton = "43"/>
                  <Btn className = "size-class" nameOfButton = "44"/>
                  <Btn className = "size-class" nameOfButton = "45"/>
                </div>
              </div>
            </div>

            <div className = "button-position">
              <Btn className = "btn-addtochosen-class" nameOfButton = "Добавить в избранное"/>
              <Btn className = "btn-checkout-class" nameOfButton = "Оформить заказ"/>
            </div>
          

          </div>
        </div>
      </div>
  );
}

export default CardProduct;