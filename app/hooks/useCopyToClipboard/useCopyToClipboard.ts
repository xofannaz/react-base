import { useCallback } from "react";
import { ToastTypes } from "~/components/toast";
import { useSetToastSettings } from "../useToast";

export function useCopyToClipboard(): (text: string) => Promise<void> {
  const setToastSettings = useSetToastSettings();
  return useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        setToastSettings({
          content: {
            title: "Success!",
            body: "The content was copied",
          },
          type: ToastTypes.Success,
        });
      } catch {
        setToastSettings({
          content: {
            title: "Something went wrong...",
            body: "The content couldn't copied to the clipboard",
          },
          type: ToastTypes.Error,
        });
      }
    },
    [setToastSettings]
  );
}
