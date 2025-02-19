import { useEffect, useState } from "react";
import { useSmileUI } from "../useSmileUI";

export const usePointsProducts = (): PointsProduct[] | undefined => {
  const smileUIInstance = useSmileUI();
  const [pointsProducts, setPointsProducts] = useState<
    PointsProduct[] | undefined
  >();

  useEffect(() => {
    if (pointsProducts) return;

    if (smileUIInstance) {
      void globalThis.window.Smile?.fetchAllPointsProducts().then(
        (allPointsProducts) => {
          setPointsProducts(allPointsProducts);
        }
      );
    }
  }, [smileUIInstance, pointsProducts]);

  return pointsProducts;
};
