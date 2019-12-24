import React , {useState} from 'react';
import './content.css';
import CardItem from "./../card-item/card-item";
import pic from './../../images/cross/adidas-yeezy-boost-350-v2-trfrm_01-1200x800-1200x800_0.jpg'

import Price from './../price/price';

function Content() {
  //задаем начальное состояние данных
  const [data, setData] = useState([]);
  //фозвращаем данные с бека на главную страницу при загрузке - все возможные товары
  function responseMainPage(){
    const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog';
    fetch(url)
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => setData(response));
  }
  //возвращаем стоимость товара с бэка (может это метод совсем не нужен)
  // function responsePrice(){
  //   const url = "https://sneakers-shop-back.herokuapp.com/main/catalog";
  //   fetch(url)
  //     .then(response => response.json)
  //     .then(response => console.log(response))
  //     .then(response => setData(response))
  // }


  let znach = function sendPostFetchWithPrice(v){
    const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog/?cost=' + v;
    fetch(url)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => setData(response))
    // console.log(url);
  }


  // this.sendPostFetchWithPrice(inputFrom.value);
  responseMainPage();
  // responsePrice();
  // if(responseMainPage())
  return (     
      <div className = "content-class">
        {/* {data.map((item) => {
          return( 
             <CardItem id = {item._id} image = {item.img} cost = {item.cost} name = {item.name} description = {item.text}/>
          );
        })} */}
        {/* <CardItem id = {item._id} image = {pic} cost = "345"/> */}
        <CardItem method = {znach}/>
      </div>
   );
  }

export default Content;