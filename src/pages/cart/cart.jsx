import React from "react";
import "./cart.css";
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
    this.getServerData = this.getServerData.bind(this);
  }

  async updateCart(id, counter) {
    //fetch count change products
    await fetch("https://sneakers-shop-back.herokuapp.com/cart/update/", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ _id: id, count: counter }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    //update display cart
    this.getServerData();
  }

  updateSize(id, newSize) {
    fetch("https://sneakers-shop-back.herokuapp.com/cart/update_size/", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({_id: id, size: newSize }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  getServerData() {
    fetch("https://sneakers-shop-back.herokuapp.com/cart/read/", {
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        if (jsonData.error === 0) {
          if (jsonData.cart === null) {
            this.setState({
              productsCart: [],
              error: jsonData.error
            });
          } else {
            this.setState({
              productsCart: jsonData.cart,
              total_count: jsonData.total_count,
              total_sum: jsonData.total_sum,
              error: jsonData.error
            });
          }
        } else {
          alert(jsonData.messages);
        }
      });
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

  async deleteProduct(element, e) {
    await fetch("https://sneakers-shop-back.herokuapp.com/cart/delete_one/", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ _id: element.id }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.getServerData();
  }

  async clearCart() {
    let response = await fetch(
      "https://sneakers-shop-back.herokuapp.com/cart/delete_all/",
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
                      updateCart={this.updateCart.bind(this)}
                      updateSize={this.updateSize.bind(this)}
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
