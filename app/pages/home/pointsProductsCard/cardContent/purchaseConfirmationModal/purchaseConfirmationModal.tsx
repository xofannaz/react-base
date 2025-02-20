import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ToastTypes } from "~/components/toast";
import {
  useCloseModal,
  useCopyToClipboard,
  useReloadCustomer,
  useSetToastSettings,
} from "~/hooks";
import { purchasePointsProduct } from "~/services";

enum PurchaseStep {
  PreConfirmation = "PRE-CONFIRMATION",
  PostConfirmation = "POST-CONFIRMATION",
}

export const PurchaseConfirmationModal = ({
  product,
}: {
  product: PointsProduct;
}) => {
  const closeModal = useCloseModal();
  const setToastSettings = useSetToastSettings();
  const copyToClipboard = useCopyToClipboard();
  const { reloadCustomer } = useReloadCustomer();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(PurchaseStep.PreConfirmation);
  const [rewardFulfillment, setRewardFulfillment] = useState<
    RewardFulfillment | undefined
  >(undefined);

  const handlePurchase = () => {
    setIsLoading(true);

    void purchasePointsProduct({
      id: product.id,
      price: Number(product.points_price ?? product.variable_points_step),
    })
      .then((reward) => {
        reloadCustomer();
        setStep(PurchaseStep.PostConfirmation);
        setRewardFulfillment(reward);
      })
      .catch(() => {
        closeModal();
        setToastSettings({
          content: {
            title: "Something went wrong...",
            body: "We couldn't process your purchase. Please try again later",
          },
          type: ToastTypes.Error,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (step === PurchaseStep.PreConfirmation) {
    return (
      <div className="w-full">
        <h1 className="text-xl text-primary font-bold mb-4">Almost there!</h1>
        <p className="mb-8">{`Are you sure you want to redeem ${
          product.reward.name
        } for ${String(
          product.points_price ?? product.variable_points_step
        )} points?`}</p>

        <div className="flex grow justify-end">
          <button
            onClick={closeModal}
            className="btn btn-primary btn-outline mr-4"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            onClick={handlePurchase}
            disabled={isLoading}
            className="btn btn-primary"
          >
            {isLoading ? (
              <span className="loading loading-dots loading-md" />
            ) : (
              "Redeem"
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center">
        <figure>
          <img
            alt=""
            src={rewardFulfillment?.image_url}
            className="border-4 rounded-full border-solid border-primary bg-base-content mr-8"
          />
        </figure>
        <div>
          <h1 className="text-2xl text-primary font-bold">Congratulations!</h1>
          <p className="text-lg text-primary">{`You got a ${String(
            rewardFulfillment?.name
          )}!`}</p>
          <p className="text-sm text-center">
            {rewardFulfillment?.usage_instructions}
          </p>
        </div>
      </div>

      <button
        className="btn btn-accent btn-block my-10"
        onClick={() => {
          void copyToClipboard(String(rewardFulfillment?.code));
        }}
      >
        <div className="w-full flex justify-between items-center">
          <p>Copy the coupon code {rewardFulfillment?.code}</p>
          <ClipboardDocumentIcon stroke="currentColor" className="h-6 w-6" />
        </div>
      </button>

      <div className="flex grow justify-end">
        <button
          onClick={() => {
            closeModal();
            setStep(PurchaseStep.PreConfirmation);
          }}
          className="btn btn-sm btn-primary"
        >
          Close
        </button>
      </div>
    </div>
  );
};
