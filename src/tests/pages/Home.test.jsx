/* global it describe expect */

import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home page', () => {
  it('renders information about learning goals and link to GitHub profile', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
