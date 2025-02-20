import { AvailableMathOperations } from "./mathChallengeForm.types";

export const performMathOperation = (
  leftTerm: number,
  rightTerm: number,
  operation: AvailableMathOperations
) =>
  ({
    [AvailableMathOperations.Add]: leftTerm + rightTerm,
    [AvailableMathOperations.Multiply]: leftTerm * rightTerm,
  }[operation]);
