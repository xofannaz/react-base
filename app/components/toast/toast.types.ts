import type { ReactNode } from "react";

export enum ToastTypes {
  Info = "INFO",
  Success = "SUCCESS",
  Warning = "WARNING",
  Error = "ERROR",
}

export interface ToastSettings {
  content?: { title?: ReactNode; body: ReactNode };
  type?: ToastTypes;
}
