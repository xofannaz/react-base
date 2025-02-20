export enum CustomerRewardsEndpointPaths {
  PurchasePointsProduct = "/purchase_points_product",
  Authenticate = "/authenticate",
  IssuePoints = "/issue_points",
}

export interface AuthenticateRawResponse {
  token: string;
}

export interface IssuePointsParams {
  pointsChange: number;
  description?: string;
  internalNote?: string;
}

export interface IssuePointsPayload {
  points_change: number;
  internal_note?: string;
  description?: string;
}

export interface IssuePointsRawResponse {
  points_transaction: PointsTransaction;
}

export interface PurchasePointsProductParams {
  id: number;
  price: number;
  amount?: number;
}

export interface PurchasePointsProductRawResponse {
  points_purchase: PointsPurchase;
}

export interface PurchasePointsProductPayload {
  product_id: number;
  points_to_spend: number;
}
