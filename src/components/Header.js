import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      />
    );
  }
}

export default Header;
