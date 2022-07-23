import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/ShopCartBar.module.scss';

function ShopCartBar({ itemsAmount }) {
  return (
    <div className={styles.container}>
      <p>Items in shopping cart: {itemsAmount}</p>
      <button type="button">CHECKOUT</button>
    </div>
  );
}

ShopCartBar.propTypes = {
  itemsAmount: PropTypes.number.isRequired,
};

export default ShopCartBar;
