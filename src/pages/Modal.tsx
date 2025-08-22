import React, { ReactNode } from "react";
import "./styles/Modal.css";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <dialog className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          onClick={closeModal}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="modaltext">
          This is a modal dialog. You can put any content here.
        </div>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
