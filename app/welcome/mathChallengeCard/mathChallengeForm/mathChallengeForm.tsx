import { useState } from "react";
import { type MathChallengeFormProps } from "./mathChallengeForm.types";
import { performMathOperation } from "./mathChallengeForm.utils";

export const MathChallengeForm = ({
  leftTerm,
  rightTerm,
  operation,
  onChange,
  onSubmit,
}: MathChallengeFormProps) => {
  const [guess, setGuess] = useState<number>(NaN);
  const [hasFailed, setHasFailed] = useState(false);
  const expectedAnswer = performMathOperation(leftTerm, rightTerm, operation);

  const onChangeGuess = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: guessedNumber } = event.target;

    if (guessedNumber === "") {
      setGuess(NaN);
    } else {
      setGuess(Number(guessedNumber));
    }

    onChange?.(Number(guessedNumber));
  };

  const onSubmitGuess = () => {
    const isCorrectAnswer = !isNaN(guess) && guess === expectedAnswer;

    if (isCorrectAnswer) {
      setHasFailed(false);
    } else {
      setHasFailed(true);
    }

    setGuess(NaN);
    onSubmit?.(isCorrectAnswer);
  };

  return (
    <>
      <form className="form-control">
        <label htmlFor="math-challenge" className="label">
          <span className="label label-text-alt">
            Your guess must be equal or greater than 0
          </span>
        </label>
        <input
          id="math-challenge"
          type="text"
          placeholder="Result"
          maxLength={5}
          pattern="^[0-9]*$"
          className={`input input-bordered w-full max-w-xs ${
            hasFailed ? "input-error" : ""
          }`}
          onChange={onChangeGuess}
          value={guess || ""}
        />
        <div className="label">
          {hasFailed ? (
            <span className="label-text-alt text-error">Invalid answer!</span>
          ) : (
            <span className="label-text-alt">
              Too difficult? Try reloading the screen!
            </span>
          )}
        </div>
      </form>
      <div className="flex justify-end">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isNaN(Number(guess))}
          onClick={onSubmitGuess}
        >
          Submit Guess
        </button>
      </div>
    </>
  );
};
