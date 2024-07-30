export class NumberUtils {
  public static readonly EPSILON: number = 1e-10;

  public static isZero(value: number) {
    return Math.abs(value) <= NumberUtils.EPSILON;
  }
}
