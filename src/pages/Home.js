import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Categories from '../components/Categories';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };
  }

  handleClick = ({ target }) => {
    const { selectCategory } = this.props;
    selectCategory(target);
    this.setState({
      clicked: true,
    });
  }

  render() {
    const { categories } = this.props;
    const { clicked } = this.state;
    return (
      <>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Categories handleClick={ this.handleClick } categories={ categories } />
        {clicked && <Redirect to="/products" />}
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
  selectCategory: PropTypes.func.isRequired,
};

export default Home;
