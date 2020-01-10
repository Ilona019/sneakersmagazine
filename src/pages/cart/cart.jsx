import React from "react";
import "./cart.css";
import pic from "../../images/cross/adidas-yeezy-boost-350-v2-trfrm_01-1200x800-1200x800_0.jpg";
import Button from "../../components/button/button";
import EmptyCart from "./emptyCart";
import RowCart from "./rowCart";
import Tooltip from "../../components/tooltip/tooltip";
import PopUpWindows from "../../components/modal/popUpWindows";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsCart: [],
      total_count: 0,
      total_sum: 0,
      error: 1
    };
    this.getServerData();
    this.clearCart = this.clearCart.bind(this);
  }

  async getServerData() {
    const responce = await fetch(
      "https://sneakers-shop-back.herokuapp.com/cart/read/",
      { credentials: "include" }
    );
    const jsonData = await responce.json();
    var productsCart = [
      {
        id: 0,
        img: pic,
        name: "Название",
        size: 37,
        cost: 20000,
        total_count: 2,
        total_sum: 40000
      },
      {
        id: 1,
        img: pic,
        name: "Название",
        size: 38,
        cost: 20000,
        total_count: 1,
        total_sum: 20000
      },
      {
        id: 2,
        img: pic,
        name: "Название",
        size: 39,
        cost: 26000,
        total_count: 1,
        total_sum: 26000
      }
    ];
    if (jsonData.error === 0) {
      if (jsonData.cart === null) {
        this.setState({
          productsCart: [],
          //productsCart: productsCart,
          error: jsonData.error
        });
      } else {
        this.setState({
          productsCart: jsonData.cart,
          total_count: jsonData.total_count,
          total_sum: jsonData.total_sum,
          //productsCart: productsCart,
          error: jsonData.error
        });
      }
    } else {
      alert(jsonData.messages);
    }
  }

  getTableHeader = () => {
    let headers = [];
    let rowHeader = [
      "Товар",
      "Название",
      "Размер",
      "Цена",
      "Количество",
      "Сумма",
      <>
        <Tooltip position="right" content="Очистить">
          <PopUpWindows
            content={
              <>
                "Вы точно хотите удалить все товары? Отменить действие будет
                невозможно"
                <div className="btn-clear">
                  <Button onClick={this.clearCart}>Очистить корзину</Button>
                </div>
              </>
            }
            title="Удаление всех товаров"
            nameIcon="far fa-trash-alt"
            sizeIcon={1}
          />
        </Tooltip>
      </>
    ];
    for (let header of rowHeader) {
      headers.push(<th key={header}>{header}</th>);
    }
    return headers;
  };

  deleteProduct = (element, e) => {
    // const productsCart = Object.assign([], this.state.productsCart);
    // productsCart.splice(productsCart.indexOf(element), 1);
    // this.setState({ productsCart: productsCart });

    fetch("http://sneakers-shop-back.herokuapp.com/cart/delete_one/", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({_id: element.id}),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  async clearCart() {
    // const productsCart = Object.assign([], this.state.productsCart);
    // let lengthMassivaProductCart = this.state.productsCart.length;
    // productsCart.splice(0, lengthMassivaProductCart);
    // this.setState({ productsCart: productsCart });

    let response = await fetch(
      "http://sneakers-shop-back.herokuapp.com/cart/delete_all/",
      { credentials: "include" }
    );
    let jsonData = await response.json();
    switch (jsonData.error) {
      case 0:
        this.setState({
          productsCart: [],
          error: jsonData.error
        });
        break;
      default:
        alert(jsonData.messages);
        this.setState({
          error: jsonData.error
        });
    }
  }

  render() {
    let cart;
    let renderMessageEmpty = <EmptyCart />;

    if (this.state.productsCart.length === 0) cart = renderMessageEmpty;
    else
      cart = (
        <section className="cart">
          <div className="container-cart">
            <main className="cart-main">
              <table className="cart-table">
                <thead>
                  <tr>{this.getTableHeader()}</tr>
                </thead>
                <tbody>
                  {this.state.productsCart.map(element => (
                    <RowCart
                      key={element.id}
                      idProduct={element.id}
                      pic={element.img}
                      name={element.name}
                      size={element.size}
                      cost={element.cost}
                      count={element.count}
                      sum={element.sum}
                      delEvent={this.deleteProduct.bind(this, element)}
                    />
                  ))}
                </tbody>
              </table>
            </main>
          </div>
          <div className="orders-transition-block">
            <div className="btn-orders">
              <Button className="invert">Перейти к оформлению</Button>
            </div>
            <div className="total">
              <h3 className="label-total">Общая стоимость</h3>
              <span>{this.state.total_sum} &#8381;</span>
            </div>
            <div className="total">
              <h3 className="label-total">Количество товаров</h3>
              <span>{this.state.total_count}</span>
            </div>
          </div>
        </section>
      );
    return <>{cart}</>;
  }
}

export default Cart;
