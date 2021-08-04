import React from 'react';
import PropTypes from 'prop-types';

// lets add image property detail later, we will come back to this
const CartoonDetail = ({ gifLink, _id }) => {

  return (
    <>
      <p>Actual Link to GIF: { gifLink }</p>
      <p>Actual ID from API: { _id } </p>
    </>
  );
};

CartoonDetail.propTypes = { 
  _id: PropTypes.number.isRequired,
  gifLink: PropTypes.string.isRequired,
};

export default CartoonDetail;


