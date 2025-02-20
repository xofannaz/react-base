import type { HashlinkMenuItem } from "~/components";
import { Modal, PageTemplate, Toast } from "~/components";
import { MathChallengeCard } from "./mathChallengeCard";
import { PointsBalanceCard } from "./pointsBalanceCard";
import { PointsProductsCard } from "./pointsProductsCard";
import { WelcomeBanner } from "./welcomeBanner";

export const HomePage = () => {
  const menuItems: HashlinkMenuItem[] = [
    { label: "Check balance", href: "#balance" },
    { label: "Earn points", href: "#earn" },
    { label: "Redeem rewards", href: "#products" },
  ];

  return (
    <PageTemplate navbarProps={{ menuItems }}>
      <Modal />
      <Toast />
      <WelcomeBanner />
      <div className="divider my-16 w-[80%] self-auto">{"Let's begin!"}</div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full px-4">
        <PointsBalanceCard />
        <MathChallengeCard />
        <div className="lg:col-span-2 col-span-1">
          <PointsProductsCard />
        </div>
      </div>
    </PageTemplate>
  );
};
