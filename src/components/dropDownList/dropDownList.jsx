import React from "react";
import  "./dropDownList.css";

class DropDownList extends React.Component {
  state = {
    currentItem: this.props.defaultValue,
  };

  componentDidUpdate(prevProps) {
    //id товара, у которого меняется размер.
    console.log(this.state.currentItem+" "+this.props.id);
    //замедлить fetch
  }


  getListItems() {
    let listItems = [];
    let list = this.props.list;
    for (let item of list) {
        listItems.push(<option key={item} value={item}>{item}</option>);
      }
      return listItems;
  }

  render() {
    return (
      <>
        <label>
          <select
            value={this.state.currentItem}
            onChange={e => this.setState({ currentItem: e.target.value})}
          >
            {this.getListItems()}
          </select>
        </label>
      </>
    )
  }
}

export default DropDownList;