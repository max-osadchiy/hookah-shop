import { observer } from "mobx-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { filters, items } from "../../static/Content";
import { useStore } from "../../store/storeHOC";
import "./Filter.scss";

const Filter = ({ filter, setFilter }) => {
  const [open, setOpen] = useState(0);
  const { t } = useTranslation();

  const onChangeFilter = (id, title) => {
    setOpen(id);
    setFilter(t(`categories.${title}`));
  };

  return (
    <div className="filter">
      <h3>{t("categories.title")}</h3>
      {filters.map((filter, index) => (
        <div key={index}>
          <div
            onClick={() => onChangeFilter(index, filter.title)}
            className="filter-item"
          >
            <p className={open === index ? "text-focus" : ""}>
              {t(`categories.${filter.title}`)}
            </p>
            <p className={open === index ? "text-focus" : ""}>
              {filter.title === "All"
                ? items.length
                : items.filter(item => item.productType === filter.title)
                    .length}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
