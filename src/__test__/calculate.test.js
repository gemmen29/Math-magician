import calculate from '../logic/calculate';

let obj = { total: null, next: null, operation: null };

beforeEach(() => {
  obj = { total: null, next: null, operation: null };
});

describe('Calculate file tests', () => {
  test('Sum', () => {
    obj = calculate(obj, '5');
    obj = calculate(obj, '+');
    obj = calculate(obj, '6');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('11');
  });

  test('Subtract', () => {
    obj = calculate(obj, '5');
    obj = calculate(obj, '-');
    obj = calculate(obj, '6');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('-1');
  });

  test('Multiply', () => {
    obj = calculate(obj, '5');
    obj = calculate(obj, 'x');
    obj = calculate(obj, '6');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('30');
  });
});
