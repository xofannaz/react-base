import { useEffect, useState } from "react";

// TODO: Get customer token from API
const CUSTOMER_TOKEN = String(import.meta.env.VITE_CUSTOMER_TOKEN);
const PUBLIC_CHANNEL_KEY = String(import.meta.env.VITE_PUBLIC_CHANNEL_KEY);

const initializeSmileUI = () => {
  void globalThis.window.SmileUI?.init({
    channel_key: PUBLIC_CHANNEL_KEY,
    customer_identity_jwt: CUSTOMER_TOKEN,
  });
};

export const useSmileUI = (): SmileUI | undefined => {
  const [smileUIInstance, setSmileUIInstance] = useState<SmileUI | undefined>();
  const [isSmileInstanceInitialized, setIsSmileInstanceInitialized] = useState(
    Boolean(globalThis.window.SmileUI?.channel_key)
  );

  useEffect(() => {
    if (isSmileInstanceInitialized) return;

    const onSmileUIInstanceLoad = () => {
      initializeSmileUI();

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
  }, [smileUIInstance, isSmileInstanceInitialized]);

  return smileUIInstance;
};
