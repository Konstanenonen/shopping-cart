import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/ShopItem.module.scss';
import Button from './Button';

function ShopItem({ title, description, addToCart }) {
  const [amount, setAmount] = useState(0);
  const amountInputId = 'item-amount';

  const handleClick = () => {
    addToCart(amount);
    setAmount(0);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
      <div className={styles.row}>
        <Button handleClick={() => setAmount(amount - 1)}>-1</Button>
        <label className={styles.label} htmlFor={amountInputId}>
          Add more to order:
          <input
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            type="number"
            id={amountInputId}
          />
        </label>
        <Button handleClick={() => setAmount(amount + 1)}>+1</Button>
      </div>
      <Button handleClick={handleClick}>Add to cart</Button>
    </div>
  );
}

ShopItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ShopItem;
