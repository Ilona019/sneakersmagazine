import React , {useState} from 'react';
import './content.css';
import CardItem from "./../card-item/card-item";

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
  //возвращаем стоимость товара с бэка
  function responsePrice(){
    const url = "https://sneakers-shop-back.herokuapp.com/main/catalog";
    fetch(url)
      .then(response => response.json)
      .then(response => console.log(response))
      .then(response => setData(response))
  }
  
  responseMainPage();
  responsePrice();
  // if(responseMainPage())
  return (     
      <div className = "content-class">
        {data.map((item) => {
          return(
            <CardItem image = {item.img} cost = {item.cost} name = {item.name} description = {item.text}/>
          );
        })}
      </div>
   );
  }

export default Content;