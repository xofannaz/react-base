declare type SmileUILoadedEventId = "smile-ui-loaded";
declare type SmileUIDeepLink =
  | "home"
  | "points_activity_rules"
  | "points_products"
  | "referral_program_details";

declare global {
  interface Customer {
    id: number;
    points_balance: number;
    referral_url: string;
    state: "member" | "candidate" | "enabled";
    created_at: string;
    updated_at: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    date_of_birth?: string;
  }

  interface ActivityAttributes {
    token: string;
  }

  interface Reward {
    id: string;
    name: string;
    image_url: string;
    created_at: string;
    updated_at: string;
    description?: string;
  }

  interface RewardFulfillment {
    id: number;
    name: string;
    code: string;
    image_url: string;
    updated_at: string;
    created_at: string;
    usage_instructions: string;
    used_at?: string;
  }

  interface PointsProduct {
    id: number;
    exchange_type: "fixed" | "variable";
    exchange_description: string;
    reward: Reward;
    created_at: string;
    updated_at: string;
    points_price?: number;
    variable_points_step?: number;
    variable_points_step_reward_value?: string;
    variable_points_min?: number;
    variable_points_max?: number;
  }

  interface PointsTransaction {
    id: number;
    customer_id: number;
    points_change: number;
    created_at: string;
    updated_at: string;
    internal_note?: string;
    description?: string;
  }

  interface PointsPurchase {
    id: number;
    points_product_id: number;
    points_spent: number;
    fulfilled_reward: RewardFulfillment;
    reward_fulfillment: RewardFulfillment;
    created_at: string;
    updated_at: string;
  }

  interface Smile {
    customer: Customer;
    ready: () => Promise<Smile>;
    customerReady: () => Promise<Customer>;
    createActivity: (activityAttributes: ActivityAttributes) => Promise<void>;
    fetchPointsProduct: (pointsProductId: number) => Promise<PointsProduct>;
    fetchAllPointsProducts: () => Promise<PointsProduct[]>;
    purchasePointsProduct: (pointsProductId: number) => Promise<PointsPurchase>;
    fetchCustomer: (options?: { include: string }) => Promise<Customer>;
    init: ({
      channel_key,
      customer_identity_jwt,
    }: {
      channel_key: string;
      customer_identity_jwt: string;
    }) => Promise<void>;
  }

  interface SmileUI {
    closePanel: () => void;
    openPanel: (options?: { deep_link: SmileUIDeepLink }) => void;
    customerReady: () => Promise<Customer>;
    ready: () => Promise<SmileUI>;
    init: ({
      channel_key,
      customer_identity_jwt,
    }: {
      channel_key: string;
      customer_identity_jwt: string;
    }) => Promise<void>;
    channel_key?: string;
    smile?: Smile;
  }

  interface Window {
    SmileUI?: SmileUI;
    Smile?: Smile;
  }
}

export {};
