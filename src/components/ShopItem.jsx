import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/ShopItem.module.scss';

function ShopItem({ title, description, addToCart }) {
  const [amount, setAmount] = useState(0);
  const amountInputId = 'item-amount';

  const handleClick = () => {
    addToCart(amount);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
      <div className={styles.row}>
        <button type="button" onClick={() => setAmount(amount - 1)}>
          -1
        </button>
        <label className={styles.label} htmlFor={amountInputId}>
          Add more to order:
          <input
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            type="number"
            id={amountInputId}
          />
        </label>
        <button type="button" onClick={() => setAmount(amount + 1)}>
          +1
        </button>
      </div>
      <button type="button" onClick={handleClick}>
        Add to cart
      </button>
    </div>
  );
}

ShopItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ShopItem;
