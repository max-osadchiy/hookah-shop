import React from 'react';
import Filter from '../../components/Filter/Filter';
import { items } from '../../static/Content';
import './Items.scss';

const Items = () => (
  <div className="items">
    <Filter />
    <div className="items-block">
      {items.map((item, id) => (
        <div key={id} className="item-block">
          <div>
            <img src={item.img} alt="img"/>
          </div>
          <div>
            <h4>{item.title}</h4>
            <p>{item.cost}</p>
            <button>В корзину</button>
          </div>
        </div>
        )
      )}
    </div>
  </div>
);

export default Items;
