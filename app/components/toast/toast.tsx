import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { ToastTypes } from "./toast.types";
import { toastAtom } from "./toastAtom";

export const Toast = () => {
  const [toastSettings, setToastSettings] = useAtom(toastAtom);
  const { content, type } = toastSettings;
  const ToastIcon = {
    [ToastTypes.Info]: InformationCircleIcon,
    [ToastTypes.Success]: CheckCircleIcon,
    [ToastTypes.Warning]: ExclamationCircleIcon,
    [ToastTypes.Error]: XCircleIcon,
  }[type ?? ToastTypes.Info];
  const toastStyles = {
    [ToastTypes.Info]: {
      alert: "alert-info",
      text: "text-info-content",
    },
    [ToastTypes.Success]: {
      alert: "alert-success",
      text: "alert-success-content",
    },
    [ToastTypes.Error]: {
      alert: "alert-error",
      text: "alert-error-content",
    },
    [ToastTypes.Warning]: {
      alert: "alert-warning",
      text: "alert-warning-content",
    },
  }[type ?? ToastTypes.Info];

  useEffect(() => {
    if (!toastSettings.content) return;

    const timeoutId = setTimeout(() => {
      setToastSettings({});
    }, 8000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [toastSettings, setToastSettings]);

  if (!content) return <></>;

  return (
    <div className="toast toast-top toast-end min-w-[300px] position-fixed z-10">
      <div className={`alert ${toastStyles.alert}`}>
        <div className={toastStyles.text}>
          <div className="flex items-center mb-2">
            <ToastIcon stroke="currentColor" className="h-6 w-6 mr-2" />
            <h1 className="text-xl font-bold">{content.title}</h1>
          </div>
          <p>{content.body}</p>
        </div>
      </div>
    </div>
  );
};
