import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Category extends Component {
  render() {
    const { category, handleClick } = this.props;
    return (
      <div>
        <label data-testid="category" htmlFor={ category.id }>
          <input
            type="radio"
            id={ category.id }
            name="categories"
            value={ category.id }
            onClick={ handleClick }
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
  handleClick: PropTypes.func.isRequired,
};

export default Category;
