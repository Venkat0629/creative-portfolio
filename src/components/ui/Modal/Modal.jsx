import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ open, onClose, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-wrapper" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={e => e.stopPropagation()}>
        {children}
        <button aria-label="Close modal" style={{ position: 'absolute', top: 12, right: 18 }} onClick={onClose}>×</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
