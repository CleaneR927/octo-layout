import React, { useEffect } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import '../styles/modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [onClose]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;
  return (
    <div className="modal--overlay" onClick={handleOverlayClick}>
      <div className={`modal ${isOpen ? 'modal--open' : ''}`}>
        <IoIosCloseCircle onClick={onClose} className="modal__close-button">
          Close
        </IoIosCloseCircle>
        {children}
      </div>
    </div>
  );
};

export default Modal;
