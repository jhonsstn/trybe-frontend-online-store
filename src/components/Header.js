import React, { Component } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  handleClick = () => {
    const { handleSearchClick, history } = this.props;
    handleSearchClick();
    history.push('/products');
  };

  render() {
    const { handleChange } = this.props;
    return (
      <>
        <input onChange={ handleChange } type="text" data-testid="query-input" />
        <button
          onClick={ this.handleClick }
          type="button"
          data-testid="query-button"
        >
          Buscar
        </button>

        <Link to="/cart" data-testid="shopping-cart-button">
          <BsCart3 />
        </Link>
      </>
    );
  }
}

Header.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Header;
