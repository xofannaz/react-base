import { useEffect, useState } from "react";
import { GiftCardIllustration } from "~/assets";
import { TabList, type TabListProps } from "~/components";
import { usePointsProducts } from "~/hooks/usePointsProducts";
import { FixedPointsProductData } from "./fixedPointsProductData";
import { PointsProductCardHeader } from "./pointsProductCardHeader";
import { VariablePointsProductData } from "./variablePointsProductData";

const Content = ({ product }: { product: PointsProduct }) => (
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

export const PointsProductsCard = () => {
  const pointsProducts = usePointsProducts();
  const [tabs, setTabs] = useState<TabListProps["tabs"]>([]);

  console.log({ pointsProducts });

  useEffect(() => {
    if (!pointsProducts) return;

    const choosenDefaultTabIndex = Math.floor(pointsProducts.length / 2);

    const formattedTabs: TabListProps["tabs"] = pointsProducts.map(
      (pointsProduct, index) => ({
        id: pointsProduct.id,
        name: "points-product",
        label: pointsProduct.reward.name,
        isDefaultChecked: index === choosenDefaultTabIndex,
        children: <Content product={pointsProduct} />,
      })
    );

    setTabs(formattedTabs);
  }, [pointsProducts]);

  return (
    <div className="col-span-2">
      <h1 className="text-4xl font-bold my-8">Redeem for rewards</h1>
      {!pointsProducts ? (
        <div className="skeleton h-80" />
      ) : (
        <TabList tabs={tabs} />
      )}
    </div>
  );
};
