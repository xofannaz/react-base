import { useCustomer } from "~/hooks/useCustomer";

const Emphasis = ({ text }: { text: string }) => (
  <span className="text-primary text-4xl font-bold mx-2">{text}</span>
);

export const FixedPointsProductData = ({
  product,
}: {
  product: PointsProduct;
}) => {
  const customer = useCustomer();
  const isRedeemable =
    Number(customer?.points_balance) >= Number(product.points_price);

  if (!customer) {
    return <></>;
  }
  return (
    <>
      <p className="text-lg mb-2">
        This product costs
        <Emphasis text={String(product.points_price)} />
        to be redeemed
      </p>
      {product.reward.description ? (
        <p className="text-xs text-warning">{product.reward.description}</p>
      ) : (
        <></>
      )}
      <button disabled={!isRedeemable} className="btn btn-primary btn-sm mt-8">
        Redeem reward
      </button>
    </>
  );
};
