import { NumberUtils } from '../NumberUtils';

describe('NumberUtils', () => {
  test('EPSILON should be defined and equal to 1e-10', () => {
    expect(NumberUtils.EPSILON).toBe(1e-10);
  });

  test('isZero should return true for values close to zero', () => {
    expect(NumberUtils.isZero(0)).toBe(true);
    expect(NumberUtils.isZero(1e-11)).toBe(true);
    expect(NumberUtils.isZero(-1e-11)).toBe(true);
  });

  test('isZero should return false for values not close to zero', () => {
    expect(NumberUtils.isZero(1e-9)).toBe(false);
    expect(NumberUtils.isZero(-1e-9)).toBe(false);
  });
});
