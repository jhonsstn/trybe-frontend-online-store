import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Categories from '../components/Categories';
import Header from '../components/Header';

class Home extends Component {
  handleClick = ({ target }) => {
    const { selectCategory, history } = this.props;
    selectCategory(target);
    history.push('/products');
  };

  render() {
    const { categories, handleChange, handleSearchClick, history } = this.props;
    return (
      <>
        <Header
          handleChange={ handleChange }
          handleSearchClick={ handleSearchClick }
          history={ history }
        />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Categories handleClick={ this.handleClick } categories={ categories } />
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
  handleChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  selectCategory: PropTypes.func.isRequired,
};

export default Home;
