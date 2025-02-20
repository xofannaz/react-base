import { useState } from "react";
import { ToastTypes } from "~/components/toast";
import { useCloseModal, useSetToastSettings } from "~/hooks";
import { issuePoints } from "~/services";

export interface ManualPointsIssuingModalProps {
  currentBalance: number;
  onSuccess?: () => void;
  onFailure?: () => void;
}

export const ManualPointsIssuingModal = ({
  currentBalance,
  onSuccess,
  onFailure,
}: ManualPointsIssuingModalProps) => {
  const closeModal = useCloseModal();
  const [hasError, setHasError] = useState(false);
  const [pointsChange, setPointsChange] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const setToastSettings = useSetToastSettings();

  const onSubmitPointChanges = () => {
    setIsLoading(true);

    void issuePoints({ pointsChange: Number(pointsChange) })
      .then(() => {
        onSuccess?.();
        setToastSettings({
          content: {
            title: "Success!",
            body: "The customer balance was updated",
          },
          type: ToastTypes.Success,
        });
      })
      .catch(() => {
        onFailure?.();
        setToastSettings({
          content: {
            title: "Something went wrong...",
            body: "The customer balance could not be updated",
          },
          type: ToastTypes.Error,
        });
      })
      .finally(() => {
        setIsLoading(false);
        closeModal();
      });
  };

  const onChangePointsDiff = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newPointsChange } = event.target;

    if (newPointsChange !== "-" && isNaN(Number(newPointsChange))) {
      setPointsChange("");
      return;
    }

    setPointsChange(newPointsChange);

    if (
      Number(newPointsChange) === 0 ||
      currentBalance + Number(newPointsChange) < 0 ||
      isNaN(Number(newPointsChange))
    ) {
      setHasError(true);
    } else if (hasError) {
      setHasError(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Manual points issuing</h1>
      <p className="mb-4">
        Enter the amount of points that will be added or subtracted from the
        current balance
      </p>

      <form className="form-control">
        <label htmlFor="points-issuing" className="label">
          <span className="label label-text-alt">
            {"Use '-' to indicate a negative value"}
          </span>
        </label>
        <div className="flex items-center">
          <input
            id="points-issuing"
            type="text"
            maxLength={20}
            placeholder="points to change"
            className={`input input-bordered w-full mr-4 ${
              hasError ? "input-error" : ""
            }`}
            onChange={onChangePointsDiff}
            value={pointsChange}
          />
          <button
            disabled={hasError || !pointsChange || isLoading}
            onClick={onSubmitPointChanges}
            className="btn btn-primary "
          >
            {isLoading ? (
              <span className="loading loading-dots loading-md" />
            ) : (
              "Go!"
            )}
          </button>
        </div>
        <div className="label">
          {hasError ? (
            <span className="label-text-alt text-error">
              The final balance must change and remain positive!
            </span>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};
