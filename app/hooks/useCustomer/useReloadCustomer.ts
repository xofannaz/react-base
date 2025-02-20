import { useSetAtom } from "jotai";
import { useCallback, useState } from "react";
import { ToastTypes } from "~/components/toast";
import { useSmileUI } from "../useSmileUI";
import { useSetToastSettings } from "../useToast";
import { CustomerAtom } from "./customerAtom";

export interface UseReloadCustomerReturnValue {
  isFetchingCustomer: boolean;
  reloadCustomer: () => void;
}

export const useReloadCustomer = (): UseReloadCustomerReturnValue => {
  const [isFetchingCustomer, setIsFetchingCustomer] = useState(false);
  const setCustomer = useSetAtom(CustomerAtom);
  const smileUIInstance = useSmileUI();
  const setToastSettings = useSetToastSettings();

  const reloadCustomer = useCallback(() => {
    setIsFetchingCustomer(true);
    void smileUIInstance?.smile
      ?.fetchCustomer()
      .then((customer) => {
        setCustomer(customer);
      })
      .catch(() => {
        setToastSettings({
          content: {
            title: "Something went wrong...",
            body: "The customer data could not be updated",
          },
          type: ToastTypes.Error,
        });
      })
      .finally(() => {
        setIsFetchingCustomer(false);
      });
  }, [smileUIInstance, setCustomer, setToastSettings]);

  return {
    isFetchingCustomer,
    reloadCustomer,
  };
};
