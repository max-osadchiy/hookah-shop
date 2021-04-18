import { observer } from 'mobx-react';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Filter from '../../../components/Filter/Filter';
import { BasketContext } from '../../../contexts/BasketContext';
// import { items } from '../../../static/Content';
import { useStore, withStore } from '../../../store/storeHOC';
import './Items.scss';

const Items = () => {
  const {mainStore} = useStore();
  // const sendToBasket = useContext(BasketContext);
  const [validIDState, setValidIDState] = useState();
  const [filter, setFilter] = useState('Все');
  const [basketBtn, setBasketBtn] = useState('В корзину');

  useEffect(() => {
    mainStore.getInfoItems();
  }, [mainStore]);
  const AllFilter = () => {
    if(filter === 'Все') {
      return mainStore.items;
    } else {
      console.log(filter);
      return mainStore.items.filter(t => t.productType === filter);
    }
  }
  const sendBtn = (id, validId) => {
    setValidIDState(validId);
    mainStore.setBasketItems(id);
    setBasketBtn('Добавлено');
    setInterval(() => {
      setBasketBtn('В корзину');
    }, 3000);
  }
  const isMobile = window.innerWidth < 787;
  return (
    <div className="items">
      <Filter filter={filter} setFilter={setFilter} />
      <div className={AllFilter().length ? "items-block" : ''} style={{ width: AllFilter().length ? '' : `${isMobile ? '100%' : '80%'}` }}>
        {!AllFilter().length && <p style={{ textAlign: 'center' }}>Нет товара</p>}
        {AllFilter().map((item, id) => (
          <div key={id} className="item-block">
            <Link to={`/item/${item.id}`}>
              <div style={{ height: '15rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={`data:image/jpeg;base64,${item.image}`} alt="img"/>
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>₴{item.price.toFixed(2)}</p>
              </div>
            </Link>
            <button onClick={() => sendBtn(item.id, id)}>{validIDState === id ? basketBtn : 'В корзину'}</button>
          </div>
          )
        )}
      </div>
    </div>
  );
};

export default observer(Items);
