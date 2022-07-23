import React, { useState } from 'react';
import ShopCartBar from '../components/ShopCartBar';
import ShopItem from '../components/ShopItem';

function Shop() {
  const [itemsAmount, setItemsAmount] = useState(0);

  const addToCart = (amount) => {
    setItemsAmount((i) => i + amount);
  };

  return (
    <>
      <ShopCartBar itemsAmount={itemsAmount} />
      <ShopItem
        title="Example Item"
        description="Interesting example description"
        addToCart={addToCart}
      />
    </>
  );
}

export default Shop;
