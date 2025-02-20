import { useAtom } from "jotai";
import { useEffect } from "react";
import { useSmileUI } from "../useSmileUI";
import { CustomerAtom } from "./customerAtom";
import { useReloadCustomer } from "./useReloadCustomer";

export const useCustomer = (): Customer | undefined => {
  const smileUIInstance = useSmileUI();
  const { isFetchingCustomer } = useReloadCustomer();
  const [customer, setCustomer] = useAtom(CustomerAtom);

  useEffect(() => {
    if (customer) return;

    if (smileUIInstance) {
      void smileUIInstance.customerReady().then((customer) => {
        setCustomer(customer);
      });
    }
  }, [smileUIInstance, customer, setCustomer]);

  if (isFetchingCustomer) return;

  return customer;
};
