import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import LOGO_IMG from "../../static/img/Logo.svg";
import BASKET_IMG from "../../static/img/basket.svg";
import "./Header.scss";
import BasketModal from "../BasketModal/BasketModal";
import OrderFormModal from "../OrderFormModal/OrderFormModal";
import ThanksModal from "../ThanksModal/ThanksModal";
import { useStore } from "../../store/storeHOC";
import HowOldModal from "../HowOldModal/HowOldModal";
import { hookahPhoneNumber } from "../../static/Content";

const Header = () => {
  const { mainStore } = useStore();
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openThanks, setOpenThanks] = useState(false);
  const [howOldModal, setHowOldModal] = useState(false);
  const checkOld = localStorage.getItem("checkOld");

  useEffect(() => {
    if (checkOld === null) {
      setHowOldModal(true);
    }
  }, [checkOld]);

  return (
    <>
      <header>
        <img src={LOGO_IMG} alt="img" />
        <div>
          <h3>{hookahPhoneNumber}</h3>
          <div onClick={() => setOpen(true)}>
            <img src={BASKET_IMG} alt="" />
            <span>{mainStore.basket_items.length}</span>
          </div>
        </div>
      </header>
      <BasketModal open={open} setOpen={setOpen} setOpenForm={setOpenForm} />
      <OrderFormModal
        openForm={openForm}
        setOpenForm={setOpenForm}
        setOpen={setOpenThanks}
      />
      <ThanksModal open={openThanks} setOpen={setOpenThanks} />
      <HowOldModal open={howOldModal} setOpen={setHowOldModal} />
    </>
  );
};

export default observer(Header);
