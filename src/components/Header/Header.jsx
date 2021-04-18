import React, { useState, useContext, useEffect } from 'react';
import logo_img from '../../static/img/Logo.svg';
import basket_img from '../../static/img/basket.svg';
import { BasketContext } from '../../contexts/BasketContext';
import './Header.scss';
import BasketModal from '../BasketModal/BasketModal';
import OrderFormModal from '../OrderFormModal/OrderFormModal';
import ThanksModal from '../ThanksModal/ThanksModal';
import { useStore } from '../../store/storeHOC';
import { observer } from 'mobx-react';

const Header = () => {
  const {mainStore} = useStore();
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openThanks, setOpenThanks] = useState(false);
  return (
    <>
      <div className="header">
        <img src={logo_img} alt="img"/>
        <div>
          <h3>{mainStore.inputs.number}</h3>
          <div onClick={() => setOpen(true)}>
            <img src={basket_img} alt=""/>
            {mainStore.basket_items ? <span>{mainStore.basket_items.length}</span> : <span>0</span>}
          </div>
        </div>
      </div>
      <BasketModal open={open} setOpen={setOpen} setOpenForm={setOpenForm} />
      <OrderFormModal openForm={openForm} setOpenForm={setOpenForm} setOpen={setOpenThanks} />
      <ThanksModal open={openThanks} setOpen={setOpenThanks} />
    </>
  );
};

export default observer(Header);