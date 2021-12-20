import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useStore } from '../../store/storeHOC';
import './ThanksModal.scss';

const ThanksModal = ({ open, setOpen }) => {
  const {mainStore} = useStore();
  return (
    <Modal open={open} onClose={() => setOpen(false)} center>
      <div className="modal-thanks-bask">
        <h2>Спасибо!</h2>
        <p>Ожидайте одобрение заказа на почте</p>
        <button onClick={() => {
          setOpen(false);
          mainStore.isSavedClose();
          }
        }>Закрыть</button>
      </div>
    </Modal>
  )
};

export default ThanksModal;
