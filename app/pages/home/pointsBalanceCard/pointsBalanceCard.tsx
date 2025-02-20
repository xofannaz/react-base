import { InvestmentIllustration } from "~/assets";
import {
  useCustomer,
  useIsAdmin,
  useReloadCustomer,
  useSetModalSettings,
} from "~/hooks";
import { ManualPointsIssuingModal } from "./manualPointsIssuingModal/manualPointsIssuingModal";

export const PointsBalanceCard = () => {
  const isAdmin = useIsAdmin();
  const setModalSettings = useSetModalSettings();
  const customer = useCustomer();
  const { reloadCustomer, isFetchingCustomer } = useReloadCustomer();

  const handleManualPointsIssuing = () => {
    setModalSettings({
      content: (
        <ManualPointsIssuingModal
          currentBalance={Number(customer?.points_balance)}
          onSuccess={reloadCustomer}
        />
      ),
    });
  };

  if (!customer || isFetchingCustomer) {
    return <div className="skeleton h-90" />;
  }

  return (
    <div
      id="balance"
      className="card lg:card-side bg-base-300 text-base-content shadow-xl"
    >
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
        <div className="card-action flex justify-end">
          {isAdmin ? (
            <button
              onClick={handleManualPointsIssuing}
              className="btn btn-primary"
            >
              Issue points
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
