import React from "react";
import "./cart.css";
import pic from "../../images/cross/adidas-yeezy-boost-350-v2-trfrm_01-1200x800-1200x800_0.jpg";
import Button from "../../components/button/button";
import Icon from "../../components/icon/icon";
import PriceCount from "../../components/price-count/price-count";
import EmptyCart from "./emptyCart";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsCart: [],
      curIndex: 0,
      error: ""
    };
    this.getServerData();
  }

  async getServerData() {
    const responce = await fetch(
      "http://sneakers-shop-back.herokuapp.com/cart/read/"
    );
    const jsonData = await responce.json();
    this.setState({
      productsCart: jsonData.results,
      error: jsonData.error
    });
  }

  render() {
    let cart;
    let renderMessageEmpty = <EmptyCart />;
    let renderCart = (
      <section className="basket">
        <div className="container-basket">
          <main className="basket-main">
            <table className="basket-table">
              <thead>
                <tr>
                  <th>Товар</th>
                  <th>Название</th>
                  <th>Размер</th>
                  <th>Цена</th>
                  <th>Количество</th>
                  <th>Сумма</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="basket-table__product">
                    <img
                      className="basket-table__link product"
                      src={pic}
                      atl="Продукт"
                    ></img>
                  </td>
                  <td>
                    <a className="basket-table__link" href="/cart">
                      Название кроссовок
                    </a>
                  </td>
                  <td>
                    <span>37</span>
                  </td>
                  <td className="basket-table__price">
                    <span>20000 &#8381;</span>
                  </td>
                  <td className="basket-price__count">
                    <PriceCount currentCount={2} />
                  </td>
                  <td className="basket-table__total">
                    <span>40000 &#8381;</span>
                  </td>
                  <td className="basket-table__remove">
                    <span>
                      {" "}
                      <Icon name="times" size={1.1} />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="basket-table__product">
                    <img
                      className="basket-table__link product"
                      src={pic}
                      atl="Продукт"
                    ></img>
                  </td>
                  <td>
                    <div>
                      <a className="basket-table__link" href="/cart">
                        Название кроссовок
                      </a>
                    </div>
                  </td>
                  <td>
                    <span>38</span>
                  </td>
                  <td className="basket-table__price">
                    <span>20000 &#8381;</span>
                  </td>
                  <td className="basket-price__count">
                    <PriceCount currentCount={1} />
                  </td>
                  <td className="basket-table__total">
                    <span>20000 &#8381;</span>
                  </td>
                  <td className="basket-table__remove">
                    <span>
                      {" "}
                      <Icon name="times" size={1.1} />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </main>
        </div>
        <div className="orders-transition-block">
          <div className="btn-orders">
            <Button className="invert">Перейти к оформлению</Button>
          </div>
          <div className="btn-orders">
            <Button>Очистить корзину</Button>
          </div>
          <div className="total">
            <h3 className="label-total">Общая стоимость</h3>
            <span>60000 &#8381;</span>
          </div>
          <div className="total">
            <h3 className="label-total">Количество товаров</h3>
            <span>3</span>
          </div>
        </div>
      </section>
    );

    if (this.state.error === -3) cart = renderMessageEmpty;
    else cart = renderCart;
    return <>{cart}</>;
  }
}

export default Cart;
