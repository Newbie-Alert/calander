export const singleDigitFillZero = (value: number) => {
  return String(value).padStart(2, "0");
};
