import React from "react";
import  "./dropDownList.css";

class DropDownList extends React.Component {
  state = {
    user: 37,
  };

  getListSizes() {
    let listSizes = [];
    let sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
    for (let item of sizes) {
        listSizes.push(<option value={item}>{item}</option>);
      }
      return listSizes;
  }

  render() {
    return (
      <>
        <label>
          <select
            value={this.state.user}
            onChange={e => this.setState({ user: e.target.value })}
          >
            {this.getListSizes()}
          </select>
        </label>
      </>
    )
  }
}

export default DropDownList;