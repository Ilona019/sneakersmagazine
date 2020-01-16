import React from "react";
import  "./dropDownList.css";

class DropDownList extends React.Component {
  state = {
    currentItem: this.props.currentValue,
  };

  updateState(e){
    this.setState({ currentItem: e.target.value});
    this.props.updateSize(this.props.id, e.target.value);
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
            onChange={e => { this.updateState(e)}}
          >
            {this.getListItems()}
          </select>
        </label>
      </>
    )
  }
}

export default DropDownList;