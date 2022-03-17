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
      email: '',
      rating: '',
      description: '',
      reviews: [],
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
    if (localStorage.getItem(id)) {
      const reviews = JSON.parse(localStorage.getItem(id));
      this.setState({
        reviews,
      });
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleReview = () => {
    const {
      email,
      rating,
      description,
      product: { id },
    } = this.state;
    const review = {
      email,
      rating,
      description,
    };
    this.setState({
      email: '',
      rating: '',
      description: '',
    });

    if (localStorage.getItem(id)) {
      const reviews = JSON.parse(localStorage.getItem(id));
      reviews.push(review);
      localStorage.setItem(id, JSON.stringify(reviews));
      this.setState({
        reviews,
      });
    }
    if (!localStorage.getItem(id)) {
      const reviews = [];
      reviews.push(review);
      localStorage.setItem(id, JSON.stringify(reviews));
      this.setState({
        reviews,
      });
    }
  };

  render() {
    const { handleChange, handleSearchClick, history, handleCart } = this.props;
    const {
      product: { title, thumbnail, price, attributes, id },
      email,
      description,
      reviews,
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
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => handleCart(id) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              data-testid="product-detail-email"
              type="email"
              name="email"
              id="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="rating">
            Nota:
            <input
              data-testid="1-rating"
              type="radio"
              name="rating"
              id="rating"
              value="1"
              onChange={ this.handleChange }
            />
            <input
              data-testid="2-rating"
              type="radio"
              name="rating"
              id="rating"
              value="2"
              onChange={ this.handleChange }
            />
            <input
              data-testid="3-rating"
              type="radio"
              name="rating"
              id="rating"
              value="3"
              onChange={ this.handleChange }
            />
            <input
              data-testid="4-rating"
              type="radio"
              name="rating"
              id="rating"
              value="4"
              onChange={ this.handleChange }
            />
            <input
              data-testid="5-rating"
              type="radio"
              name="rating"
              id="rating"
              value="5"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            <textarea
              data-testid="product-detail-evaluation"
              name="description"
              id="description"
              cols="30"
              rows="10"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>

          <input
            data-testid="submit-review-btn"
            type="button"
            onClick={ this.handleReview }
            value="Avaliar"
          />
        </div>
        <div>
          {reviews.map((review) => (
            <div key={ review.email }>
              <h3>{review.email}</h3>
              <span>{review.rating}</span>
              <p>{review.description}</p>
            </div>
          ))}
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
  handleCart: PropTypes.func.isRequired,
};

export default Product;
