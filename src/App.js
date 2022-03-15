import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import {
  getCategories,
  getProductsById,
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
      cart: [],
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

  handleCart = async (id) => {
    const product = await getProductsById(id);
    this.setState((prevState) => (
      {
        cart: [...prevState.cart, product],
      }
    ));
  }

  render() {
    const { categories, productList, cart } = this.state;
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
                cart={ cart }
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

          <Route
            path="/product/:id"
            render={ (props) => (
              <Product
                { ...props }
                handleSearchClick={ this.handleSearchClick }
                handleChange={ this.handleChange }
                handleCart={ this.handleCart }
              />
            ) }
          />
        </Router>
      </div>
    );
  }
}

export default App;
