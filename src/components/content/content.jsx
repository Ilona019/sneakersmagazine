import React , {useState} from 'react';
import './content.css';
import CardItem from "./../card-item/card-item";

function Content() {
  const [data, setData] = useState([]);

  function responseMap(){
    const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog';
    fetch(url)
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => setData(response));
      }
  
  responseMap();
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