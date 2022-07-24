/* eslint-disable react/jsx-filename-extension */
/* global it describe expect */

import React from 'react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Button from '../../components/Button';

describe('Button component', () => {
  it("renders text 'CLICK ME'", () => {
    const { container } = render(<Button>CLICK ME</Button>);
    expect(container).toMatchSnapshot();
  });
});
