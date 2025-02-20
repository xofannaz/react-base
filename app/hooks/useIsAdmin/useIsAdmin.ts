import { useSearchParams } from "react-router";

export const useIsAdmin = () => {
  const [searchParams] = useSearchParams();

  return searchParams.get("admin") === "true";
};
