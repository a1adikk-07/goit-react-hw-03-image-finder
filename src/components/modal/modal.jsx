import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    document.removeEventListener('keydown', this.closeModal);
  }
  closeModal = ({ currentTarget, target, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };
  render() {
    const { closeModal } = this;
    const { children } = this.props;
    return createPortal(
      <div onClick={closeModal}>
        <div>{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
