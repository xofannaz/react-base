import { useEffect, useState } from "react";
import { useSmileUI } from "../useSmileUI";

export const useCustomer = (): Customer | undefined => {
  const smileUIInstance = useSmileUI();
  const [customer, setCustomer] = useState<Customer | undefined>();

  useEffect(() => {
    if (smileUIInstance) {
      void smileUIInstance.customerReady().then((customer) => {
        setCustomer(customer);
      });
    }
  }, [smileUIInstance]);

  return customer;
};
