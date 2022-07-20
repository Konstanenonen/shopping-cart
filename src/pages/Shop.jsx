import React, { useState } from 'react';
import ShopCartBar from '../components/ShopCartBar';

function Shop() {
  const [itemsAmount, setItemsAmount] = useState(0);

  const addToItems = (amount) => {
    setItemsAmount((i) => i + amount);
  };

  return (
    <div>
      <ShopCartBar itemsAmount={itemsAmount} />
      <h1>Shop</h1>
      <button type="button" onClick={() => addToItems(1)}>
        ADD
      </button>
    </div>
  );
}

export default Shop;
