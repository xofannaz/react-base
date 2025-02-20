import { useEffect, useState } from "react";
import { ToastTypes } from "~/components/toast";
import { authenticate } from "~/services";
import { useSetToastSettings } from "../useToast";

export const useAuthentication = (
  isSmileInstanceInitialized: boolean
): string => {
  const [token, setToken] = useState("");
  const setToastSettings = useSetToastSettings();

  useEffect(() => {
    if (isSmileInstanceInitialized) return;

    const getAuthToken = () => {
      void authenticate()
        .then((authToken) => {
          setToken(authToken);
        })
        .catch(() => {
          setToastSettings({
            content: {
              title: "Something went wrong...",
              body: "You could not be authenticated now. Try again later.",
            },
            type: ToastTypes.Error,
          });
        });
    };

    getAuthToken();
  }, [setToastSettings, isSmileInstanceInitialized]);

  return token;
};
