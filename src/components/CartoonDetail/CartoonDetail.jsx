import React from 'react';
import PropTypes from 'prop-types';

// lets add image property detail later, we will come back to this
const CartoonDetail = ({ name }) => {

  return (
    <>
      <p>{ name }</p>
    </>
  );
};

CartoonDetail.propTypes = { 
  _id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default CartoonDetail;


