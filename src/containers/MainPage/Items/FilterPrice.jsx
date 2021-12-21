import { observer } from "mobx-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../store/storeHOC";

const FilterPrice = () => {
  const { mainStore } = useStore();
  const { t } = useTranslation();

  const filters = [
    {
      title: t("filters.maxToMin"),
      action: () =>
        mainStore.sortItems === t("filters.maxToMin")
          ? mainStore.changeSortItems("")
          : mainStore.changeSortItems(t("filters.maxToMin")),
    },
    {
      title: t("filters.minToMax"),
      action: () =>
        mainStore.sortItems === t("filters.minToMax")
          ? mainStore.changeSortItems("")
          : mainStore.changeSortItems(t("filters.minToMax")),
    },
  ];

  return (
    <div className="filter">
      <h3>{t("filters.title")}</h3>
      {filters.map((filter, id) => (
        <div key={id}>
          <div onClick={filter.action} className="filter-item">
            <p
              className={
                mainStore.sortItems === filter.title ? "text-focus" : ""
              }
            >
              {filter.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default observer(FilterPrice);
