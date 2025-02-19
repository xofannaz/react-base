import { GiftCardIllustration } from "~/assets";
import { FixedPointsProductData } from "./fixedPointsProductData";
import { PointsProductCardHeader } from "./pointsProductCardHeader";
import { VariablePointsProductData } from "./variablePointsProductData";

export const CardContent = ({ product }: { product: PointsProduct }) => (
  <div className="flex w-full">
    <div className="w-full p-10">
      <PointsProductCardHeader product={product} />
      <div className="pl-28 pt-8 pb-4">
        {product.exchange_type === "variable" ? (
          <VariablePointsProductData product={product} />
        ) : (
          <FixedPointsProductData product={product} />
        )}
      </div>
    </div>
    <figure className="hidden self-center lg:block h-full lg:min-w-[300px]">
      <img alt="" src={GiftCardIllustration} />
    </figure>
  </div>
);
