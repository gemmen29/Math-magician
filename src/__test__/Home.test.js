import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home/Home';

describe('Test Home render', () => {
  test('Test Home', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
