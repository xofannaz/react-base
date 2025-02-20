import { useState } from "react";
import { useReloadCustomer } from "~/hooks";
import { issuePoints } from "~/services";
import { type MathChallengeFormProps } from "./mathChallengeForm.types";
import { performMathOperation } from "./mathChallengeForm.utils";

const MATH_CHALLENGE_BONUS_POINTS = 50;

export const MathChallengeForm = ({
  leftTerm,
  rightTerm,
  operation,
  onChange,
  onSubmit,
}: MathChallengeFormProps) => {
  const [guess, setGuess] = useState("");
  const [hasFailed, setHasFailed] = useState(false);
  const { reloadCustomer } = useReloadCustomer();
  const expectedAnswer = performMathOperation(leftTerm, rightTerm, operation);

  const onChangeGuess = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: guessedNumber } = event.target;

    setGuess(guessedNumber);
    onChange?.(Number(guessedNumber));
  };

  const onSubmitGuess = () => {
    const isCorrectAnswer = Number(guess) === expectedAnswer;

    if (isCorrectAnswer) {
      setHasFailed(false);
      void issuePoints({ pointsChange: MATH_CHALLENGE_BONUS_POINTS }).then(
        reloadCustomer
      );
    } else {
      setHasFailed(true);
    }

    setGuess("");
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
          className={`input input-bordered w-full max-w-xs ${
            hasFailed ? "input-error" : ""
          }`}
          onChange={onChangeGuess}
          value={!isNaN(Number(guess)) ? guess : ""}
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
          className="btn btn-primary"
          disabled={!guess}
          onClick={onSubmitGuess}
        >
          Submit Guess
        </button>
      </div>
    </>
  );
};
