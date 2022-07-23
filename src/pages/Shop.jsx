import React, { useState } from 'react';
import ShopCartBar from '../components/ShopCartBar';
import ShopItem from '../components/ShopItem';
import shopItems from '../data/shopItems';

function Shop() {
  const [itemsAmount, setItemsAmount] = useState(0);
  const items = shopItems;

  const addToCart = (amount) => {
    setItemsAmount((i) => i + amount);
  };

  const itemElements = items.map((item) => (
    <ShopItem
      title={item.title}
      description={item.description}
      addToCart={addToCart}
    />
  ));

  return (
    <>
      <ShopCartBar itemsAmount={itemsAmount} />
      <div>{itemElements}</div>
    </>
  );
}

export default Shop;
