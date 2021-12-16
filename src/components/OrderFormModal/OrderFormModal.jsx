import React, { useState, useEffect, useCallback } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-phone-number-input/style.css';
import 'react-responsive-modal/styles.css';
import './OrderFormModal.scss';
import { useStore } from '../../store/storeHOC';
import { observer } from 'mobx-react';

const OrderFormModal = ({ openForm, setOpenForm, setOpen }) => {
  const {mainStore} = useStore();
  const { 
    customerFirstname,
    customerLastname,
    customerEmail,
    customerIndex,
    customerPhone,
    customerPostOffice,
    customerCity 
  } = mainStore.customerInfo;

  useEffect(() => {
    if (mainStore.isSaved) {
      setOpenForm(false);
      setOpen(true);
    }
  }, [mainStore.isSaved])

  const disableList = [customerFirstname, customerLastname, customerEmail, customerIndex, customerPhone, customerPostOffice, customerCity]

  return (
    <Modal open={openForm} onClose={() => setOpenForm(false)} center>
    <div className="modal-form-bask" style={{ justifyContent: 'center' }}>
      <h2>Оформление</h2>
      <div>
        <label>
          <p>Имя</p>
          <input name="name" value={customerFirstname} onChange={e => mainStore.onChangeInput('customerFirstname', e.target.value)} type="text" required/>
        </label>
        <label>
          <p>Фамилия</p>
          <input name="surname" value={customerLastname} onChange={e => mainStore.onChangeInput('customerLastname', e.target.value)} type="text" required/>
        </label>
        <label>
          <p>Почта</p>
          <input name="email" value={customerEmail} onChange={e => mainStore.onChangeInput('customerEmail', e.target.value)} type="email" required/>
        </label>
        <label>
          <p>Номер телефона</p>
          <input
            name="phoneNum"
            type="number"
            value={customerPhone}
            onChange={e => mainStore.onChangeInput('customerPhone', e.target.value)}
            required
          />
        </label>
        <label>
          <p>Город</p>
          <input name="city" value={customerCity} onChange={e => mainStore.onChangeInput('customerCity', e.target.value)} type="text" required/>
        </label>
        <label>
          <p>Индекс</p>
          <input name="index" value={customerIndex} onChange={e => mainStore.onChangeInput('customerIndex', e.target.value)} type="number" required/>
        </label>
        <label>
          <p>Номер почты</p>
          <input name="numPostOffice" value={customerPostOffice} onChange={e => mainStore.onChangeInput('customerPostOffice', e.target.value)} type="number" required/>
        </label>
        <button disabled={disableList.includes("")} onClick={() => mainStore.orderItems()}>Заказать</button>
      </div>
    </div>
  </Modal>
  );
}

export default observer(OrderFormModal);
