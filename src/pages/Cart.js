import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
    );
  }
}

export default Cart;
