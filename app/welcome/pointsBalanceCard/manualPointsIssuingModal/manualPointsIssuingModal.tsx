import { useState } from "react";
import { useCloseModal } from "~/hooks";

export const ManualPointsIssuingModal = ({
  currentBalance,
}: {
  currentBalance: number;
}) => {
  const closeModal = useCloseModal();
  const [hasError, setHasError] = useState(false);
  const [pointsDiff, setPointsDiff] = useState(0);

  const onChangePointsDiff = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newPointsDiff } = event.target;

    if (newPointsDiff === "") {
      setPointsDiff(0);
    } else {
      setPointsDiff(Number(newPointsDiff));
    }

    if (
      currentBalance + Number(newPointsDiff) < 0 ||
      isNaN(Number(newPointsDiff))
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
            type="number"
            placeholder="0"
            className={`input input-bordered w-full mr-4 ${
              hasError ? "input-error" : ""
            }`}
            onChange={onChangePointsDiff}
            value={pointsDiff}
          />
          <button
            disabled={hasError || !pointsDiff}
            onClick={closeModal}
            className="btn btn-primary "
          >
            Go!
          </button>
        </div>
        <div className="label">
          {hasError ? (
            <span className="label-text-alt text-error">
              The final balance must be positive!
            </span>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};
