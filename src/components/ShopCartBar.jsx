import React from 'react';
import PropTypes from 'prop-types';

function ShopCartBar({ itemsAmount }) {
  return (
    <div>
      <p>Items in shopping cart: {itemsAmount}</p>
    </div>
  );
}

ShopCartBar.propTypes = {
  itemsAmount: PropTypes.number.isRequired,
};

export default ShopCartBar;
