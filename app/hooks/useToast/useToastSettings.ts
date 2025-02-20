import { useSetAtom } from "jotai";
import { toastAtom } from "~/components";

export const useSetToastSettings = () => {
  return useSetAtom(toastAtom);
};
