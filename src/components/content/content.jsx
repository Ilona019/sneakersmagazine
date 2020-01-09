import React from 'react';
import './content.css';
import CardItem from "./../card-item/card-item";

class Content extends React.Component {

  // function getFetchWithPrice(){
  //   const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog';
  //   fetch(url)
  //     .then(response => response.json())
  //     //.then(response => console.log("BBBB",response))
  //     .then(response => setData(response))
  // }


  // getFetchWithPrice();
  render(){
    return (     
      <div className = "content-class" >
        {/* {console.log(this.props.data)} */}
        {this.props.data.map((item) => {
          return( 
             <CardItem image = {item.img} cost = {item.cost} name = {item.name} description = {item.text}/>
          );
        })}
        </div>
   );
  }
  }

export default Content;