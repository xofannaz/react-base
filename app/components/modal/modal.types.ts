import type { ReactNode } from "react";

export interface ModalAction {
  label: string;
  callback: () => void;
}

export interface ModalSettings {
  content: ReactNode;
  actions?: { primary: ModalAction; secondary?: ModalAction };
}
