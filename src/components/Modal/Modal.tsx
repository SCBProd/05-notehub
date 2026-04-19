import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import css from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true" onClick={handleBackdrop}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
}