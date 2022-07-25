/* global it describe expect */

import React from 'react';
import { render } from '@testing-library/react';
import NoMatch from '../../pages/NoMatch';

describe('NoMatch page', () => {
  it('renders "Ooops! There is nothing here."', () => {
    const { container } = render(<NoMatch />);
    expect(container).toMatchSnapshot();
  });
});
