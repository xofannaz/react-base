import { InvestmentIllustration } from "~/assets";
import { useCustomer } from "~/hooks/useCustomer";

export const PointsBalanceCard = () => {
  const customer = useCustomer();

  if (!customer) {
    return <div className="skeleton h-90" />;
  }

  return (
    <div className="card lg:card-side bg-base-300 text-base-content shadow-xl">
      <figure>
        <img
          alt=""
          src={InvestmentIllustration}
          className="h-full min-w-[300px] bg-base-content"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">Points balance</h2>
        <p className="text-9xl text-primary lg:text-left text-center">
          {customer.points_balance}
          <span className="text-xl">pts.</span>
        </p>
      </div>
    </div>
  );
};
