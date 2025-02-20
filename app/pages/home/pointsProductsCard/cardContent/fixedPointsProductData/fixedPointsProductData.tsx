import { TextEmphasis } from "~/components";
import { useCustomer, useSetModalSettings } from "~/hooks";
import { PurchaseConfirmationModal } from "../purchaseConfirmationModal";

export const FixedPointsProductData = ({
  product,
}: {
  product: PointsProduct;
}) => {
  const customer = useCustomer();
  const setModalSettings = useSetModalSettings();

  const isRedeemable =
    Number(customer?.points_balance) >= Number(product.points_price);

  const onRewardRedeeming = () => {
    setModalSettings({
      content: <PurchaseConfirmationModal product={product} />,
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
          className={`${!isRedeemable ? "tooltip" : ""} tooltip-right`}
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
