import React, { useContext, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { items } from '../../static/Content';
import 'react-responsive-modal/styles.css';
import './BasketModal.scss';
import { useStore } from '../../store/storeHOC';
import { observer } from 'mobx-react';

const BasketModal = ({ open, setOpen, setOpenForm }) => {
  const {mainStore} = useStore();
  const [deleteItem, setDeleteItem] = useState(false);
  const basket = items.filter(({ id }) => mainStore.basket_items.includes(id));
  // const basket = mainStore.items.filter(({ id }) => mainStore.basket_items.includes(id));
  console.log(basket);

  const isMobile = window.innerWidth < 787;

  const MakeOrder = () => {
    setOpen(false);
    setOpenForm(true);
  };

  console.log('gfgfd', basket);

  const removeItem = (id) => {
    const index = mainStore.basket_items.indexOf(id);
    if (index > -1) {
      mainStore.basket_items.splice(index, 1);
    }
  }

  const onDelete = (id) => {
    removeItem(id);
  }

  return (
    <Modal open={open} onClose={() => setOpen(false)} center>
      <div className="modal-bask">
        <h2>Корзина</h2>
        <div className="modal-bask-container" style={{height: '400px'}}>
          {!basket.length ? <p>Пусто</p> : null}
          {basket.map((item) => (
            <div key={item.id} style={{ display: deleteItem === true ? 'none' : '', marginBottom: 50 }}>
              <img src={item.image} alt="item"/>
              {/* <img src={`data:image/jpeg;base64,${item.image}`} alt="item"/> */}
              <div>
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
                {/* <h4>₴{item.price.toFixed(2)}</h4> */}
                {!isMobile ? <p>{item.description.slice(0, 100) + '...'}</p> : null}
                <button onClick={() => onDelete(item.id)}>Удалить</button>
              </div>
            </div>
          ))}
        </div>
        {basket.length ? <button onClick={() => MakeOrder()}>Оформить заказ</button> : null}
      </div>
    </Modal>
  )
};

export default observer(BasketModal);
