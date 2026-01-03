import styles from './Modal.module.scss';
import type { ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = (props: Props) => {
  const { isOpen = false, onClose, children } = props;

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(event) => event.stopPropagation()}
      >
        <button className={styles.modalClose} type="button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
