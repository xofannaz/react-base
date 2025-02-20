import { BrandLoyallityIllustration } from "~/assets";

export const WelcomeBanner = () => (
  <div className="flex justify-center w-full">
    <div className="w-[80%] flex justify-center items-center flex-col lg:flex-row">
      <img
        src={BrandLoyallityIllustration}
        className="lg:max-w-xs max-w-sm bg-secondary-content bg-opacity-40 mask mask-hexagon"
        alt=""
      />
      <div className="px-8 lg:w-[50%] text-center lg:text-left">
        <h1 className="lg:text-4xl text-2xl font-bold">
          Welcome to your rewards platform!
        </h1>
        <p className="py-6">
          Here you can check your points balance and, if you want, exchange them
          for rewards. Also, be sure to complete the available challenges to
          earn even more!
        </p>
      </div>
    </div>
  </div>
);
