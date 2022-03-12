import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Categories from '../components/Categories';

class Products extends Component {
  handleClick = ({ target }) => {
    const { selectCategory, history } = this.props;
    selectCategory(target);
    history.push('/products');
  };

  render() {
    const {
      productList,
      handleChange,
      handleSearchClick,
      history,
      categories,
    } = this.props;
    return (
      <>
        <Header
          handleChange={ handleChange }
          handleSearchClick={ handleSearchClick }
          history={ history }
        />
        <Categories handleClick={ this.handleClick } categories={ categories } />
        {productList.length > 0 ? (
          productList.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))
        ) : (
          <p>Nenhum produto foi encontrado!</p>
        )}
      </>
    );
  }
}

Products.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
      length: PropTypes.func,
    }),
  ).isRequired,
  selectCategory: PropTypes.func.isRequired,
};

export default Products;
