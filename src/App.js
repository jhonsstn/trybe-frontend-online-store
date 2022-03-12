import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {
  getCategories,
  getProductsFromCategory,
  getProductsFromQuery,
} from './services/api';

import './App.css';
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

  selectCategory = async (target) => {
    const { value } = target;
    const productList = await getProductsFromCategory(value);
    this.setState({
      productList,
    });
  };

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
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home
                { ...props }
                selectCategory={ this.selectCategory }
                categories={ categories }
                handleSearchClick={ this.handleSearchClick }
                handleChange={ this.handleChange }
              />
            ) }
          />
          <Route
            path="/cart"
            render={ (props) => (
              <Cart
                { ...props }
                productList={ productList }
                handleSearchClick={ this.handleSearchClick }
                handleChange={ this.handleChange }
              />
            ) }
          />
          <Route
            path="/products"
            render={ (props) => (
              <Products
                { ...props }
                productList={ productList }
                handleSearchClick={ this.handleSearchClick }
                handleChange={ this.handleChange }
                categories={ categories }
                selectCategory={ this.selectCategory }
              />
            ) }
          />
        </Router>
      </div>
    );
  }
}

export default App;
