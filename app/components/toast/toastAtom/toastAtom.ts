import { atom } from "jotai";
import { type ToastSettings } from "../toast.types";

export const toastAtom = atom<ToastSettings>({});
