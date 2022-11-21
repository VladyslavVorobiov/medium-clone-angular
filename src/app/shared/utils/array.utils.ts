export function numbersRange(min: number = 1, max: number = 100): Array<number> {
  return new Array(max - min + 1).fill(1).map((_, index) => index + min);
}
