import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { getCategories, getProductsFromQuery } from './services/api';

import './App.css';
import Header from './components/Header';
import Products from './pages/Products';

class App extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      product: '',
      productList: [],
    };
  }

  async componentDidMount() {
    const data = await getCategories();
    this.setState({
      categories: data,
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      product: value,
    });
  };

  handleSearchClick = async () => {
    const { product } = this.state;
    const productList = await getProductsFromQuery(product);
    this.setState({
      productList,
    });
  };

  render() {
    const { categories, productList } = this.state;
    return (
      <div className="App">
        <Router>
          <Header
            handleSearchClick={ this.handleSearchClick }
            handleChange={ this.handleChange }
          />
          <Route
            exact
            path="/"
            render={ (props) => <Home { ...props } categories={ categories } /> }
          />
          <Route path="/cart" component={ Cart } />
          <Route
            path="/products"
            render={ (props) => (
              <Products { ...props } productList={ productList } />
            ) }
          />
        </Router>
      </div>
    );
  }
}

export default App;
