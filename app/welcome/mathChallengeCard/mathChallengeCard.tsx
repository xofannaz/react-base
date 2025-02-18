import { useState } from "react";
import { GiftIllustration } from "~/assets";
import {
  getRandomInteger,
  MATH_OPERATION_TO_SYMBOL,
} from "./mathChallengeCard.utils";
import {
  AvailableMathOperations,
  MathChallengeForm,
} from "./mathChallengeForm";

export interface MathChallengeCardProps {
  operation?: AvailableMathOperations;
}

export const MathChallengeCard = ({
  operation = AvailableMathOperations.Add,
}: MathChallengeCardProps) => {
  const [leftOperationMember, setLeftOperationMember] = useState(
    getRandomInteger()
  );
  const [rightOperationMember, setRightOperationMember] = useState(
    getRandomInteger()
  );

  const resetOperation = () => {
    setLeftOperationMember(getRandomInteger());
    setRightOperationMember(getRandomInteger());
  };

  const onSubmitGuess = (hasAnsweredCorrectly: boolean) => {
    if (hasAnsweredCorrectly) {
      // TODO: give feedback
    } else {
      // TODO: give negative feedback
    }

    resetOperation();
  };

  return (
    <div
      id="earn"
      className="card lg:card-side bg-base-300 text-base-content shadow-xl"
    >
      <figure>
        <img
          alt=""
          src={GiftIllustration}
          className="h-full min-w-[300px] bg-base-content"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title lg:text-left text-center text-4xl">
          Challenge time!
        </h2>
        <p className="text-base-content">
          Answer the math question to receive 50 points
        </p>
        <p className="text-6xl text-primary lg:text-left text-center">
          {`${String(leftOperationMember)} ${
            MATH_OPERATION_TO_SYMBOL[operation]
          } ${String(rightOperationMember)} = ?`}
        </p>
        <MathChallengeForm
          onSubmit={onSubmitGuess}
          leftTerm={leftOperationMember}
          rightTerm={rightOperationMember}
          operation={operation}
        />
      </div>
    </div>
  );
};
