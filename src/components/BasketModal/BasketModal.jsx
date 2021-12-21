import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./BasketModal.scss";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { useStore } from "../../store/storeHOC";

const BasketModal = ({ open, setOpen, setOpenForm }) => {
  const { mainStore } = useStore();
  const { t } = useTranslation();

  const makeOrder = () => {
    setOpen(false);
    setOpenForm(true);
  };

  const removeItem = item => {
    const index = mainStore.basket_items.indexOf(item);
    if (index > -1) {
      mainStore.basket_items.splice(index, 1);
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)} center>
      <div className="modal-bask">
        <h2>{t("basket.title")}</h2>
        <div
          className="modal-bask-container"
          style={{
            justifyContent: !mainStore.basket_items.length ? "center" : null,
          }}
        >
          {mainStore.basket_items.length ? (
            mainStore.basket_items.map(item => (
              <div key={item.id} className="basket-item">
                <img src={item.image} alt="item" />
                {/* With rest api */}
                {/* <img src={`data:image/jpeg;base64,${item.image}`} alt="item"/> */}
                <div>
                  <h3>{item.title}</h3>
                  <h4>{item.price}</h4>
                  <button type="submit" onClick={() => removeItem(item)}>
                    {t("delete")}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-text">{t("basket.empty")}</p>
          )}
        </div>
        {!!mainStore.basket_items.length && (
          <button type="submit" onClick={makeOrder}>
            {t("basket.makeOrder")}
          </button>
        )}
      </div>
    </Modal>
  );
};

export default observer(BasketModal);
