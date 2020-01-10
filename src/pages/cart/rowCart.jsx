import React from "react";
import Icon from "../../components/icon/icon";
import PriceCount from "../../components/price-count/price-count";
import DropDownList from "../../components/dropDownList/dropDownList";

class RowBasket extends React.Component {
  render() {
    return (
      <tr>
        <td className="cart-table__product">
          <img
            className="cart-table__name product"
            src={this.props.pic}
            alt="Товар"
          ></img>
        </td>
        <td>
          <div className="cart-table__name">
            {this.props.name}
          </div>
        </td>
        <td>
          <DropDownList list={[36, 37, 38, 39, 40, 41, 42, 43, 44, 45]} defaultValue= {37} id={this.props.idProduct}/>
        </td>
        <td className="cart-table__price">
          <span>{this.props.cost} &#8381;</span>
        </td>
        <td className="cart-price__count">
          <PriceCount currentCount={this.props.count} id={this.props.idProduct}/>
        </td>
        <td className="cart-table__total">
          <span>{this.props.sum} &#8381;</span>
        </td>
        <td className="cart-table__remove">
          <span>
            <Icon name="times" size={1.1} onClick={this.props.delEvent} />
          </span>
        </td>
      </tr>
    );
  }
}
export default RowBasket;
