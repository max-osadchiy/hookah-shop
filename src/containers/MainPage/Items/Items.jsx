import { observer } from "mobx-react";
import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Filter from "../../../components/Filter/Filter";
import {
  sortItems,
  sortItemsHight,
  sortItemsSmaller,
} from "../../../mixins/sortItems";
import { items } from "../../../static/Content";
import { useStore, withStore } from "../../../store/storeHOC";
import FilterPrice from "./FilterPrice";
import "./Items.scss";

const Items = () => {
  const { mainStore } = useStore();
  const { t } = useTranslation();
  const [validIDState, setValidIDState] = useState();
  const [filter, setFilter] = useState(t("categories.All"));
  const [basketBtn, setBasketBtn] = useState(t("buttons.inBasket"));

  useEffect(() => {
    mainStore.getInfoItems();
  }, [mainStore]);

  const sortItems = (array, name) => {
    switch (mainStore.sortItems) {
      case t("filters.maxToMin"):
        return sortItemsSmaller(array.slice(), name);
      case t("filters.minToMax"):
        return sortItemsHight(array.slice(), name);
      default:
        return array;
    }
  };

  const sortedItems = sortItems(
    filter === t("categories.All")
      ? items
      : items.filter(item => t(`categories.${item.productType}`) === filter),
    "price"
  );

  const sendBtn = (item, validId) => {
    setValidIDState(validId);
    mainStore.setBasketItems(item);
    setBasketBtn(t("buttons.added"));
    setTimeout(() => {
      setBasketBtn(t("buttons.inBasket"));
    }, 3000);
  };
  const isMobile = window.innerWidth < 787;
  return (
    <div className="items">
      <div>
        <Filter filter={filter} setFilter={setFilter} />
        <FilterPrice />
      </div>
      <div
        className={sortedItems.length ? "items-block" : ""}
        style={{
          width: sortedItems.length ? "" : `${isMobile ? "100%" : "80%"}`,
        }}
      >
        {!sortedItems.length && (
          <p style={{ textAlign: "center" }}>{t("noItems")}</p>
        )}
        {sortedItems.map((item, id) => (
          <div key={id} className="item-block">
            <Link to={`/item/${item.id}`}>
              <div className="image-block">
                {/* With rest api */}
                {/* <img src={`data:image/jpeg;base64,${item.image}`} alt="img" /> */}
                <img src={item.image} alt="img" />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.price}</p>
              </div>
            </Link>
            <button onClick={() => sendBtn(item, id)}>
              {validIDState === id ? basketBtn : t("buttons.inBasket")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(Items);
