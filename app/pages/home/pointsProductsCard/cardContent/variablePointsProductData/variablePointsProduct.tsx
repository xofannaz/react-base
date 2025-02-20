import { TextEmphasis } from "~/components";
import { useCustomer, useSetModalSettings } from "~/hooks";
import { PurchaseConfirmationModal } from "../purchaseConfirmationModal";

export const VariablePointsProductData = ({
  product,
}: {
  product: PointsProduct;
}) => {
  const customer = useCustomer();
  const setModalSettings = useSetModalSettings();

  const isRedeemable =
    Number(customer?.points_balance) >= Number(product.variable_points_step);

  // TODO: let user choose the amount
  const onRewardRedeeming = () => {
    setModalSettings({
      content: <PurchaseConfirmationModal product={product} />,
    });
  };

  if (!customer) {
    return <></>;
  }

  return (
    <div>
      <p className="text-xl">
        For each
        <TextEmphasis text={String(product.variable_points_step)} />
        points exchanged you redeem
        <TextEmphasis
          text={String(product.variable_points_step_reward_value)}
        />
      </p>
      {product.variable_points_min ? (
        <p className="text-md mt-4">
          You need at least
          <TextEmphasis text={String(product.variable_points_min)} />
          points
        </p>
      ) : (
        <></>
      )}
      {product.variable_points_max ? (
        <p className="text-md">
          Up to
          <TextEmphasis text={String(product.variable_points_min)} />
          points can be exchanged for this reward
        </p>
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
    </div>
  );
};
