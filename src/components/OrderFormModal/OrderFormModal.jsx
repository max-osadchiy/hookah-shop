import React, { useState, useEffect, useCallback } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./OrderFormModal.scss";
import { useStore } from "../../store/storeHOC";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

const OrderFormModal = ({ openForm, setOpenForm, setOpen }) => {
  const { mainStore } = useStore();
  const { t } = useTranslation();

  const {
    customerFirstname,
    customerLastname,
    customerEmail,
    customerIndex,
    customerPhone,
    customerPostOffice,
    customerCity,
  } = mainStore.customerInfo;

  useEffect(() => {
    if (mainStore.isSaved) {
      setOpenForm(false);
      setOpen(true);
    }
  }, [mainStore.isSaved]);

  const disableList = [
    customerFirstname,
    customerLastname,
    customerEmail,
    customerIndex,
    customerPhone,
    customerPostOffice,
    customerCity,
  ];

  const arrayInputs = [
    {
      name: "firstName",
      label: t("orderForm.firstName"),
      value: customerFirstname,
      type: "text",
      onChange: e =>
        mainStore.onChangeInput("customerFirstname", e.target.value),
    },
    {
      name: "lastName",
      label: t("orderForm.lastName"),
      value: customerLastname,
      type: "text",
      onChange: e =>
        mainStore.onChangeInput("customerLastname", e.target.value),
    },
    {
      name: "email",
      label: t("orderForm.email"),
      value: customerEmail,
      type: "email",
      onChange: e => mainStore.onChangeInput("customerEmail", e.target.value),
    },
    {
      name: "phone",
      label: t("orderForm.phone"),
      value: customerPhone,
      type: "number",
      onChange: e => mainStore.onChangeInput("customerPhone", e.target.value),
    },
    {
      name: "city",
      label: t("orderForm.city"),
      value: customerCity,
      type: "text",
      onChange: e => mainStore.onChangeInput("customerCity", e.target.value),
    },
    {
      name: "index",
      label: t("orderForm.index"),
      value: customerIndex,
      type: "number",
      onChange: e => mainStore.onChangeInput("customerIndex", e.target.value),
    },
    {
      name: "postOffice",
      label: t("orderForm.postOffice"),
      value: customerPostOffice,
      type: "text",
      onChange: e =>
        mainStore.onChangeInput("customerPostOffice", e.target.value),
    },
  ];

  return (
    <Modal center open={openForm} onClose={() => setOpenForm(false)}>
      <div className="modal-form-bask">
        <h2>{t("orderForm.title")}</h2>
        <div>
          {arrayInputs.map((input, index) => (
            <div key={index}>
              <label>{input.label}</label>
              <input
                name={input.name}
                value={input.value}
                onChange={input.onChange}
                type={input.type}
              />
            </div>
          ))}
          <button
            disabled={disableList.includes("") || mainStore.isLoadingForm}
            onClick={() => mainStore.orderItems()}
          >
            {t("buttons.order")}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default observer(OrderFormModal);
