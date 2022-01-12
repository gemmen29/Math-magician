import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Calculator from '../components/Calculator/Calculator';

describe('Test Calculator render', () => {
  test('Test Calculator', () => {
    const tree = render(
      <Calculator />
      ,
    );
    expect(tree).toMatchSnapshot();
  });
  test('Test Calculator',async () => {
    render(<Calculator />,);
    fireEvent.click(screen.getByText('5'))
    const result = await waitFor(() => screen.getByTestId('result'))
    expect(result.value).toBe('5')

  });
});
