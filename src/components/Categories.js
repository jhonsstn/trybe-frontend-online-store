import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Category from './Category';

class Categories extends Component {
  render() {
    const { categories, handleClick } = this.props;
    return (
      <aside>
        {categories.map((category) => (
          <Category
            handleClick={ handleClick }
            key={ category.id }
            category={ category }
          />
        ))}
        ;
      </aside>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
    }),
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
