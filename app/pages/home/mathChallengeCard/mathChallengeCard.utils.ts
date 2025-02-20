import { AvailableMathOperations } from "./mathChallengeForm";

export const getRandomInteger = () => {
  return Math.floor(Math.random() * 100);
};

export const MATH_OPERATION_TO_SYMBOL = {
  [AvailableMathOperations.Add]: "+",
  [AvailableMathOperations.Multiply]: "x",
};
