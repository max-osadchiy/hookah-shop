import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import back_img from "../../static/img/back.svg";
import { useStore } from "../../store/storeHOC";
import "./ItemPage.scss";
import ReactImageZoom from "react-image-zoom";
import { items } from "../../static/Content";
import { useTranslation } from "react-i18next";

const ItemPage = () => {
  const { mainStore } = useStore();
  const { t } = useTranslation();

  useEffect(() => {
    mainStore.getInfoItems();
  }, [mainStore]);

  const [basketBtn, setBasketBtn] = useState(t("buttons.inBasket"));
  const { id } = useParams();
  const item = items.find(i => i.id === +id);

  // For back-end version
  // const item = mainStore.items.find(i => i.id === +id);

  const history = useHistory();

  const sendBtn = id => {
    mainStore.setBasketItems(id);
    setBasketBtn(t("buttons.added"));
    setTimeout(() => {
      setBasketBtn(t("buttons.inBasket"));
    }, 3000);
  };

  const goBack = () => (
    <div onClick={() => history.goBack()} className="back-block">
      <img src={back_img} alt="back" />
      <h4>{t("buttons.back")}</h4>
    </div>
  );

  return (
    <div className="item-page">
      {goBack()}
      {item && (
        <div>
          <div
            className="item-img"
            style={{
              alignItems: "center",
              height: 250,
              justifyContent: "center",
            }}
          >
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
};

export default observer(ItemPage);
