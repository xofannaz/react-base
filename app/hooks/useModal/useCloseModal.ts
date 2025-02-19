import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { modalAtom } from "../../components/modal/modalAtom";

export const useCloseModal = () => {
  const setModalSettings = useSetAtom(modalAtom);

  return useCallback(() => {
    setModalSettings({ content: undefined, actions: undefined });
  }, [setModalSettings]);
};
