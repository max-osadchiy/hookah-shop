import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './HowOldModal.scss';

const HowOldModal = ({ open, setOpen }) => {
  const { t } = useTranslation();
  const onSubmit = () => {
    setOpen(false);
    localStorage.setItem('checkOld', 'Approve');
  };

  return (
    <Modal open={open} onClose={() => {}} closeOnEsc={false} center showCloseIcon={false}>
      <div className="modal-thanks-bask">
        <h2>{t('howOld.title')}</h2>
        <p>{t('howOld.description')}</p>
        <button onClick={onSubmit}>{t('buttons.old')}</button>
      </div>
    </Modal>
  )
};

export default HowOldModal;
