export const PointsProductCardHeader = ({
  product,
}: {
  product: PointsProduct;
}) => (
  <div className="flex items-center">
    <figure className="lg:block hidden mr-4">
      <img
        alt=""
        src={product.reward.image_url}
        className="border-4 rounded-full border-solid border-primary bg-base-content"
      />
    </figure>
    <div>
      <p className="text-2xl">Redeem a</p>
      <p className="text-3xl text-primary text-bold">{product.reward.name}!</p>
      <p className="text-sm text-accent italic">
        {product.exchange_description}
      </p>
    </div>
  </div>
);
