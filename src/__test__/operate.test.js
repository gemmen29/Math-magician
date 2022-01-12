import operate from '../logic/operate';

describe('Operate file tests', () => {
  test('Sum', () => {
    const result = operate(5, 6, '+');
    expect(result).toBe('11');
  });

  test('Subract', () => {
    const result = operate(5, 6, '-');
    expect(result).toBe('-1');
  });

  test('Multiply', () => {
    const result = operate(5, 6, 'x');
    expect(result).toBe('30');
  });

  test('Division', () => {
    const result = operate(6, 3, '÷');
    expect(result).toBe('2');
  });
});
