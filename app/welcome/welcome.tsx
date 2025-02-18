import type { HashlinkMenuItem } from "~/components";
import { PageTemplate } from "~/components";
import { MathChallengeCard } from "./mathChallengeCard";
import { PointsBalanceCard } from "./pointsBalanceCard";
import { WelcomeBanner } from "./welcomeBanner";

export const Welcome = () => {
  const menuItems: HashlinkMenuItem[] = [
    { label: "Check balance", href: "#balance" },
    { label: "Earn points", href: "#earn" },
  ];

  return (
    <PageTemplate navbarProps={{ menuItems }}>
      <WelcomeBanner />
      <div className="divider my-16 w-[80%] self-auto">{"Let's begin!"}</div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full px-4">
        <PointsBalanceCard />
        <MathChallengeCard />
      </div>
    </PageTemplate>
  );
};
