import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote/Quote';

describe('Test Quote render', () => {
  test('Test Quote', () => {
    const tree = render(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});
