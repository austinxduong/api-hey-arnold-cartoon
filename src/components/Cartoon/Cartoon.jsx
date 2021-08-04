/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cartoon = ({ gifLink, _id }) => (
  <Link to={`/${_id}`}>

    <figure>
      <img src={gifLink} alt={gifLink} />
      <figcaption>
        <p>{gifLink}</p>
      </figcaption>
    </figure>
        
  </Link>
);

Cartoon.propTypes = {
  _id: PropTypes.string.isRequired,
  gifLink: PropTypes.string.isRequired,
};

export default Cartoon;

