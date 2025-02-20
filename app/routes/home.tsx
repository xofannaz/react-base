import { HomePage } from "../pages";
import type { Route } from "./+types/home";

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Customer rewards platform" },
    {
      name: "description",
      content: "Use your points to redeem rewards and more!",
    },
  ];
}

export default function Home() {
  return <HomePage />;
}
