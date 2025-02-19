import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { modalAtom } from "./modalAtom";

export const Modal = () => {
  const modalSettings = useAtomValue(modalAtom);
  const { content, actions } = modalSettings;

  useEffect(() => {
    if (modalSettings.content) {
      (
        document.getElementById("global-modal-instance") as HTMLDialogElement
      ).showModal();
    } else {
      (
        document.getElementById("global-modal-instance") as HTMLDialogElement
      ).close();
    }
  }, [modalSettings]);

  return (
    <dialog
      id="global-modal-instance"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        {content}
        <div className="modal-action">
          {actions?.secondary ? (
            <button
              onClick={actions.secondary.callback}
              className="btn btn-outline btn-primary"
            >
              {actions.secondary.label}
            </button>
          ) : (
            <></>
          )}
          {actions?.primary ? (
            <button
              onClick={actions.primary.callback}
              className="btn btn-primary"
            >
              {actions.primary.label}
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </dialog>
  );
};
