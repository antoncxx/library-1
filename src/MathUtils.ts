export class MathUtils {
  public static clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
  }

  public static lerp(from: number, to: number, coeff: number): number {
    return from * (1 - coeff) + to * coeff;
  }

  public static randomInt(min: number, max: number): number {
    const value = Math.random() * (max - min) + min;
    return Math.trunc(value);
  }
}
