import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { getCategories } from './services/api';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const data = await getCategories();
    console.log(data);
    this.setState({
      categories: data,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="App">
        <Router>
          <Route
            exact
            path="/"
            render={ (props) => <Home { ...props } categories={ categories } /> }
          />
          <Route path="/cart" component={ Cart } />
        </Router>
      </div>
    );
  }
}

export default App;
