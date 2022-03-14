import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Attribute extends Component {
  render() {
    const { attribute } = this.props;
    return <li>{`${attribute.name}: ${attribute.value_name}`}</li>;
  }
}

Attribute.propTypes = {
  attribute: PropTypes.shape({
    name: PropTypes.string,
    value_name: PropTypes.string,
  }).isRequired,
};

export default Attribute;
