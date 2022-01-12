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

  test('Division', () => {
    obj = calculate(obj, '4');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '2');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('2');
  });

  test('Division by Zero', () => {
    obj = calculate(obj, '4');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '0');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('Can\'t divide by 0.');
  });

  test('Module', () => {
    obj = calculate(obj, '4');
    obj = calculate(obj, '%');
    obj = calculate(obj, '2');
    obj = calculate(obj, '=');
    expect(obj.total).toBe('0');
  });

  test('Reset', () => {
    obj = calculate(obj, '4');
    obj = calculate(obj, '%');
    obj = calculate(obj, '2');
    obj = calculate(obj, 'AC');
    expect(obj.total).toBe(null);
  });
});
