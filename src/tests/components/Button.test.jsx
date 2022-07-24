/* global it describe expect jest */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Button from '../../components/Button';

describe('Button component', () => {
  it("renders text 'CLICK ME'", () => {
    const { container } = render(<Button>CLICK ME</Button>);
    expect(container).toMatchSnapshot();
  });

  it('calls handleClick correct amount of times', () => {
    const handleClickMock = jest.fn();
    render(<Button handleClick={handleClickMock}>CLICK ME</Button>);
    const button = screen.getByRole('button', { name: 'CLICK ME' });

    act(() => {
      userEvent.click(button);
      userEvent.click(button);
      userEvent.click(button);
    });

    expect(handleClickMock).toBeCalledTimes(3);
  });
});
