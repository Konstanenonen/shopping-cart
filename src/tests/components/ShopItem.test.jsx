/* global it describe expect jest */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
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

    act(() => {
      userEvent.click(button);
      userEvent.click(button);
      userEvent.click(button);
    });

    expect(addToCartMock).toBeCalledTimes(3);
  });

  it('+1 button adds 1 to input field after every click', () => {
    render(
      <ShopItem title="TITLE" description="DESCRIPTION" addToCart={() => {}} />
    );
    const button = screen.getByRole('button', { name: '+1' });
    const input = screen.getByRole('spinbutton');

    act(() => {
      userEvent.click(button);
      userEvent.click(button);
      userEvent.click(button);
    });

    expect(Number(input.value)).toBe(3);
  });

  it('-1 button removes 1 to input field after every click', () => {
    render(
      <ShopItem title="TITLE" description="DESCRIPTION" addToCart={() => {}} />
    );
    const button = screen.getByRole('button', { name: '-1' });
    const input = screen.getByRole('spinbutton');

    act(() => {
      userEvent.click(button);
      userEvent.click(button);
      userEvent.click(button);
    });

    expect(Number(input.value)).toBe(-3);
  });
});
