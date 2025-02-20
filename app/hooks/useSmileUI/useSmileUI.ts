import { useEffect, useState } from "react";
import { useAuthentication } from "../useAuthentication";

const PUBLIC_CHANNEL_KEY = String(import.meta.env.VITE_PUBLIC_CHANNEL_KEY);

const initializeSmileUI = (authToken: string) => {
  void globalThis.window.SmileUI?.init({
    channel_key: PUBLIC_CHANNEL_KEY,
    customer_identity_jwt: authToken,
  });
};

export const useSmileUI = (): SmileUI | undefined => {
  const [smileUIInstance, setSmileUIInstance] = useState<SmileUI | undefined>();
  const [isSmileInstanceInitialized, setIsSmileInstanceInitialized] = useState(
    Boolean(globalThis.window.SmileUI?.channel_key)
  );

  const authToken = useAuthentication(isSmileInstanceInitialized);

  useEffect(() => {
    if (isSmileInstanceInitialized || !authToken) return;

    const onSmileUIInstanceLoad = () => {
      initializeSmileUI(authToken);

      void globalThis.window.SmileUI?.ready().then((instance) => {
        setSmileUIInstance(instance);
        setIsSmileInstanceInitialized(true);
      });
    };

    if (globalThis.window.SmileUI) {
      onSmileUIInstanceLoad();
    } else {
      document.addEventListener("smile-ui-loaded", onSmileUIInstanceLoad, {
        once: true,
      });
    }

    return () => {
      document.removeEventListener("smile-ui-loaded", onSmileUIInstanceLoad);
    };
  }, [smileUIInstance, isSmileInstanceInitialized, authToken]);

  return smileUIInstance;
};
