/* global it describe expect */

import React from 'react';
import { render } from '@testing-library/react';
import ShopCartBar from '../../components/ShopCartBar';

describe('ShopCartBar component', () => {
  it('renders itemsAmount that is given as a prop', () => {
    const { container } = render(<ShopCartBar itemsAmount={42} />);
    expect(container).toMatchSnapshot();
  });
});
