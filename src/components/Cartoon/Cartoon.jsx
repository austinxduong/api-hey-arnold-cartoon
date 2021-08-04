/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cartoon = ({ name, image, _id }) => (
  <Link to={`/${_id}`}>

    <figure>
      <img src={image} alt={name} />
      <figcaption>
        <p>{name}</p>
      </figcaption>
    </figure>
        
  </Link>
);

Cartoon.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Cartoon;

