import React from 'react';
import PropTypes from 'prop-types';
import Cartoon from '../Cartoon/Cartoon';

const CartoonList = ({ cartoons }) => {
  const cartoonElements = cartoons.map((cartoon) => (
    <li key={cartoon._id}>
      <Cartoon
        {...cartoon}
      />
    </li>
  ));

  return <ul>{cartoonElements}</ul>;
};

CartoonList.propTypes = {
  cartoons: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      gifLink: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default CartoonList;
