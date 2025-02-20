import { atom } from "jotai";
import type { ModalSettings } from "../modal.types";

export const modalAtom = atom<ModalSettings>({
  content: undefined,
  actions: undefined,
});
