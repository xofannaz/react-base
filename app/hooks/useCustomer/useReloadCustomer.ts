import { useAtom, useSetAtom } from "jotai";
import { useCallback } from "react";
import { ToastTypes } from "~/components/toast";
import { useSmileUI } from "../useSmileUI";
import { useSetToastSettings } from "../useToast";
import { CustomerAtom, IsFetchingCustomerAtom } from "./customerAtom";

export interface UseReloadCustomerReturnValue {
  isFetchingCustomer: boolean;
  reloadCustomer: () => void;
}

export const useReloadCustomer = (): UseReloadCustomerReturnValue => {
  const smileUIInstance = useSmileUI();
  const setToastSettings = useSetToastSettings();
  const setCustomer = useSetAtom(CustomerAtom);
  const [isFetchingCustomer, setIsFetchingCustomer] = useAtom(
    IsFetchingCustomerAtom
  );

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
  }, [smileUIInstance, setCustomer, setToastSettings, setIsFetchingCustomer]);

  return {
    isFetchingCustomer,
    reloadCustomer,
  };
};
