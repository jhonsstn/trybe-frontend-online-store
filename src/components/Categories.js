import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Category from './Category';

class Categories extends Component {
  render() {
    const { categories } = this.props;
    return categories.map((category) => (
      <Category key={ category.id } category={ category } />
    ));
  }
}

Categories.propTypes = {
  categories: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default Categories;
