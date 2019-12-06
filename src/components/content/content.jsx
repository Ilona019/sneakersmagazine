import React from 'react';
import './content.css';
import CardItem from "./../card-item/card-item";
import pic from "../../images/cross/adidas-yeezy-boost-350-v2-trfrm_01-1200x800-1200x800_0.jpg";
import pic2 from "../../images/cross/krossovki-adidas-yeezy-350-boost-v2-12857-razmer-5-13414846.jpg";

function Content() {

  return (
      <div className = "content-class">
        <CardItem image = {pic} cost = "13 900" name = "Adidas Originals 3564759" description = "Какое то описание супер-пупер офигенно красивых кросcовок"/>
        <CardItem image = {pic2} cost = "7 500" name = "Adidas Originals 3564759" description = "Какое то описание супер-пупер офигенно красивых кросcовок"/>
        <CardItem image = {pic2} cost = "7 500" name = "Adidas Originals 3564759" description = "Какое то описание супер-пупер офигенно красивых кросcовок"/>
        <CardItem image = {pic} cost = "13 900" name = "Adidas Originals 3564759" description = "Какое то описание супер-пупер офигенно красивых кросcовок"/>
        <CardItem image = {pic} cost = "13 900" name = "Adidas Originals 3564759" description = "Какое то описание супер-пупер офигенно красивых кросcовок"/>
        <CardItem image = {pic2} cost = "7 500" name = "Adidas Originals 3564759" description = "Какое то описание супер-пупер офигенно красивых кросcовок"/>
        <CardItem image = {pic2} cost = "7 500" name = "Adidas Originals 3564759" description = "Какое то описание супер-пупер офигенно красивых кросcовок"/>
        <CardItem image = {pic2} cost = "7 500" name = "Adidas Originals 3564759" description = "Какое то описание супер-пупер офигенно красивых кросcовок"/>
        <CardItem image = {pic2} cost = "7 500" name = "Adidas Originals 3564759" description = "Какое то описание супер-пупер офигенно красивых кросcовок"/>
        <CardItem image = {pic2} cost = "7 500" name = "Adidas Originals 3564759" description = "Какое то описание супер-пупер офигенно красивых кросcовок"/>
        <CardItem image = {pic2} cost = "7 500" name = "Adidas Originals 3564759" description = "Какое то описание супер-пупер офигенно красивых кросcовок"/>
        <CardItem image = {pic2} cost = "7 500" name = "Adidas Originals 3564759" description = "Какое то описание супер-пупер офигенно красивых кросcовок"/>
      </div>
      // тут видимо потом надо выводить в цикле
  );
}

export default Content;