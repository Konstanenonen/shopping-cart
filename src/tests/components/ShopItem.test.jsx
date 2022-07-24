/* global it describe expect jest */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShopItem from '../../components/ShopItem';

describe('ShopItem component', () => {
  it('renders "TITLE" and "DESCRIPTION"', () => {
    const { container } = render(
      <ShopItem title="TITLE" description="DESCRIPTION" addToCart={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  it('calls addToCart correct amount of times', () => {
    const addToCartMock = jest.fn();
    render(
      <ShopItem
        title="TITLE"
        description="DESCRIPTION"
        addToCart={addToCartMock}
      />
    );
    const button = screen.getByRole('button', { name: 'Add to cart' });

    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    expect(addToCartMock).toBeCalledTimes(3);
  });
});
