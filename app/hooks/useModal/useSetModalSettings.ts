import { useSetAtom } from "jotai";
import { modalAtom } from "~/components";

export const useSetModalSettings = () => {
  return useSetAtom(modalAtom);
};
