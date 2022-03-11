import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    const { handleSearchClick } = this.props;
    handleSearchClick();
    this.setState({
      clicked: true,
    });
  };

  render() {
    const { handleChange } = this.props;
    const { clicked } = this.state;
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
          Carrinho
        </Link>
        {clicked && <Redirect to="/products" />}
      </>
    );
  }
}

Header.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
};

export default Header;
