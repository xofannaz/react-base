import { useEffect, useState } from "react";
import { TabList, type TabListProps } from "~/components";
import { usePointsProducts } from "~/hooks/usePointsProducts";
import { CardContent } from "./cardContent";

export const PointsProductsCard = () => {
  const pointsProducts = usePointsProducts();
  const [tabs, setTabs] = useState<TabListProps["tabs"]>([]);

  useEffect(() => {
    if (!pointsProducts) return;

    const choosenDefaultTabIndex = Math.floor(pointsProducts.length / 2);

    const formattedTabs: TabListProps["tabs"] = pointsProducts.map(
      (pointsProduct, index) => ({
        id: pointsProduct.id,
        name: "points-product",
        label: pointsProduct.reward.name,
        isDefaultChecked: index === choosenDefaultTabIndex,
        children: <CardContent product={pointsProduct} />,
      })
    );

    setTabs(formattedTabs);
  }, [pointsProducts]);

  return (
    <div id="products" className="col-span-2">
      <h1 className="text-4xl font-bold my-8">Redeem for rewards</h1>
      {!pointsProducts ? (
        <div className="skeleton h-80" />
      ) : (
        <TabList tabs={tabs} />
      )}
    </div>
  );
};
