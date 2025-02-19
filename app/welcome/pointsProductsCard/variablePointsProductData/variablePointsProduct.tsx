import { useCustomer } from "~/hooks/useCustomer";

const Emphasis = ({ text }: { text: string }) => (
  <span className="text-primary text-4xl font-bold mx-2">{text}</span>
);

export const VariablePointsProductData = ({
  product,
}: {
  product: PointsProduct;
}) => {
  const customer = useCustomer();
  const isRedeemable =
    Number(customer?.points_balance) >= Number(product.variable_points_step);

  if (!customer) {
    return <></>;
  }

  return (
    <div>
      <p className="text-xl">
        For each
        <Emphasis text={String(product.variable_points_step)} />
        points exchanged you redeem
        <Emphasis text={String(product.variable_points_step_reward_value)} />
      </p>
      {product.variable_points_min ? (
        <p className="text-md mt-4">
          You need at least
          <Emphasis text={String(product.variable_points_min)} />
          points
        </p>
      ) : (
        <></>
      )}
      {product.variable_points_max ? (
        <p className="text-md">
          Up to
          <Emphasis text={String(product.variable_points_min)} />
          points can be exchanged for this reward
        </p>
      ) : (
        <></>
      )}
      <button disabled={!isRedeemable} className="btn btn-primary btn-sm mt-8">
        Redeem reward
      </button>
    </div>
  );
};
