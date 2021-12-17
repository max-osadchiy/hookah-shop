import { observer } from 'mobx-react';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import back_img from '../../static/img/back.svg';
import { useStore } from '../../store/storeHOC';
import './ItemPage.scss';
import ReactImageZoom from 'react-image-zoom';
import { items } from '../../static/Content';

const ItemPage = () => {
  const {mainStore} = useStore();

  useEffect(() => {
    mainStore.getInfoItems();
  }, [mainStore])

  const [basketBtn, setBasketBtn] = useState('В корзину');
  const { id } = useParams();
  const item = items.find(i => i.id === +id);

  // For back-end version
  // const item = mainStore.items.find(i => i.id === +id);

  const history = useHistory();

  const sendBtn = (id) => {
    mainStore.setBasketItems(id);
    setBasketBtn('Добавлено');
    setTimeout(() => {
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
          <div className="item-img" style={{height: 250, justifyContent: 'center', alignItems: 'center'}}>
            <ReactImageZoom zoomWidth={500} img={item.image} />
            {/* For back-end version */}
            {/* <ReactImageZoom width={400} height={250} zoomWidth={500} img={`data:image/jpeg;base64,${item.image}`} /> */} 
          </div>
          <div>
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <button onClick={() => sendBtn(item.id)}>{basketBtn}</button>
            <p>{item.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default observer(ItemPage);
