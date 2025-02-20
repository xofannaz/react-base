import { useAtom } from "jotai";
import { useEffect } from "react";
import { useAuthentication } from "../useAuthentication";
import { SmileUIAtom } from "./smileUIAtom";

const PUBLIC_CHANNEL_KEY = String(import.meta.env.VITE_PUBLIC_CHANNEL_KEY);

const initializeSmileUI = (authToken: string) => {
  void globalThis.window.SmileUI?.init({
    channel_key: PUBLIC_CHANNEL_KEY,
    customer_identity_jwt: authToken,
  });
};

export const useSmileUI = (): SmileUI | undefined => {
  const [smileUIInstance, setSmileUIInstance] = useAtom(SmileUIAtom);
  const authToken = useAuthentication(Boolean(smileUIInstance));

  useEffect(() => {
    if (!authToken || smileUIInstance) {
      return;
    }

    const onSmileUIInstanceLoad = () => {
      initializeSmileUI(authToken);

      void globalThis.window.SmileUI?.ready().then((instance) => {
        setSmileUIInstance(instance);
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
  }, [authToken, smileUIInstance, setSmileUIInstance]);

  return smileUIInstance;
};
