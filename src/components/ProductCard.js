import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const {
      product: { title, price, thumbnail },
    } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h3>{title}</h3>
        <span>{price}</span>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
