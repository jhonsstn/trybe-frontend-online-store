import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ Home } />
      </Router>
    </div>
  );
}

export default App;
