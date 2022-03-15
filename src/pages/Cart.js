import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';

class Cart extends Component {
  render() {
    const { handleChange, handleSearchClick, history, cart } = this.props;
    return (
      <>
        <Header
          handleChange={ handleChange }
          handleSearchClick={ handleSearchClick }
          history={ history }
        />
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
        { cart.map((product) => (
          <div key={ product.id }>
            <p data-testid="shopping-cart-product-name">{ product.title }</p>
            {/* Lembrar de alterar o numero "1" para quantidade dinâmica citada no Requisito 10 */}
            <p data-testid="shopping-cart-product-quantity">1</p>
          </div>
        ))}
      </>
    );
  }
}

Cart.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Cart;
