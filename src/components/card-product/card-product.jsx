import React from 'react';
import './card-product.css';
import PictureBigCard from './../pictureBigCard/pictureBigCard';
import Description from './../card-product/descriprion/description';
import Type from './../card-product/type/type';
import Price from './../card-product/price/price';
import LabelSizeAndCount from './../card-product/labelSizeAndCount/labelSizeAndCount';
import BtnSize from './../card-product/btn-size/btn-size';
import BtnAddToChosen from './../card-product/btn-addtochosen/btn-addtochoden';
import BtnCheckout from './../card-product/btn-checkout/btn-checkout';
import BtnPlusMinus from './../card-product/btn-plus-minus/btn-plus-minus';
import BtnIncrease from './../card-product/btn-increase/btn-increase';

import i from './../../images/cross/adidas-yeezy-boost-350-v2-trfrm_01-1200x800-1200x800_0.jpg';


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
                <BtnPlusMinus sign = "-"/>
                <BtnIncrease count = "0" />
                <BtnPlusMinus sign = "+"/>
              </div>
              </div>
              

              <div className = "horizontal-size-container2">
                <div className = "firstcolumn-secondrow">
                  <LabelSizeAndCount lab = "Размер:" />
                </div>
                <div className = "secondcolumn-secondrow">
                  <BtnSize size = "36"/>
                  <BtnSize size = "37"/>
                  <BtnSize size = "38"/>
                  <BtnSize size = "39"/>
                  <BtnSize size = "40"/>
                  <BtnSize size = "41"/>
                  <BtnSize size = "42"/>
                  <BtnSize size = "43"/>
                  <BtnSize size = "44"/>
                  <BtnSize size = "45"/>
                </div>
              </div>
            </div>

            <div className = "button-position">
              <BtnAddToChosen />
              <BtnCheckout />
            </div>
          

          </div>
        </div>
      </div>
  );
}

export default CardProduct;