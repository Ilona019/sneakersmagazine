import React , {useState} from 'react';
import './content.css';
import CardItem from "./../card-item/card-item";
import pic from "../../images/cross/adidas-yeezy-boost-350-v2-trfrm_01-1200x800-1200x800_0.jpg";
import pic2 from "../../images/cross/krossovki-adidas-yeezy-350-boost-v2-12857-razmer-5-13414846.jpg";

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