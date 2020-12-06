import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { BasketContext } from '../../contexts/BasketContext';
import { items } from '../../static/Content';
import back_img from '../../static/img/back.svg';
import './ItemPage.scss';

const ItemPage = () => {
  const { id } = useParams();
  const item = items.find(i => i.id === +id);

  const history = useHistory();

  const sendToBasket = useContext(BasketContext);

  return (
    <div className="item-page">
      <div onClick={() => history.goBack()} className="back-block">
        <img src={back_img} alt="back"/>
        <h4>Назад</h4>
      </div>
      <div>
        <div>
          <img src={item.img} alt="img"/>
        </div>
        <div>
          <h2>{item.title}</h2>
          <h3>{item.cost}</h3>
          <button onClick={() => sendToBasket.setItems(item.id)}>В корзину</button>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
