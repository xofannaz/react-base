export enum AvailableMathOperations {
  Add = "ADD",
  Multiply = "MULTIPLY",
}

export interface MathChallengeFormProps {
  leftTerm: number;
  rightTerm: number;
  operation: AvailableMathOperations;
  onChange?: (guess: number) => void;
  onSubmit?: (hasAnsweredCorrectly: boolean) => void;
}
