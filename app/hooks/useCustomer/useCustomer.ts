import { useEffect, useState } from "react";
import { useSmileUI } from "../useSmileUI";

export const useCustomer = (): Customer | undefined => {
  const smileUIInstance = useSmileUI();
  const [customer, setCustomer] = useState<Customer | undefined>(
    globalThis.window.SmileUI?.smile?.customer
  );

  useEffect(() => {
    if (customer) return;

    if (smileUIInstance) {
      void smileUIInstance.customerReady().then((customer) => {
        setCustomer(customer);
      });
    }
  }, [smileUIInstance, customer]);

  return customer;
};
