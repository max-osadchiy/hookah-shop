import { observer } from "mobx-react";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "../../../components/Filter/Filter";
import {
  sortItems,
  sortItemsHight,
  sortItemsSmaller,
} from "../../../components/sortItems";
import { items } from '../../../static/Content';
import { useStore, withStore } from "../../../store/storeHOC";
import FilterPrice from "./FilterPrice";
import "./Items.scss";

const Items = () => {
  const { mainStore } = useStore();
  const [validIDState, setValidIDState] = useState();
  const [filter, setFilter] = useState("Все");
  const [basketBtn, setBasketBtn] = useState("В корзину");

  const sortItems = (array, name) => {
    if (mainStore.sortItems === "От большой к меньшей цене") {
      return sortItemsSmaller(array.slice(), name);
    } else if (mainStore.sortItems === "От меньшей к большой цене") {
      return sortItemsHight(array.slice(), name);
    } else {
      return array;
    }
  };

  useEffect(() => {
    mainStore.getInfoItems();
  }, [mainStore]);
  const allFilter =
    filter === "Все"
      ? sortItems(items, "price")
      : sortItems(
          items.filter(t => t.productType === filter),
          "price"
        );
  
  const sendBtn = (id, validId) => {
    setValidIDState(validId);
    mainStore.setBasketItems(id);
    setBasketBtn("Добавлено");
    setInterval(() => {
      setBasketBtn("В корзину");
    }, 3000);
  };
  const isMobile = window.innerWidth < 787;
  return (
    <div className="items">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Filter filter={filter} setFilter={setFilter} />
        <FilterPrice />
      </div>
      <div
        className={allFilter.length ? "items-block" : ""}
        style={{
          width: allFilter.length ? "" : `${isMobile ? "100%" : "80%"}`,
        }}
      >
        {!allFilter.length && (
          <p style={{ textAlign: "center" }}>Нет товара</p>
        )}
        {allFilter.map((item, id) => (
          <div key={id} className="item-block">
            <Link to={`/item/${item.id}`}>
              <div
                style={{
                  height: "15rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <img src={`data:image/jpeg;base64,${item.image}`} alt="img" /> */}
                <img src={item.image} alt="img" />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.price}</p>
                {/* <p>₴{item.price.toFixed(2)}</p> */}
              </div>
            </Link>
            <button onClick={() => sendBtn(item.id, id)}>
              {validIDState === id ? basketBtn : "В корзину"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(Items);
