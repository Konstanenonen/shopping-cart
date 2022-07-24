/* global it describe expect jest */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Shop from '../../pages/Shop';

describe('Shop page', () => {
  it('Renders shop item data to ShopItem components', () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  });

  it('ShopCartBar has correct amount of items after addition', () => {
    render(<Shop />);
    const input = screen.getAllByRole('spinbutton')[0];
    const button = screen.getAllByRole('button', { name: 'Add to cart' })[0];
    const shoppingCart = screen.getByText(/items/i);

    act(() => {
      userEvent.type(input, '12');
      userEvent.click(button);
    });

    expect(shoppingCart.innerHTML).toBe('Items in shopping cart: 12');
  });
});
