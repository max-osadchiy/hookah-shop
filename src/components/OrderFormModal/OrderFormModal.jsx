import React, { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import PhoneInput from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';
import 'react-responsive-modal/styles.css';
import './OrderFormModal.scss';
import { useStore } from '../../store/storeHOC';
import { observer } from 'mobx-react';

const OrderFormModal = ({ openForm, setOpenForm, setOpen }) => {
  const {mainStore} = useStore();
  const [inputs, setInputs] = useState({
    name: '',
    surname: '',
    email: '',
    phoneNum: '',
    city: '',
    index: '',
    numPostOffice: ''
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(prevState => ({
        ...prevState,
        [name]: value,
    }));
  };
  useEffect(() => {
    if (mainStore.isSaved) {
      setOpenForm(false);
      setOpen(true);
    }
  }, [mainStore.isSaved])
  const sendForm = () => {
    mainStore.onChangeInput(
      inputs.name,
      inputs.surname,
      inputs.email,
      inputs.phoneNum,
      inputs.city,
      inputs.index,
      inputs.numPostOffice,
    );
    mainStore.orderItems();
  }
  return (
    <Modal open={openForm} onClose={() => setOpenForm(false)} center>
    <div className="modal-form-bask" style={{ justifyContent: 'center' }}>
      <h2>Оформление</h2>
      <div>
        <label>
          <p>Имя</p>
          <input name="name" value={inputs.name} onChange={handleChange} type="text" required/>
        </label>
        <label>
          <p>Фамилия</p>
          <input name="surname" value={inputs.surname} onChange={handleChange} type="text" required/>
        </label>
        <label>
          <p>Почта</p>
          <input name="email" value={inputs.email} onChange={handleChange} type="email" required/>
        </label>
        <label>
          <p>Номер телефона</p>
          <input
            name="phoneNum"
            type="number"
            value={inputs.phoneNum}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <p>Город</p>
          <input name="city" value={inputs.city} onChange={handleChange} type="text" required/>
        </label>
        <label>
          <p>Индекс</p>
          <input name="index" value={inputs.index} onChange={handleChange} type="number" required/>
        </label>
        <label>
          <p>Номер почты</p>
          <input name="numPostOffice" value={inputs.numPostOffice} onChange={handleChange} type="number" required/>
        </label>
        <button disabled={inputs.name === '' ||
      inputs.surname === '' ||
      inputs.email === '' ||
      inputs.phoneNum === '' ||
      inputs.city === '' ||
      inputs.index === '' ||
      inputs.numPostOffice === ''} onClick={() => sendForm()}>Заказать</button>
      </div>
    </div>
  </Modal>
  );
}

export default observer(OrderFormModal);
