import { MathUtils } from '../MathUtils';

describe('MathUtils', () => {
  test('clamp should return the value if within range', () => {
    expect(MathUtils.clamp(5, 1, 10)).toBe(5);
  });

  test('clamp should return the min if the value is less than the min', () => {
    expect(MathUtils.clamp(0, 1, 10)).toBe(1);
  });

  test('clamp should return the max if the value is greater than the max', () => {
    expect(MathUtils.clamp(15, 1, 10)).toBe(10);
  });

  test('lerp should return the start value if coeff is 0', () => {
    expect(MathUtils.lerp(1, 10, 0)).toBe(1);
  });

  test('lerp should return the end value if coeff is 1', () => {
    expect(MathUtils.lerp(1, 10, 1)).toBe(10);
  });

  test('lerp should return the interpolated value', () => {
    expect(MathUtils.lerp(1, 10, 0.5)).toBe(5.5);
  });
});
