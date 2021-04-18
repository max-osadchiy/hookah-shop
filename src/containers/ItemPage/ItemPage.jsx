import { observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import back_img from '../../static/img/back.svg';
import { useStore } from '../../store/storeHOC';
import './ItemPage.scss';

const ItemPage = () => {
  const {mainStore} = useStore();
  useEffect(() => {
    mainStore.getInfoItems();
  }, [mainStore])
  const [basketBtn, setBasketBtn] = useState('В корзину');
  const { id } = useParams();
  const item = mainStore.items.find(i => i.id === +id);

  const history = useHistory();

  const sendBtn = (id) => {
    mainStore.setBasketItems(id);
    setBasketBtn('Добавлено');
    setInterval(() => {
      setBasketBtn('В корзину');
    }, 3000);
  }

  return (
    <div className="item-page">
      <div onClick={() => history.goBack()} className="back-block">
        <img src={back_img} alt="back"/>
        <h4>Назад</h4>
      </div>
      {item && (
        <div>
          <div>
            <img src={`data:image/jpeg;base64,${item.image}`} alt="img"/>
          </div>
          <div>
            <h2>{item.title}</h2>
            <h3>₴{item.price.toFixed(2)}</h3>
            <button onClick={() => sendBtn(item.id)}>{basketBtn}</button>
            <p>{item.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default observer(ItemPage);
