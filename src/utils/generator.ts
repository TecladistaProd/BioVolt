export function getRandomNumber(
  min: number,
  max: number,
  precision: number = 0
) {
  return parseFloat((Math.random() * (max - min + 1)).toFixed(precision)) + min;
}
