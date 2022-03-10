import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Category extends Component {
  render() {
    const { category } = this.props;
    return (
      <div>
        <label data-testid="category" htmlFor={ category.id }>
          <input
            type="radio"
            id={ category.id }
            name="categories"
            value={ category.id }
          />
          {category.name}
        </label>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Category;
