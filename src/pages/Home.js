import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Categories from '../components/Categories';

class Home extends Component {
  render() {
    const { categories } = this.props;
    return (
      <>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Categories categories={ categories } />
      </>
    );
  }
}

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Home;
