import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useStore } from '../../store/storeHOC';
import './ThanksModal.scss';

const ThanksModal = ({ open, setOpen }) => {
  const {mainStore} = useStore();

  const onSubmit = () => {
    setOpen(false);
    mainStore.isSavedClose();
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)} center>
      <div className="modal-thanks-bask">
        <h2>Спасибо!</h2>
        <p>Ожидайте одобрение заказа на почте</p>
        <button onClick={onSubmit}>Закрыть</button>
      </div>
    </Modal>
  )
};

export default ThanksModal;
