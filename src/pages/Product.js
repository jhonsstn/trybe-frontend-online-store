import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsById } from '../services/api';
import Header from '../components/Header';
import Attribute from '../components/Attribute';

class Product extends Component {
  constructor() {
    super();

    this.state = {
      product: '',
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const product = await getProductsById(id);
    this.setState({
      product,
    });
  }

  render() {
    const { handleChange, handleSearchClick, history } = this.props;
    const {
      product: { title, thumbnail, price, attributes },
    } = this.state;
    return (
      <>
        <Header
          handleChange={ handleChange }
          handleSearchClick={ handleSearchClick }
          history={ history }
        />
        <div>
          <h2 data-testid="product-detail-name">{`${title} - R$${price}`}</h2>
          <div>
            <img src={ thumbnail } alt="title" />
            <ul>
              {/* (?.) = Optional chaining */}
              {attributes?.map((attribute) => (
                <Attribute key={ attribute.id } attribute={ attribute } />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

Product.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Product;
