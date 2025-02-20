import axios, { type AxiosResponse } from "axios";
import {
  CustomerRewardsEndpointPaths,
  type AuthenticateRawResponse,
  type IssuePointsParams,
  type IssuePointsPayload,
  type IssuePointsRawResponse,
  type PurchasePointsProductParams,
  type PurchasePointsProductPayload,
  type PurchasePointsProductRawResponse,
} from "./customerRewards.types";

const CustomerRewardsInstance = axios.create({
  baseURL: String(import.meta.env.VITE_CUSTOMER_REWARDS_SERVICE_BASE_URL),
  timeout: 5000,
});

export const authenticate = async (): Promise<string> =>
  await CustomerRewardsInstance.post<AuthenticateRawResponse>(
    CustomerRewardsEndpointPaths.Authenticate
  ).then(({ data }) => data.token);

export const purchasePointsProduct = async ({
  id,
  price,
  amount = 1,
}: PurchasePointsProductParams): Promise<RewardFulfillment> => {
  const pointsToSpend = price * amount;

  return await CustomerRewardsInstance.post<
    PurchasePointsProductRawResponse,
    AxiosResponse<PurchasePointsProductRawResponse>,
    PurchasePointsProductPayload
  >(CustomerRewardsEndpointPaths.PurchasePointsProduct, {
    points_to_spend: pointsToSpend,
    product_id: id,
  }).then(({ data }) => data.points_purchase.fulfilled_reward);
};

export const issuePoints = async ({
  pointsChange,
  description,
  internalNote,
}: IssuePointsParams): Promise<void> => {
  await CustomerRewardsInstance.post<
    IssuePointsRawResponse,
    AxiosResponse<IssuePointsRawResponse>,
    IssuePointsPayload
  >(CustomerRewardsEndpointPaths.IssuePoints, {
    points_change: pointsChange,
    internal_note: internalNote,
    description,
  });
};
