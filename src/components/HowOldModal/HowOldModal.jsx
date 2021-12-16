import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useStore } from '../../store/storeHOC';
import './HowOldModal.scss';

const HowOldModal = ({ open, setOpen }) => {
  const onSubmit = () => {
    setOpen(false);
    localStorage.setItem('checkOld', 'Approve');
  };

  return (
    <Modal open={open} onClose={() => {}} closeOnEsc={false} center showCloseIcon={false}>
      <div className="modal-thanks-bask">
        <h2>Вы являетесь совершеннолетним (старше 18 лет) и курите либо используете другие никотиносодержащие продукты?</h2>
        <p>Мы обо всем позаботимся. Этот веб-сайт содержит информацию о продуктах без табачного дыма, предназначенных для совершеннолетних, которые так или иначе продолжили бы курить или использовать другие никотиносодержащие продукты в Украине. Бездымные продукты PMI не являются альтернативой отказу от курения и не разработаны как такие, которые способствуют его прекращению.</p>
        <button onClick={onSubmit}>Мне больше 18</button>
      </div>
    </Modal>
  )
};

export default HowOldModal;
