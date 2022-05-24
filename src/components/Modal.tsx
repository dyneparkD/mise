import { FC } from "react";
import styles from "../styles/Modal.module.scss";
import { ModalProps } from "../types/type";

const Modal: FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <div
      className={styles.Modal}
      id={isOpen ? styles.show : ""}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </div>
  );
};

export default Modal;
