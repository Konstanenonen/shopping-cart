import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/ShopCartBar.module.scss';
import Button from './Button';

function ShopCartBar({ itemsAmount }) {
  return (
    <div className={styles.container}>
      <p>Items in shopping cart: {itemsAmount}</p>
      <Button>CHECKOUT</Button>
    </div>
  );
}

ShopCartBar.propTypes = {
  itemsAmount: PropTypes.number.isRequired,
};

export default ShopCartBar;
