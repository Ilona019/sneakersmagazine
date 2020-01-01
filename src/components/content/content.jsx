import React, { useState, useEffect } from "react";
import "./content.css";
import CardItem from "./../card-item/card-item";
import { element } from "prop-types";

function Content(props) {
  //задаем начальное состояние данных
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  //возвращаем данные с бека на главную страницу при загрузке - все возможные товары

  function getFetchWithPrice() {
    const url = "https://sneakers-shop-back.herokuapp.com/main/catalog";
    fetch(url)
      .then(response => response.json())
      //.then(response => console.log("BBBB",response))
      .then(response => setData(response));
  }

  const addCart = id => {
    var data = { _id: id };
    fetch("https://sneakers-shop-back.herokuapp.com/cart/add/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  useEffect(() => {
    function responseMainPage() {
      const url = "https://sneakers-shop-back.herokuapp.com/main/catalog";
      fetch(url)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => setData(response));
    }
    responseMainPage();
  }, []);

  //getFetchWithPrice();
  return (
    <div className="content-class">
      {/* {console.log("Aaaa",data2)} */}
      {data.map(item => {
        return (
          <CardItem
            image={item.img}
            cost={item.cost}
            name={item.name}
            description={item.text}
            addCart={addCart}
            id={item._id}
          />
        );
      })}
      {/* <CardItem id = {item._id} image = {pic} cost = "345"/> */}
      {/* <CardItem method = {znach}/> */}
    </div>
  );
}

export default Content;
