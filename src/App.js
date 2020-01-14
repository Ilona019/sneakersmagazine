import React from "react";
import Main from "./../src/components/main/main";
import CardProduct from "./../src/components/card-product/card-product";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataPrice: [],
      dataMenu: [],
      dataSearch: []
    };
    this.getServerData();
    this.postServerDataPrice = this.postServerDataPrice.bind(this); //приязка к контексту...
    this.postServerMenuItems = this.postServerMenuItems.bind(this);
    this.postServerDataSearch = this.postServerDataSearch.bind(this);
  }

  getServerData() {
    const url = "https://sneakers-shop-back.herokuapp.com/main/catalog";
    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({ data: response }));
  }

  postServerDataPrice(paramChosenPrice) {
    const url =
      "https://sneakers-shop-back.herokuapp.com/main/catalog/?cost=" +
      paramChosenPrice;
    fetch(url, {
      method: "POST"
    })
      .then(response => response.json())
      .then(response => this.setState({ dataPrice: response }));
  }

  postServerMenuItems(v) {
    const url = "https://sneakers-shop-back.herokuapp.com/main/catalog/?" + v;
    fetch(url, {
      method: "POST"
    })
    .then(response => response.json())
    .then(response => this.setState({ dataMenu: response }));
  }

  //пока метод в БД не работает
  postServerDataSearch(v){
    const url = 'https://sneakers-shop-back.herokuapp.com/main/catalog/search/?query=' + v;
    fetch(url, {
      method: 'POST'
    })
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => this.setState({dataSearch: response}))
    // console.log(url);
  }

  render() {
    return (
      <div className="app-wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/cardlist" render={() => <CardProduct />} />
            <Route
              path="/"
              render={() => (
                <Main
                // все это идет в header
                  price={this.postServerDataPrice}
                  menu={this.postServerMenuItems}
                  search = {this.postServerDataSearch}
                  //все это идет в контент
                  dataPrice={this.state.dataPrice}
                  dataMenu={this.state.dataMenu}
                  data={this.state.data}
                  dataSearch = {this.state.dataSearch}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
