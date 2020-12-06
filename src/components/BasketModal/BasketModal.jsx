import React, { useContext } from 'react';
import { Modal } from 'react-responsive-modal';
import { BasketContext } from '../../contexts/BasketContext';
import { items } from '../../static/Content';
import 'react-responsive-modal/styles.css';
import './BasketModal.scss';

const BasketModal = ({ open, setOpen }) => {
  const getItemsContext = useContext(BasketContext);
  const getItems = JSON.parse(getItemsContext.items);
  let basket = [];
  basket = items.filter(i => i.id === +getItems);
  console.log(basket);
  console.log(JSON.parse(getItemsContext.items));
  const isMobile = window.innerWidth < 787;
  return (
    <Modal open={open} onClose={() => setOpen(false)} center>
      <div className="modal-bask">
        <h2>Корзина</h2>
        {basket.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="item"/>
            <div>
              <h3>{item.title}</h3>
              <h4>{item.cost}</h4>
              {!isMobile ? <p>{item.description}</p> : null}
            </div>
          </div>
        ))}
        <button>Оформить заказ</button>
      </div>
    </Modal>
  )
};

export default BasketModal;
