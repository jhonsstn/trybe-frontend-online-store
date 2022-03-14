import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ProductCard extends Component {
  handleClick = () => {
    const { history, id } = this.props;
    history.push(`/product/${id}`);
  };

  render() {
    const {
      product: { title, price, thumbnail },
    } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3>{title}</h3>
        <span>{price}</span>
        <button
          data-testid="product-detail-link"
          type="button"
          onClick={ this.handleClick }
        >
          Detalhes
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  id: PropTypes.string.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
