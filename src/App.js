import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
      </Router>
    </div>
  );
}

export default App;
