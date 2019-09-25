import { sum, subtract } from './calc';

describe('calculator', () => {
  test('sum of 1 + 2', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
  test('subtract 3 - 2', () => {
    const result = subtract(3, 2);
    expect(result).toEqual(1);
  });
  test('sum of 2 + three string', () => {
    const result = sum(2, '3');
    expect(result).toEqual(5);
  });
  test('sum of 2 + null', () => {
    const action = () => sum(2, null);
    expect(action).toThrow("Sum values can't be null or undefined");
  });
  test('sum of empty', () => {
    const action = () => sum();
    expect(action).toThrow("Sum values can't be null or undefined");
  });
  test('sum with comma', () => {
    const action = sum(0.1, 0.4);
    expect(action).toBeCloseTo(0.5);
  });
});
