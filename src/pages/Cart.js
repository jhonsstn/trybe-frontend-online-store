import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';

class Cart extends Component {
  render() {
    const { handleChange, handleSearchClick, history } = this.props;
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
      </>
    );
  }
}

Cart.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default Cart;
