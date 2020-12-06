import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import Filter from '../../../components/Filter/Filter';
import { BasketContext } from '../../../contexts/BasketContext';
import { items } from '../../../static/Content';
import './Items.scss';

const Items = () => {
  const sendToBasket = useContext(BasketContext);
  const [filter, setFilter] = useState('Все');
  const AllFilter = () => {
    if(filter === 'Все') {
      return items;
    } else {
      return items.filter(t => t.type === filter);
    }
  }
  const isMobile = window.innerWidth < 787;
  return (
    <div className="items">
      <Filter filter={filter} setFilter={setFilter} />
      <div className={AllFilter().length ? "items-block" : ''} style={{ width: AllFilter().length ? '' : `${isMobile ? '100%' : '80%'}` }}>
        {AllFilter().length ? null : <p style={{ textAlign: 'center' }}>Нет товара</p>}
        {AllFilter().map((item) => (
          <div key={item.id} className="item-block">
            <Link to={`/item/${item.id}`}>
              <div>
                <img src={item.img} alt="img"/>
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.cost}</p>
              </div>
            </Link>
            <button onClick={() => sendToBasket.setItems(item.id)}>В корзину</button>
          </div>
          )
        )}
      </div>
    </div>
  );
};

export default Items;
