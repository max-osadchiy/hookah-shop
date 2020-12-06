import React, { useState, useContext } from 'react';
import logo_img from '../../static/img/Logo.svg';
import basket_img from '../../static/img/basket.svg';
import { BasketContext } from '../../contexts/BasketContext';
import './Header.scss';
import BasketModal from '../BasketModal/BasketModal';

const Header = () => {
  const [open, setOpen] = useState(false);
  const getItems = useContext(BasketContext);
  let basketNum = [];
  if (getItems.items !== null) {
    basketNum = JSON.parse(getItems.items);
  }
  return (
    <>
      <div className="header">
        <img src={logo_img} alt="img"/>
        <div>
          <h3>+38 (098) 494 62 68</h3>
          <div onClick={() => setOpen(true)}>
            <img src={basket_img} alt=""/>
            {basketNum.length ? <span>{basketNum.length}</span> : null}
          </div>
        </div>
      </div>
      <BasketModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;