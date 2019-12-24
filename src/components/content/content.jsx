import React , {useState} from 'react';
import './content.css';
import CardItem from "./../card-item/card-item";

function Content(props) {
  //задаем начальное состояние данных
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  //фозвращаем данные с бека на главную страницу при загрузке - все возможные товары
  function responseMainPage(){
    const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog';
    fetch(url)
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => setData(response));
  }


  function sendPostFetchWithPrice(v){
    const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog/?cost=' + v;
    fetch(url)
      .then(response => response.json())
      .then(response => setData(response))
  }


  // responseMainPage();
  sendPostFetchWithPrice(5);
  return (     
      <div className = "content-class">
        {data.map((item) => {
          return( 
             <CardItem image = {item.img} cost = {item.cost} name = {item.name} description = {item.text}/>
          );
        })}
        {/* <CardItem id = {item._id} image = {pic} cost = "345"/> */}
        {/* <CardItem method = {znach}/> */}
      </div>
   );
  }

export default Content;