import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class Products extends Component {
  render() {
    const { productList } = this.props;
    return productList.length > 0 ? (
      productList.map((product) => (
        <ProductCard key={ product.id } product={ product } />
      ))
    ) : (
      <p>Nenhum produto foi encontrado!</p>
    );
  }
}

Products.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
      length: PropTypes.func,
    }),
  ).isRequired,
};

export default Products;
