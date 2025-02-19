import { TextEmphasis } from "~/components";
import { useCloseModal, useCustomer, useSetModalSettings } from "~/hooks";

export const FixedPointsProductData = ({
  product,
}: {
  product: PointsProduct;
}) => {
  const customer = useCustomer();
  const closeModal = useCloseModal();
  const setModalSettings = useSetModalSettings();

  const isRedeemable =
    Number(customer?.points_balance) >= Number(product.points_price);

  const onRewardRedeeming = () => {
    setModalSettings({
      content: "Are you sure you want spend these points?",
      actions: {
        primary: { label: "Yes, I do", callback: closeModal },
        secondary: { label: "I'll think again", callback: closeModal },
      },
    });
  };

  if (!customer) {
    return <></>;
  }
  return (
    <>
      <p className="text-lg mb-2">
        This product costs
        <TextEmphasis text={String(product.points_price)} />
        to be redeemed
      </p>
      {product.reward.description ? (
        <p className="text-xs text-warning">{product.reward.description}</p>
      ) : (
        <></>
      )}
      <div className="mt-8">
        <div
          className="tooltip hover:tooltip-open tooltip-right"
          data-tip="You don't have enough points!"
        >
          <button
            onClick={onRewardRedeeming}
            disabled={!isRedeemable}
            className="btn btn-primary btn-sm"
          >
            Redeem reward
          </button>
        </div>
      </div>
    </>
  );
};
